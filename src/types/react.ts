import type { ComponentType } from 'react'
import type { Root } from 'react-dom/client'

export interface ReactTransformOptions {
  /**
   * 源文件名称，用于缓存 key、错误提示，必填。
   */
  filename: string

  /**
   * 是否启用生产模式编译。
   * @default false
   */
  isProduction?: boolean

  /**
   * `<style>` 块的处理方式。React 源码中一般不包含 `<style>` 块，
   * 保留该字段是为了与 Vue 接口保持一致。
   * @default 'inject'
   */
  styleMode?: 'inject' | 'inline' | 'none'

  /**
   * 是否启用 IndexedDB 编译缓存。
   * @default true
   */
  useCache?: boolean

  /**
   * 将裸模块导入重写为全局变量读取。
   * 例如 `{ 'antd': 'antd' }` 会把 `import { Button } from 'antd'`
   * 改写为 `const { Button } = window.antd`。
   */
  globals?: Record<string, string>
}

export interface ReactTransformResult {
  /**
   * 编译后的 JavaScript 代码。
   */
  code: string

  /**
   * 编译后的 CSS 代码（React 源码通常不生成）。
   */
  css?: string

  /**
   * 编译过程中产生的错误信息。
   */
  errors: string[]
}

export interface ReactMountOptions {
  /**
   * 是否在 React.StrictMode 下渲染。
   * @default false
   */
  strictMode?: boolean
}

export interface RenderableReactComponent {
  /**
   * 编译后的 React 组件，可在其他 React 应用中使用。
   */
  component: ComponentType<any>

  /**
   * 编译后的样式元素（React 源码通常没有）。
   */
  style: HTMLStyleElement | null

  /**
   * 将组件挂载到指定 DOM 容器。
   */
  mount(container: string | Element, options?: ReactMountOptions): Root

  /**
   * 卸载组件并清理已注入的样式。
   */
  unmount(): void
}
