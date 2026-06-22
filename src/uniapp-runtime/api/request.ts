import type { RequestOptions, RequestTask, RequestSuccessResult } from '../utils/constants.js'

export function request(options: RequestOptions): RequestTask {
  const controller = new AbortController()
  const { signal } = controller

  const method = (options.method || 'GET').toUpperCase()
  const headers = options.header || {}
  const timeout = options.timeout ?? 60000

  let body: BodyInit | undefined
  if (options.data != null && method !== 'GET' && method !== 'HEAD') {
    if (typeof options.data === 'string') {
      body = options.data
    } else if (options.data instanceof FormData || options.data instanceof URLSearchParams) {
      body = options.data
    } else if (options.data instanceof ArrayBuffer) {
      body = options.data
    } else {
      body = JSON.stringify(options.data)
      if (!headers['Content-Type'] && !headers['content-type']) {
        headers['Content-Type'] = 'application/json'
      }
    }
  }

  const timer = setTimeout(() => {
    controller.abort()
    options.fail?.({ errMsg: 'request:fail timeout' })
    options.complete?.()
  }, timeout)

  fetch(options.url, {
    method,
    headers,
    body,
    signal,
    credentials: 'include',
  })
    .then(async (res) => {
      clearTimeout(timer)

      let data: unknown
      const contentType = res.headers.get('content-type') || ''
      if (options.dataType === 'json' || contentType.includes('application/json')) {
        data = await res.json().catch(() => ({}))
      } else if (options.responseType === 'arraybuffer') {
        data = await res.arrayBuffer()
      } else {
        data = await res.text()
      }

      const header: Record<string, string> = {}
      res.headers.forEach((value, key) => {
        header[key] = value
      })

      const result: RequestSuccessResult = {
        data,
        statusCode: res.status,
        header,
        cookies: [],
      }
      options.success?.(result)
      options.complete?.()
    })
    .catch((err) => {
      clearTimeout(timer)
      if (signal.aborted) return
      options.fail?.(err instanceof Error ? { errMsg: err.message } : err)
      options.complete?.()
    })

  return {
    abort: () => {
      controller.abort()
      clearTimeout(timer)
    },
  }
}
