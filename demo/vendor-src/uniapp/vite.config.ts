import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { transformUniAppTags } from '../../../src/utils/uniapp-tags.js'

/**
 * 在 @vitejs/plugin-vue 编译 .vue 文件之前，
 * 把 UniApp 内置标签（view/text/image 等）转换为标准 HTML 标签。
 */
function uniAppTagTransformPlugin(): Plugin {
  return {
    name: 'uniapp-tag-transform',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.vue')) return
      return transformUniAppTags(code)
    },
  }
}

/**
 * 对 Wot UI 源码做简单的 UniApp 条件编译预处理。
 *
 * vendor 构建走的是标准 @vitejs/plugin-vue，不会处理 `#ifdef` / `#ifndef` 等
 * UniApp 条件编译指令。部分组件（如 wd-root-portal）包含 `APP-PLUS` 专属的
 * `<script lang="renderjs">` 块，会导致 Vue 报错“Single file component can
 * contain only one <script> element”。
 *
 * 该插件以 H5 为目标平台：
 * - 保留 `#ifdef H5` / `#ifndef MP-*` 块的内容
 * - 移除 `#ifdef APP-PLUS` / `#ifdef MP-*` / `#ifndef H5` 块的内容
 */
function wotUIConditionalCompilePlugin(): Plugin {
  return {
    name: 'wot-ui-conditional-compile',
    enforce: 'pre',
    transform(code, id) {
      if (!id.includes('@wot-ui/ui') || !id.endsWith('.vue')) return

      // 使用栈处理嵌套的 #ifdef / #endif 注释块
      const stack: { keep: boolean; depth: number }[] = []
      let currentKeep = true
      const lines = code.split(/\r?\n/)
      const result: string[] = []

      for (const rawLine of lines) {
        const line = rawLine.trim()
        const ifdefMatch = line.match(/(?:<!--|\/\/)\s*#ifdef\s+(\S+)\s*(?:-->)?/)
        const ifndefMatch = line.match(/(?:<!--|\/\/)\s*#ifndef\s+(\S+)\s*(?:-->)?/)
        const endifMatch = /(?:<!--|\/\/)\s*#endif\s*(?:-->)?/.test(line)

        if (ifdefMatch) {
          const platform = ifdefMatch[1]
          const keep = platform === 'H5'
          stack.push({ keep: currentKeep, depth: stack.length })
          currentKeep = currentKeep && keep
          continue
        }

        if (ifndefMatch) {
          const platform = ifndefMatch[1]
          const keep = platform.startsWith('MP-')
          stack.push({ keep: currentKeep, depth: stack.length })
          currentKeep = currentKeep && keep
          continue
        }

        if (endifMatch) {
          const frame = stack.pop()
          if (frame) {
            currentKeep = frame.keep
          }
          continue
        }

        if (currentKeep) {
          result.push(rawLine)
        }
      }

      return result.join('\n')
    },
  }
}

/**
 * PostCSS 插件：移除 Wot UI 源码中无 scoped 的 `:deep()` 包装。
 *
 * Wot UI 组件的 `<style>` 未声明 `scoped`，但源码里使用了 `:deep()` 伪类。
 * 标准 @vitejs/plugin-vue 不会处理这些 `:deep()`，导致生成的 CSS 在浏览器
 * 中不生效（如 wd-rate 星星颜色、wd-popup 定位等）。
 *
 * 该插件把 `.foo :deep() .bar` 转换为 `.foo .bar`，`:deep() .foo` 转换为 `.foo`，
 * 让样式能够正常命中子组件。
 */
function normalizeFileName(name: string): string {
  return name.replace(/\.vue.*$/, '').replace(/\.mjs$/, '').replace(/\.js$/, '')
}

function isWotUIVueComponent(id: string | null): string | null {
  if (!id) return null
  // 匹配组件主文件：@wot-ui/ui/components/{name}/{name}.vue 或 .../src/{name}.vue
  const match = id.match(/@wot-ui[\\/]ui[\\/]components[\\/]([^\\/]+)(?:[\\/]src)?[\\/]\1\.vue/)
  if (!match) return null
  return match[1]
}

function extractWotUIComponentSharedPath(id: string | null): { component: string; name: string } | null {
  if (!id) return null
  const match = id.match(/@wot-ui[\\/]ui[\\/]components[\\/]([^\\/]+)(?:[\\/]src[\\/]?(.+))?/)
  if (!match) return null
  const component = match[1]
  const subPath = match[2] ? normalizeFileName(match[2]) : 'index'
  return { component, name: subPath }
}

function extractWotUISharedPath(id: string | null): { category: string; name: string } | null {
  if (!id) return null
  const match = id.match(/@wot-ui[\\/]ui[\\/](common|composables|locale|styles)(?:[\\/](.+))?/)
  if (!match) return null
  const category = match[1]
  const subPath = match[2] ? normalizeFileName(match[2]) : ''
  const parts = subPath.split(/[\\/]/).filter(Boolean)
  if (parts.length > 0 && parts[parts.length - 1] === 'index') {
    parts.pop()
  }
  const name = parts.length > 0 ? parts.join('/') : category
  return { category, name }
}

function resolveChunkPath(chunkInfo: {
  name: string
  facadeModuleId: string | null
  moduleIds: string[]
}): string {
  const ids = [chunkInfo.facadeModuleId, ...chunkInfo.moduleIds].filter(Boolean) as string[]

  if (chunkInfo.name === 'vue.runtime') {
    return 'chunks/vue.runtime.js'
  }

  const vueComponent = ids.map(isWotUIVueComponent).find((x): x is string => x !== null)
  if (vueComponent) {
    return `chunks/${vueComponent}.js`
  }

  const componentShared = ids.map(extractWotUIComponentSharedPath).find((x): x is { component: string; name: string } => x !== null)
  if (componentShared) {
    return `chunks/shared/wot-ui/components/${componentShared.component}/${componentShared.name}.js`
  }

  const sharedMatches = ids.map(extractWotUISharedPath).filter((x): x is { category: string; name: string } => x !== null)
  if (sharedMatches.length > 0) {
    const { category, name } = sharedMatches[0]
    return `chunks/shared/wot-ui/${category}/${name}.js`
  }

  return `chunks/shared/${chunkInfo.name}.js`
}

export default defineConfig({
  root: resolve(__dirname, '../../../'),
  plugins: [wotUIConditionalCompilePlugin(), uniAppTagTransformPlugin(), vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'entry.ts'),
      name: 'Vendor',
      formats: ['es'],
      fileName: 'vendor',
    },
    outDir: resolve(__dirname, '../../vendor/uniapp'),
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: 'vendor.js',
        chunkFileNames: (chunkInfo) => resolveChunkPath(chunkInfo as any),
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || ''
          if (info.endsWith('.css')) {
            return 'styles/vendor[extname]'
          }
          return 'assets/[name][extname]'
        },
        banner: `if (typeof globalThis.process === 'undefined') { globalThis.process = { env: { NODE_ENV: 'production' } } }`,
        manualChunks(id) {
          if (id.includes('@vue/') || id.includes('vue/dist/vue.runtime')) {
            return 'vue.runtime'
          }
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION') return
        warn(warning)
      },
    },
    cssCodeSplit: false,
    cssMinify: 'esbuild',
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'remove-deep-combinator',
          Rule(rule) {
            // :deep() 或 :deep(.foo) → .foo
            rule.selector = rule.selector.replace(/:deep\(([^)]*)\)/g, (_, inner) => inner.trim())
          },
        },
      ],
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../../../src'),
      '@dcloudio/uni-app': resolve(__dirname, 'uniapp-stub.ts'),
    },
  },
})
