import { defineConfig } from 'vite'
import { resolve } from 'node:path'

function normalizeFileName(name: string): string {
  return name.replace(/\.vue.*$/, '').replace(/\.mjs$/, '').replace(/\.js$/, '')
}

function extractElementPlusComponentPath(id: string | null): { component: string; subPath?: string } | null {
  if (!id) return null
  const match = id.match(/element-plus[\\/]es[\\/]components[\\/]([^\\/]+)(?:[\\/]src[\\/](.+))?/)
  if (!match) return null
  const component = match[1]
  const subPath = match[2] ? normalizeFileName(match[2]) : undefined
  return { component, subPath }
}

function extractElementPlusSharedPath(id: string | null): { category: string; name: string } | null {
  if (!id) return null
  const match = id.match(/element-plus[\\/]es[\\/](utils|hooks|directives|constants|_virtual)(?:[\\/](.+))?/)
  if (!match) return null
  const category = match[1].replace('_', '')
  const subPath = match[2] ? normalizeFileName(match[2]) : ''
  const parts = subPath.split(/[\\/]/).filter(Boolean)
  // 去掉末尾的 index，例如 hooks/use-namespace/index -> hooks/use-namespace
  if (parts.length > 0 && parts[parts.length - 1] === 'index') {
    parts.pop()
  }
  const name = parts.length > 0 ? parts.join('/') : category
  return { category, name }
}

function extractPackageName(id: string | null): { pkg: string; sub?: string } | null {
  if (!id) return null
  if (id.includes('@vueuse')) return { pkg: 'vueuse' }
  if (id.includes('@element-plus/icons-vue')) return { pkg: 'element-plus-icons' }
  if (id.includes('@ctrl/tinycolor')) return { pkg: 'tinycolor' }
  if (id.includes('lodash-es')) return { pkg: 'lodash' }
  if (id.includes('dayjs')) {
    const pluginMatch = id.match(/dayjs[\\/]plugin[\\/]([^\\/]+)\.js$/)
    return { pkg: 'dayjs', sub: pluginMatch ? pluginMatch[1] : undefined }
  }
  return null
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

  if (chunkInfo.name === 'css') {
    for (const id of ids) {
      const el = extractElementPlusComponentPath(id)
      if (el) {
        return `chunks/css/el-${el.component}.js`
      }
    }
    return 'chunks/css/[name].js'
  }

  const componentMatches = ids
    .map(extractElementPlusComponentPath)
    .filter((x): x is { component: string; subPath?: string } => x !== null)
  if (componentMatches.length > 0) {
    const component = componentMatches[0].component
    const hasIndex = ids.some((id) => {
      const m = id.match(/element-plus[\\/]es[\\/]components[\\/][^\\/]+[\\/]index\.mjs$/)
      return !!m
    })
    if (hasIndex) {
      return `chunks/el-${component}.js`
    }
    const subPath = componentMatches[0].subPath
    if (subPath) {
      return `chunks/el-${component}/${subPath}.js`
    }
    return `chunks/el-${component}.js`
  }

  const sharedMatches = ids
    .map(extractElementPlusSharedPath)
    .filter((x): x is { category: string; name: string } => x !== null)
  if (sharedMatches.length > 0) {
    const { category, name } = sharedMatches[0]
    return `chunks/shared/element-plus/${category}/${name}.js`
  }

  const pkgMatches = ids.map(extractPackageName).filter((x): x is { pkg: string; sub?: string } => x !== null)
  if (pkgMatches.length > 0) {
    const { pkg, sub } = pkgMatches[0]
    if (pkg === 'lodash') {
      return `chunks/shared/lodash/${chunkInfo.name}.js`
    }
    if (sub) {
      return `chunks/shared/${pkg}/${sub}.js`
    }
    return `chunks/shared/${pkg}.js`
  }

  return `chunks/shared/${chunkInfo.name}.js`
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'vendor-entry.ts'),
      name: 'Vendor',
      formats: ['es'],
      fileName: 'vendor',
    },
    outDir: resolve(__dirname, 'vendor'),
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
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
})
