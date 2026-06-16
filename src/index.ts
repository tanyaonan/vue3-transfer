import type { SFCStyleBlock, CompilerError } from '@vue/compiler-sfc'
import type { App } from 'vue'
import type { TransformOptions, TransformResult } from './types.js'

export type { TransformOptions, TransformResult }

declare global {
  interface Window {
    __VUE_TRANSFER_RUNTIME__?: typeof import('vue')
  }
}

type CompilerModule = typeof import('@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js')

let compilerPromise: Promise<CompilerModule> | null = null

async function loadCompiler(): Promise<CompilerModule> {
  if (!compilerPromise) {
    compilerPromise = import('@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js')
  }
  return compilerPromise
}

function generateId(filename: string): string {
  let hash = 0
  for (let i = 0; i < filename.length; i++) {
    const char = filename.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(16).padStart(8, '0')
}

/**
 * Transform a Vue 3 SFC source string into plain JavaScript code.
 *
 * The returned code is a standard ES module that imports Vue runtime helpers
 * and exports the component as the default export.
 *
 * This function is designed to run in a browser environment and expects the
 * input `<script>` block to be plain JavaScript (no TypeScript).
 */
export async function transformVueToJS(
  source: string,
  options: TransformOptions = {},
): Promise<TransformResult> {
  const {
    parse,
    compileScript,
    compileTemplate,
    compileStyleAsync,
    rewriteDefault,
  } = await loadCompiler()

  const filename = options.filename || 'App.vue'
  const isProduction = options.isProduction ?? false
  const styleMode = options.styleMode || 'inject'
  const vapor = options.vapor ?? true

  const { descriptor, errors: parseErrors } = parse(source, {
    filename,
    sourceMap: false,
  })

  if (parseErrors.length) {
    return {
      code: '',
      errors: parseErrors.map((e: CompilerError | SyntaxError) =>
        (e as Error).message || String(e),
      ),
    }
  }

  const id = generateId(filename)
  const hasScoped = descriptor.styles.some((s: SFCStyleBlock) => s.scoped)

  // 1. script
  let scriptCode = ''
  if (descriptor.script || descriptor.scriptSetup) {
    const script = compileScript(descriptor, {
      id,
      inlineTemplate: false,
      vapor,
      templateOptions: {
        ssr: false,
      },
    })
    scriptCode = rewriteDefault(script.content, '__sfc_main__')
  } else {
    scriptCode = 'const __sfc_main__ = {}'
  }

  // 2. template
  let templateCode = ''
  if (descriptor.template) {
    const templateResult = compileTemplate({
      source: descriptor.template.content,
      filename,
      id,
      scoped: hasScoped,
      slotted: descriptor.slotted,
      isProd: isProduction,
      ssr: false,
      ssrCssVars: descriptor.cssVars,
      vapor,
    })

    if (templateResult.errors.length) {
      return {
        code: '',
        errors: templateResult.errors.map((e: string | CompilerError) =>
          typeof e === 'string' ? e : (e as Error).message,
        ),
      }
    }

    templateCode = templateResult.code
    templateCode += '\n\n__sfc_main__.render = render'
    templateCode += '\n__sfc_main__.__file = ' + JSON.stringify(filename)

    if (hasScoped) {
      templateCode += '\n__sfc_main__.__scopeId = ' + JSON.stringify(`data-v-${id}`)
    }
  }

  // 3. styles
  const cssBlocks: string[] = []
  for (const style of descriptor.styles) {
    const styleResult = await compileStyleAsync({
      source: style.content,
      filename,
      id,
      scoped: style.scoped,
      trim: true,
      isProd: isProduction,
    })

    if (styleResult.errors.length) {
      return {
        code: '',
        errors: styleResult.errors.map((e: Error) => e.message || String(e)),
      }
    }

    cssBlocks.push(styleResult.code)
  }

  const css = cssBlocks.join('\n')

  let styleCode = ''
  if (styleMode === 'inject' && css) {
    styleCode = `
const __style__ = document.createElement('style')
__style__.textContent = ${JSON.stringify(css)}
document.head.appendChild(__style__)
`
  }

  const parts = [scriptCode, templateCode, styleCode].filter(Boolean)

  let code = parts.join('\n\n')
  code += '\n\nexport default __sfc_main__'

  if (styleMode === 'inline' && css) {
    code += '\nexport const __css__ = ' + JSON.stringify(css)
  }

  return {
    code,
    css: styleMode === 'inline' ? css : undefined,
    errors: [],
  }
}

/**
 * Transform a Vue 3 SFC source string and mount it directly into a DOM container.
 *
 * This is a browser-only helper. The Vue runtime is bundled into the library,
 * so no import map or external Vue script is required.
 */
export async function renderVueToDOM(
  source: string,
  container: string | Element,
  options: TransformOptions = {},
): Promise<App<Element>> {
  const result = await transformVueToJS(source, {
    ...options,
    styleMode: 'inline',
  })

  if (result.errors.length) {
    throw new Error(result.errors.join('\n'))
  }

  const target = typeof container === 'string'
    ? document.querySelector(container)
    : container

  if (!target) {
    throw new Error(`Cannot find container: ${container}`)
  }

  const [compiler, vueRuntime] = await Promise.all([
    loadCompiler(),
    import('vue'),
  ])

  window.__VUE_TRANSFER_RUNTIME__ = vueRuntime

  const runtimeKeys = Object.keys(vueRuntime)
  const vueModuleCode = [
    'const runtime = window.__VUE_TRANSFER_RUNTIME__',
    ...runtimeKeys.map((key) => `export const ${key} = runtime.${key}`),
    'export default runtime',
  ].join('\n')

  const vueBlob = new Blob([vueModuleCode], { type: 'application/javascript' })
  const vueUrl = URL.createObjectURL(vueBlob)

  try {
    const componentCode = result.code.replace(
      /from\s+['"]vue['"]/g,
      `from '${vueUrl}'`,
    )

    const blob = new Blob([componentCode], { type: 'application/javascript' })
    const url = URL.createObjectURL(blob)

    try {
      const mod = await import(/* @vite-ignore */ url)
      const Component = mod.default

      if (result.css) {
        const style = document.createElement('style')
        style.textContent = result.css
        document.head.appendChild(style)
      }

      const app = vueRuntime.createApp(Component)
      app.use(vueRuntime.vaporInteropPlugin)
      app.mount(target)

      return app
    } finally {
      URL.revokeObjectURL(url)
    }
  } finally {
    URL.revokeObjectURL(vueUrl)
  }
}
