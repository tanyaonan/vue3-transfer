import { defineConfig } from 'vite'
import { resolve } from 'node:path'

/**
 * 提取 antd/es 下的第一级目录名，例如 button、card、_util、style。
 */
function extractAntdPath(id: string | null): string | null {
  if (!id) return null
  const match = id.match(/antd[\\/]es[\\/]([^\\/]+)(?:[\\/]|$)/)
  if (!match) return null
  return match[1]
}

/**
 * antd 中属于共享基础设施的目录，统一打包到 shared/antd-core，
 * 不随单个组件 chunk 输出，避免组件间重复。
 */
const antdSharedDirs = new Set([
  '_util',
  'style',
  'theme',
  'locale',
  'version',
  'config-provider',
  'app',
  'index',
])

/**
 * 判断是否为 antd 组件下的 locale 子路径。
 * locale 文件不跟随组件实现一起打包，而是进入 shared/antd-core，
 * 避免使用 Card 等组件时把 calendar、color-picker 等整个组件代码也拉进来。
 * style 子路径保留在对应组件 chunk 中，保持样式按需加载。
 */
function isAntdLocaleSubpath(id: string): boolean {
  const parts = id.split(/[\\/]/)
  const esIdx = parts.indexOf('es')
  if (esIdx === -1 || parts[esIdx - 1] !== 'antd') return false
  return parts.includes('locale')
}

/**
 * 提取应该输出为 antd/<component> chunk 的组件目录名。
 * 仅包含组件实现文件（index.js 及其同目录实现、style），locale 子路径返回 null。
 */
function extractAntdComponentChunkName(id: string | null): string | null {
  if (!id) return null
  const p = extractAntdPath(id)
  if (!p || antdSharedDirs.has(p)) return null
  if (isAntdLocaleSubpath(id)) return null
  return p
}

/**
 * 第三方依赖中需要统一进 shared/core 的包，避免被打散到各个 antd 组件 chunk。
 */
const corePackagePattern =
  /node_modules[\\/](?:react|react-dom|scheduler|@babel[\\/]standalone|@ant-design[\\/](?:colors|cssinjs(?:-utils)?|fast-color|icons(?:-svg)?|react-slick)|@ctrl[\\/]tinycolor|classnames|copy-to-clipboard|dayjs|rc-[a-z-]+|resize-observer-polyfill|scroll-into-view-if-needed|throttle-debounce|@rc-component[\\/]|warning|compute-scroll-into-view|toggle-selection|is-mobile|dom-align|@babel[\\/]runtime|async-validator|@emotion|stylis|memoize-one|rc-util|react-is|@floating-ui|object-assign|use-sync-external-store|js-tokens|loose-envify|prop-types|tiny-invariant|tiny-warning|@kurkle|chart\.js|styled-components|css-to-react-native|csstype)[\\/]/

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'vendor-react-entry.ts'),
      name: 'VendorReact',
      formats: ['es'],
      fileName: () => 'vendor.js',
    },
    outDir: resolve(__dirname, 'vendor-react'),
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: 'vendor.js',
        chunkFileNames: (chunkInfo) => `chunks/${chunkInfo.name}.js`,
        hoistTransitiveImports: false,
        banner: `if (typeof globalThis.process === 'undefined') { globalThis.process = { env: { NODE_ENV: 'production' } } }`,
        codeSplitting: {
          // 默认会递归包含匹配模块的依赖；这里保留默认 true，让 React 等运行时连同依赖一起进入 shared/core
          groups: [
            {
              name: 'shared/core',
              test: corePackagePattern,
              priority: 2,
            },
            {
              name: 'shared/antd-core',
              test: (id: string) => {
                const p = extractAntdPath(id)
                if (!p) return false
                if (antdSharedDirs.has(p)) return true
                return isAntdLocaleSubpath(id)
              },
              priority: 1,
            },
            {
              name: (id: string) => {
                const p = extractAntdComponentChunkName(id)
                return p ? `antd/${p}` : null
              },
              test: (id: string) => extractAntdComponentChunkName(id) !== null,
              priority: 0,
            },
          ],
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
})
