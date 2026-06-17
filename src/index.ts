import type { SFCStyleBlock, CompilerError } from '@vue/compiler-sfc'
import type { App, Component } from 'vue'
import { loadCompiler } from './utils/compiler.js'
import { getCacheEntry, setCacheEntry, clearCompileCache } from './utils/cache.js'
import { generateId } from './utils/id.js'

function createSourceHash(source: string): string {
  return generateId(source)
}
import type { TransformOptions, TransformResult, RenderableComponent } from './types/index.js'

export type { TransformOptions, TransformResult, RenderableComponent }
export { clearCompileCache }

declare global {
  interface Window {
    __VUE_TRANSFER_RUNTIME__?: typeof import('vue')
  }
}

function createCacheKey(options: TransformOptions): string {
  return generateId(
    JSON.stringify({
      filename: options.filename,
      isProduction: options.isProduction,
      styleMode: options.styleMode,
      vapor: options.vapor,
    }),
  )
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
  options: TransformOptions,
): Promise<TransformResult> {
  if (!options.filename) {
    return {
      code: '',
      errors: ['filename is required'],
    }
  }

  const useCache = options.useCache ?? true
  const sourceHash = createSourceHash(source)
  const cacheKey = useCache ? createCacheKey(options) : null

  if (cacheKey) {
    const cached = await getCacheEntry(cacheKey, sourceHash)
    if (cached) return cached
  }

  const {
    parse,
    compileScript,
    compileTemplate,
    compileStyleAsync,
    rewriteDefault,
  } = await loadCompiler()

  const filename = options.filename
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

  const result: TransformResult = {
    code,
    css: styleMode === 'inline' ? css : undefined,
    errors: [],
  }

  if (cacheKey) {
    await setCacheEntry(cacheKey, sourceHash, result)
  }

  return result
}

/**
 * Transform a Vue 3 SFC source string into a renderable component.
 *
 * This is a browser-only helper. The Vue runtime is bundled into the library,
 * so no import map or external Vue script is required.
 *
 * The returned object exposes the compiled component for use in an existing
 * Vue 3 app, plus `mount()` / `unmount()` helpers for preview scenarios.
 */
export async function renderVueToDOM(
  source: string,
  options: TransformOptions,
): Promise<RenderableComponent> {
  const result = await transformVueToJS(source, {
    ...options,
    styleMode: 'inline',
  })

  if (result.errors.length) {
    throw new Error(result.errors.join('\n'))
  }

  const vueRuntime = await import('vue')

  window.__VUE_TRANSFER_RUNTIME__ = vueRuntime

  // Convert generated ES module code into code that reads Vue APIs from the
  // global runtime object. This avoids relying on import maps or bare imports.
  let componentCode = result.code

  componentCode = componentCode.replace(
    /import\s+\{([^}]+)\}\s+from\s+['"]vue['"];?/g,
    (_match, imports: string) => {
      const pairs = imports.split(',').map((s: string) => s.trim())
      const destructuring = pairs.map((pair: string) => {
        const parts = pair.split(/\s+as\s+/).map((s: string) => s.trim())
        if (parts.length === 2) {
          return `${parts[0]}: ${parts[1]}`
        }
        return parts[0]
      }).join(', ')
      return `const { ${destructuring} } = window.__VUE_TRANSFER_RUNTIME__`
    },
  )

  componentCode = componentCode.replace(/export const __css__ = [\s\S]*$/m, '')
  componentCode = componentCode.replace(/\bexport\s+function\s+/g, 'function ')
  componentCode = componentCode.replace(/\bexport\s+default\s+__sfc_main__\s*;?\s*$/, 'return __sfc_main__')

  const Component = new Function(componentCode)()

  let style: HTMLStyleElement | null = null
  if (result.css) {
    style = document.createElement('style')
    style.textContent = result.css
    style.dataset.vueTransfer = 'true'
  }

  let app: App<Element> | null = null

  return {
    component: Component,
    style,

    mount(container) {
      const target = typeof container === 'string'
        ? document.querySelector(container)
        : container

      if (!target) {
        throw new Error(`Cannot find container: ${container}`)
      }

      if (style && !style.parentNode) {
        document.head.appendChild(style)
      }

      app = vueRuntime.createApp(Component)
      app.use(vueRuntime.vaporInteropPlugin)
      app.mount(target)

      return app
    },

    unmount() {
      if (app) {
        app.unmount()
        app = null
      }
      if (style && style.parentNode) {
        style.remove()
      }
    },
  }
}
