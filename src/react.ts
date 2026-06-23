import type { ComponentType } from 'react'
import type { Root } from 'react-dom/client'
import type {
  ReactTransformOptions,
  ReactTransformResult,
  ReactMountOptions,
  RenderableReactComponent,
} from './types/react.js'
import { getCacheEntry, setCacheEntry, clearCompileCache } from './utils/cache.js'
import { generateId } from './utils/id.js'

export type { ReactTransformOptions, ReactTransformResult, RenderableReactComponent }
export { clearCompileCache }

declare global {
  interface Window {
    React?: typeof import('react')
    ReactDOM?: typeof import('react-dom/client')
    ReactJSXRuntime?: typeof import('react/jsx-runtime')
  }
}

function createSourceHash(source: string): string {
  return generateId(source)
}

function createCacheKey(options: ReactTransformOptions, resolvedSources?: Record<string, string>): string {
  return generateId(
    JSON.stringify({
      filename: options.filename,
      isProduction: options.isProduction,
      styleMode: options.styleMode,
      resolvedSources: resolvedSources
        ? Object.entries(resolvedSources)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([k, v]) => `${k}:${createSourceHash(v)}`)
            .join(',')
        : undefined,
      // 在缓存 key 中混入编译器实现指纹，避免旧版编译器缓存被新版复用。
      compilerFingerprint: transformReactToJS.toString().length,
    }),
  )
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

interface RewriteResult {
  code: string
  bindings: string[]
}

function rewriteNamedBindings(imports: string, bindings: string[]): string {
  return imports
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((pair) => {
      const parts = pair.split(/\s+as\s+/i).map((s) => s.trim())
      if (parts.length === 2) {
        bindings.push(parts[1])
        return `${parts[0]}: ${parts[1]}`
      }
      bindings.push(parts[0])
      return parts[0]
    })
    .join(', ')
}

/**
 * 将指定模块的导入语句重写为对全局变量的读取。
 * 支持默认导入、命名空间导入以及命名导入（含别名）。
 */
function rewriteImports(code: string, specifier: string, globalName: string): RewriteResult {
  const bindings: string[] = []
  const spec = escapeRegExp(specifier)

  let newCode = code
    // import React from 'react' / import * as React from 'react'
    .replace(
      new RegExp(
        `^\\s*import\\s+(?:(\\*)\\s+as\\s+(\\w+)|(\\w+))\\s+from\\s+['"]${spec}['"];?\\s*$`,
        'gm',
      ),
      (_match, star, nsAlias, defAlias) => {
        const alias = star ? nsAlias : defAlias
        return `const ${alias} = window.${globalName}`
      },
    )
    // import React, { useState } from 'react'
    .replace(
      new RegExp(
        `^\\s*import\\s+(\\w+)\\s*,\\s*\\{([^}]*)\\}\\s+from\\s+['"]${spec}['"];?\\s*$`,
        'gm',
      ),
      (_match, defAlias, imports) => {
        const named = rewriteNamedBindings(imports, bindings)
        return `const ${defAlias} = window.${globalName}\nconst { ${named} } = window.${globalName}`
      },
    )
    // import { useState, useEffect as eff } from 'react'
    .replace(
      new RegExp(
        `^\\s*import\\s+\\{([^}]*)\\}\\s+from\\s+['"]${spec}['"];?\\s*$`,
        'gm',
      ),
      (_match, imports) => {
        const named = rewriteNamedBindings(imports, bindings)
        return `const { ${named} } = window.${globalName}`
      },
    )

  return { code: newCode, bindings }
}

function convertExports(code: string): string {
  return code
    .replace(/\bexport\s+default\s+function\s+(\w+)\s*/, 'return function $1 ')
    .replace(/\bexport\s+default\s+/, 'return ')
    .replace(/\bexport\s+(?:const|let|var|function)\s+(\w+)/g, '$1')
    .replace(/\bexport\s*\{[^}]*\}\s*;?/g, '')
}

/**
 * 从源码中提取相对路径的本地导入（如 `import X from './button.jsx'`）。
 * 返回去重后的相对路径列表。
 */
function extractLocalImports(code: string): string[] {
  const specifiers = new Set<string>()
  const patterns = [
    /import\s+\w+\s+from\s+['"](\.\/[^'"]+\.(?:jsx?|tsx?))['"];?/g,
    /import\s+\{[^}]+\}\s+from\s+['"](\.\/[^'"]+\.(?:jsx?|tsx?))['"];?/g,
  ]
  for (const pattern of patterns) {
    let match: RegExpExecArray | null
    while ((match = pattern.exec(code)) !== null) {
      specifiers.add(match[1])
    }
  }
  return [...specifiers]
}

interface LocalImportRewriteResult {
  code: string
  bindings: string[]
}

/**
 * 将源码中的相对路径导入改写为从本地模块表读取。
 */
function rewriteLocalImports(code: string): LocalImportRewriteResult {
  const bindings: string[] = []

  // import X from './xxx.jsx'
  let newCode = code.replace(
    /import\s+(\w+)\s+from\s+['"](\.\/[^'"]+\.(?:jsx?|tsx?))['"];?/g,
    (_match, binding: string, specifier: string) => {
      bindings.push(binding)
      return `const ${binding} = __local_modules__[${JSON.stringify(specifier)}]`
    },
  )

  // import { X, Y as Z } from './xxx.jsx'
  newCode = newCode.replace(
    /import\s+\{([^}]+)\}\s+from\s+['"](\.\/[^'"]+\.(?:jsx?|tsx?))['"];?/g,
    (_match, imports: string, specifier: string) => {
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
      return `const { ${destructuring} } = __local_modules__[${JSON.stringify(specifier)}]`
    },
  )

  return { code: newCode, bindings }
}

/**
 * 将本地模块编译产物封装为可在主组件代码中执行的模块表。
 * 子模块中的 React / JSX 运行时 / globals 导入也需要重写为全局读取。
 */
function createLocalModulesCode(
  localModules: Record<string, ReactTransformResult>,
  globals?: Record<string, string>,
): string {
  const entries = Object.entries(localModules).map(([specifier, result]) => {
    let moduleCode = convertExports(result.code)
    moduleCode = rewriteImports(moduleCode, 'react/jsx-runtime', 'ReactJSXRuntime').code
    moduleCode = rewriteImports(moduleCode, 'react', 'React').code
    moduleCode = rewriteImports(moduleCode, 'react-dom/client', 'ReactDOM').code
    if (globals) {
      for (const [specifier, globalName] of Object.entries(globals)) {
        moduleCode = rewriteImports(moduleCode, specifier, globalName).code
      }
    }
    return `${JSON.stringify(specifier)}: (function() {
${moduleCode}
})()`
  })
  return `const __local_modules__ = {\n${entries.join(',\n')}\n}`
}

/**
 * 将 React JSX 源码编译为纯 JavaScript 代码。
 *
 * 该函数在浏览器中运行，使用 @babel/standalone 把 JSX 转换为
 * React 19 自动运行时（`react/jsx-runtime`）调用。源码中 `<script>` 块只支持纯 JavaScript。
 */
export async function transformReactToJS(
  source: string,
  options: ReactTransformOptions,
): Promise<ReactTransformResult> {
  if (!options.filename) {
    return {
      code: '',
      errors: ['filename is required'],
    }
  }

  const useCache = options.useCache ?? true
  const sourceHash = createSourceHash(source)

  // 在编译前通过 resolver 异步解析本地依赖，并把依赖内容参与缓存 key。
  const resolvedSources: Record<string, string> = {}
  if (options.resolver) {
    const localImports = extractLocalImports(source)
    for (const specifier of localImports) {
      const depSource = await options.resolver.resolve(specifier, options.filename)
      if (depSource != null) {
        resolvedSources[specifier] = depSource
      }
    }
  }

  const cacheKey = useCache ? createCacheKey(options, resolvedSources) : null

  if (cacheKey) {
    const cached = await getCacheEntry(cacheKey, sourceHash)
    if (cached) {
      return {
        code: cached.code,
        css: cached.css,
        errors: cached.errors,
        localModules: cached.localModules,
      }
    }
  }

  const babelModule: any = await import('@babel/standalone')
  const transform = babelModule.transform ?? babelModule.default?.transform
  if (typeof transform !== 'function') {
    return {
      code: '',
      errors: ['@babel/standalone transform is not available'],
    }
  }

  try {
    const transformed = transform(source, {
      filename: options.filename,
      presets: [
        [
          'react',
          {
            runtime: 'automatic',
            importSource: 'react',
            // 浏览器内运行统一使用 production 运行时，避免与本地 vendor 的
            // process.env.NODE_ENV=production 产物不一致。
            development: false,
          },
        ],
      ],
    })

    // 递归编译本地依赖（如 `import MyButton from './button.jsx'`），
    // 并把子组件直接内联到当前产物中，避免缓存中保留无法执行的相对路径导入。
    const localModules: Record<string, ReactTransformResult> = {}
    if (options.resolver) {
      for (const [specifier, depSource] of Object.entries(resolvedSources)) {
        if (!localModules[specifier]) {
          const depResult = await transformReactToJS(depSource, {
            ...options,
            filename: specifier,
          })
          if (depResult.errors.length) {
            return {
              code: '',
              errors: depResult.errors,
            }
          }
          localModules[specifier] = depResult
          Object.assign(localModules, depResult.localModules)
        }
      }
    }

    let code = transformed.code ?? ''

    // 把本地依赖内联为模块表并替换源码中的相对路径导入
    if (Object.keys(localModules).length) {
      code = createLocalModulesCode(localModules, options.globals) + '\n\n' + code
      const localRewrite = rewriteLocalImports(code)
      code = localRewrite.code
    }

    const result: ReactTransformResult = {
      code,
      errors: [],
      localModules,
    }

    if (cacheKey) {
      await setCacheEntry(cacheKey, sourceHash, result)
    }

    return result
  } catch (err) {
    return {
      code: '',
      errors: [(err as Error).message || String(err)],
    }
  }
}

/**
 * 将 React JSX 源码编译为可直接挂载的组件对象。
 *
 * React 运行时被打包进库内，无需额外配置 import map 或外部 React 脚本。
 * 返回的组件可在其他 React 应用中使用，同时提供 mount / unmount 方法用于预览。
 */
export async function renderReactToDOM(
  source: string,
  options: ReactTransformOptions,
): Promise<RenderableReactComponent> {
  const result = await transformReactToJS(source, {
    ...options,
    styleMode: 'inline',
  })

  if (result.errors.length) {
    throw new Error(result.errors.join('\n'))
  }

  const React = window.React ?? (await import('react'))
  const ReactDOM = window.ReactDOM ?? (await import('react-dom/client'))
  const ReactJSXRuntime = window.ReactJSXRuntime ?? (await import('react/jsx-runtime'))
  window.React = React
  window.ReactDOM = ReactDOM
  window.ReactJSXRuntime = ReactJSXRuntime

  let componentCode = result.code

  const jsxRuntimeRewrite = rewriteImports(componentCode, 'react/jsx-runtime', 'ReactJSXRuntime')
  componentCode = jsxRuntimeRewrite.code

  const reactRewrite = rewriteImports(componentCode, 'react', 'React')
  componentCode = reactRewrite.code

  const reactDomRewrite = rewriteImports(componentCode, 'react-dom/client', 'ReactDOM')
  componentCode = reactDomRewrite.code

  if (options.globals) {
    for (const [specifier, globalName] of Object.entries(options.globals)) {
      const rewrite = rewriteImports(componentCode, specifier, globalName)
      componentCode = rewrite.code
    }
  }

  componentCode = convertExports(componentCode)

  let Component: ComponentType<any> | undefined
  function getComponent(): ComponentType<any> {
    if (!Component) {
      Component = new Function(componentCode)() as ComponentType<any>
    }
    return Component
  }

  let style: HTMLStyleElement | null = null
  if (result.css) {
    style = document.createElement('style')
    style.textContent = result.css
    style.dataset.reactTransfer = 'true'
  }

  let root: Root | null = null

  return {
    get component() {
      return getComponent()
    },
    style,

    mount(container, mountOptions?: ReactMountOptions) {
      const target = typeof container === 'string'
        ? document.querySelector(container)
        : container

      if (!target) {
        throw new Error(`Cannot find container: ${container}`)
      }

      if (style && !style.parentNode) {
        document.head.appendChild(style)
      }

      root = ReactDOM.createRoot(target as Element)
      let element = React.createElement(getComponent())
      if (mountOptions?.strictMode) {
        element = React.createElement(React.StrictMode, null, element)
      }
      root.render(element)

      return root
    },

    unmount() {
      if (root) {
        root.unmount()
        root = null
      }
      if (style && style.parentNode) {
        style.remove()
      }
    },
  }
}
