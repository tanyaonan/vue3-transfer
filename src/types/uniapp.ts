import type { App, Component, Plugin } from 'vue'
import type { ModuleResolver } from './index.js'

/**
 * UniApp 目标平台。
 * - `'h5'`：浏览器 H5（默认）
 * - `'app'`：App（app-vue）
 * - `'mp-weixin'`：微信小程序
 * - `'mp-alipay'`：支付宝小程序
 */
export type UniAppPlatform = 'h5' | 'app' | 'mp-weixin' | 'mp-alipay'

export interface UniAppTransformOptions {
  /**
   * 源文件名称，用于缓存 key、错误提示和 scoped style，必填。
   */
  filename: string

  /**
   * 是否启用生产模式编译。
   * @default false
   */
  isProduction?: boolean

  /**
   * `<style>` 块的处理方式。
   * - `'inject'`：运行时注入到 document.head
   * - `'inline'`：作为字符串导出
   * - `'none'`：丢弃样式
   * @default 'inject'
   */
  styleMode?: 'inject' | 'inline' | 'none'

  /**
   * 是否启用 IndexedDB 编译缓存。
   * @default true
   */
  useCache?: boolean

  /**
   * 目标平台。该字段会影响浏览器预览时的兼容性处理，
   * 实际编译产物保持与 UniApp 源码一致，可迁移到对应平台。
   * @default 'h5'
   */
  platform?: UniAppPlatform

  /**
   * 将裸模块导入重写为全局变量读取。
   * 例如 `{ '@wot-ui/ui': 'WotUI' }` 会把
   * `import { WdButton } from '@wot-ui/ui'`
   * 改写为 `const { WdButton } = window.WotUI`。
   */
  globals?: Record<string, string>

  /**
   * 模块解析器，用于在浏览器运行时异步解析相对路径组件导入。
   * 返回对应模块的源码字符串；若无法解析，返回 `null`。
   */
  resolver?: ModuleResolver
}

export interface UniAppTransformResult {
  /**
   * 编译后的 JavaScript 代码。
   */
  code: string

  /**
   * 编译后的 CSS 代码，仅在 `styleMode` 为 `'inline'` 时返回。
   */
  css?: string

  /**
   * 编译过程中产生的错误信息。
   */
  errors: string[]
}

export interface UniAppMountOptions {
  /**
   * 挂载前要安装的 Vue 插件（如 Wot UI 的 ConfigProvider）。
   */
  plugins?: Plugin[]
}

export interface RenderableUniAppComponent {
  /**
   * 编译后的 Vue 组件，可在其他 Vue 3 / UniApp 应用中使用。
   */
  component: Component

  /**
   * 编译后的 `<style>` 元素，`mount()` 时自动注入，`unmount()` 时移除。
   */
  style: HTMLStyleElement | null

  /**
   * 将组件挂载到指定 DOM 容器。
   */
  mount(container: string | Element, options?: UniAppMountOptions): App<Element>

  /**
   * 卸载组件并清理已注入的样式。
   */
  unmount(): void
}
