/**
 * 浏览器端 `uni.createSelectorQuery` 实现。
 *
 * Wot UI 组件依赖该 API 获取节点尺寸。此处提供基于 DOM 的查询，
 * 支持 `.in(scope).select(selector).boundingClientRect(callback).exec()` 链式调用。
 */
export function createSelectorQuery() {
  let selector = ''
  let scope: any = null
  let all = false

  function getRoot(): Element | Document {
    return scope && scope.$el ? scope.$el : document
  }

  function queryNodes(): Element | Element[] | null {
    const root = getRoot()
    if (all) {
      const list = Array.from(root.querySelectorAll(selector))
      return list.length > 0 ? list : []
    }
    return root.querySelector(selector)
  }

  return {
    in(s: any) {
      scope = s
      return this
    },
    select(sel: string) {
      selector = sel
      all = false
      return this
    },
    selectAll(sel: string) {
      selector = sel
      all = true
      return this
    },
    boundingClientRect(callback?: (rect: DOMRect | DOMRect[] | null) => void) {
      const nodes = queryNodes()
      const rect = all
        ? (nodes as Element[]).map((n) => n.getBoundingClientRect())
        : nodes
          ? (nodes as Element).getBoundingClientRect()
          : null
      if (callback) callback(rect)
      return this
    },
    fields(_config: any, callback?: (res: any) => void) {
      const nodes = queryNodes()
      const res = all
        ? (nodes as Element[]).map((n) => ({ node: n, ...n.getBoundingClientRect() }))
        : nodes
          ? { node: nodes, ...(nodes as Element).getBoundingClientRect() }
          : null
      if (callback) callback(res)
      return this
    },
    exec(callback?: (res: any[]) => void) {
      if (callback) callback([])
    },
  }
}
