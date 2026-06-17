import type { SFCStyleBlock, CompilerError } from '@vue/compiler-sfc'
import type { App, Component } from 'vue'
import { loadCompiler } from './utils/compiler.js'
import { getCacheEntry, setCacheEntry, clearCompileCache } from './utils/cache.js'
import { generateId } from './utils/id.js'

function createSourceHash(source: string): string {
  return generateId(source)
}

interface RewriteResult {
  code: string
  bindings: string[]
}

function rewriteNamedImports(code: string, specifier: string, globalName: string): RewriteResult {
  const bindings: string[] = []
  const pattern = new RegExp(
    `import\\s+\\{([^}]+)\\}\\s+from\\s+['"]${specifier}['"];?`,
    'g',
  )
  const newCode = code.replace(pattern, (_match, imports: string) => {
    const pairs = imports.split(',').map((s: string) => s.trim())
    const destructuring = pairs.map((pair: string) => {
      const parts = pair.split(/\s+as\s+/).map((s: string) => s.trim())
      if (parts.length === 2) {
        bindings.push(parts[1])
        return `${parts[0]}: ${parts[1]}`
      }
      bindings.push(parts[0])
      return parts[0]
    }).join(', ')
    return `const { ${destructuring} } = window.${globalName}`
  })
  return { code: newCode, bindings }
}
import type { TransformOptions, TransformResult, RenderableComponent, MountOptions } from './types/index.js'

export type { TransformOptions, TransformResult, RenderableComponent }
export { clearCompileCache }

declare global {
  interface Window {
    Vue?: typeof import('vue')
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
 * 将 Vue 3 单文件组件源码编译为纯 JavaScript 代码。
 *
 * 返回的代码为标准 ES 模块，默认导出组件。该函数在浏览器中运行，
 * `<script>` 块目前仅支持纯 JavaScript。
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

  // 编译 script（inlineTemplate: true 会同时把模板编译进 setup 返回的渲染函数，
  // 避免非 Vapor 模式下 `<script setup>` 的绑定无法通过 _ctx 解析的问题）
  let scriptCode = ''
  if (descriptor.script || descriptor.scriptSetup) {
    const script = compileScript(descriptor, {
      id,
      inlineTemplate: true,
      vapor,
      templateOptions: {
        ssr: false,
      },
    })
    scriptCode = rewriteDefault(script.content, '__sfc_main__')
    scriptCode += '\n\n__sfc_main__.__file = ' + JSON.stringify(filename)
    if (hasScoped) {
      scriptCode += '\n__sfc_main__.__scopeId = ' + JSON.stringify(`data-v-${id}`)
    }
  } else {
    scriptCode = 'const __sfc_main__ = {}'
  }

  // 编译 style
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

  const parts = [scriptCode, styleCode].filter(Boolean)

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
 * 将 Vue 3 单文件组件源码编译为可直接挂载的组件对象。
 *
 * Vue 运行时已打包进库内，无需额外配置 import map 或外部 Vue 脚本。
 * 返回的组件可在已有 Vue 3 应用中使用，同时提供 mount / unmount 方法用于预览。
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

  // 如果调用方已提前加载并暴露 Vue 运行时（例如通过 import map），则直接使用，
  // 否则按需加载库内置的 Vue 运行时 chunk。
  const vueRuntime = window.Vue ?? await import('vue')
  window.Vue = vueRuntime

  // 将生成的 ES 模块代码改写为从全局运行时对象读取 Vue API，
  // 避免依赖 import map 或裸导入。
  let componentCode = result.code
  const globalBindings: string[] = []

  const vueRewrite = rewriteNamedImports(componentCode, 'vue', 'Vue')
  componentCode = vueRewrite.code

  if (options.globals) {
    for (const [specifier, globalName] of Object.entries(options.globals)) {
      const rewrite = rewriteNamedImports(componentCode, specifier, globalName)
      componentCode = rewrite.code
      globalBindings.push(...rewrite.bindings)
    }
  }

  componentCode = componentCode.replace(/export const __css__ = [\s\S]*$/m, '')
  componentCode = componentCode.replace(/\bexport\s+function\s+/g, 'function ')

  // 把通过 globals 引入的命名导出自动注册为局部组件，
  // 这样 `<script setup>` 中 `import { ElCard } from 'element-plus'`
  // 被改写后仍能正确解析 `<el-card>` 组件。
  if (globalBindings.length) {
    componentCode = componentCode.replace(
      /\bexport\s+default\s+__sfc_main__\s*;?\s*$/,
      `__sfc_main__.components = { ${globalBindings.join(', ')} }\n\nexport default __sfc_main__`,
    )
  }

  componentCode = componentCode.replace(/\bexport\s+default\s+__sfc_main__\s*;?\s*$/, 'return __sfc_main__')

  // 延迟执行编译后的组件代码，确保 `globals` 中配置的第三方全局库
  // （如 Element Plus）在挂载前已经加载到 window 上。
  let Component: Component | undefined
  function getComponent(): Component {
    if (!Component) {
      Component = new Function(componentCode)() as Component
    }
    return Component
  }

  let style: HTMLStyleElement | null = null
  if (result.css) {
    style = document.createElement('style')
    style.textContent = result.css
    style.dataset.vueTransfer = 'true'
  }

  let app: App<Element> | null = null

  return {
    get component() {
      return getComponent()
    },
    style,

    mount(container, mountOptions?: MountOptions) {
      const target = typeof container === 'string'
        ? document.querySelector(container)
        : container

      if (!target) {
        throw new Error(`Cannot find container: ${container}`)
      }

      if (style && !style.parentNode) {
        document.head.appendChild(style)
      }

      app = vueRuntime.createApp(getComponent())
      if (mountOptions?.plugins) {
        for (const plugin of mountOptions.plugins) {
          app.use(plugin)
        }
      }
      // Vapor 模式需要 vaporInteropPlugin 做兼容；非 Vapor 模式（如配合
      // Element Plus 等未适配 Vapor 的组件库）则跳过。
      if (options.vapor !== false) {
        app.use(vueRuntime.vaporInteropPlugin)
      }
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
