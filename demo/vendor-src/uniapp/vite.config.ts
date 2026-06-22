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

function normalizeFileName(name: string): string {
  return name.replace(/\.vue.*$/, '').replace(/\.mjs$/, '').replace(/\.js$/, '')
}

function extractWotUIComponentPath(id: string | null): string | null {
  if (!id) return null
  const match = id.match(/@wot-ui[\\/]ui[\\/]components[\\/]([^\\/]+)(?:[\\/]src[\\/]?(.+))?/)
  if (!match) return null
  return match[1]
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

  const componentMatches = ids.map(extractWotUIComponentPath).filter((x): x is string => x !== null)
  if (componentMatches.length > 0) {
    const component = componentMatches[0]
    return `chunks/wd-${component}.js`
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
  plugins: [uniAppTagTransformPlugin(), vue()],
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
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../../../src'),
    },
  },
})
