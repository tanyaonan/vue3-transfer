import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { readdirSync, statSync } from 'node:fs'

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
 * 动态获取 antd/es 下第一个非共享的组件目录，仅用于兜底命名。
 * 如果某个组件目录被 bundler 用作 React 运行时的宿主，
 * 直接命名为 antd/core 更语义化。
 */
function getFirstAntdComponentDir(): string | null {
  try {
    const antdEs = resolve(__dirname, '../node_modules/antd/es')
    const dirs = readdirSync(antdEs).filter((name) => {
      const full = resolve(antdEs, name)
      try {
        return statSync(full).isDirectory() && !antdSharedDirs.has(name)
      } catch {
        return false
      }
    })
    return dirs.sort()[0] ?? null
  } catch {
    return null
  }
}

const firstAntdComponentDir = getFirstAntdComponentDir()

/**
 * 第三方依赖中需要统一进 shared/core 的包，避免被打散到各个 antd 组件 chunk。
 */
const corePackagePattern =
  /node_modules[\\/](?:react|react-dom|scheduler|@babel[\\/]standalone|@ant-design[\\/](?:colors|cssinjs(?:-utils)?|fast-color|icons(?:-svg)?|react-slick)|@ctrl[\\/]tinycolor|classnames|copy-to-clipboard|dayjs|rc-[a-z-]+|resize-observer-polyfill|scroll-into-view-if-needed|throttle-debounce|@rc-component[\\/]|warning|compute-scroll-into-view|toggle-selection|is-mobile|dom-align|@babel[\\/]runtime|async-validator|@emotion|stylis|memoize-one|rc-util|react-is|@floating-ui|object-assign|use-sync-external-store|js-tokens|loose-envify|prop-types|tiny-invariant|tiny-warning|@kurkle|chart\.js)[\\/]/

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
                return p !== null && antdSharedDirs.has(p)
              },
              priority: 1,
            },
            {
              name: (id: string) => {
                const p = extractAntdPath(id)
                if (!p || antdSharedDirs.has(p)) return null
                if (p === firstAntdComponentDir) return 'antd/core'
                return `antd/${p}`
              },
              test: (id: string) => extractAntdPath(id) !== null,
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
