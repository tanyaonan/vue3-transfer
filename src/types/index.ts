import type { App, Component, Plugin } from 'vue'

export interface TransformOptions {
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
   * 是否启用实验性 Vapor 模式（模板直接编译为 DOM 操作）。
   * @default true
   */
  vapor?: boolean

  /**
   * 是否启用 IndexedDB 编译缓存。
   * @default true
   */
  useCache?: boolean

  /**
   * 将裸模块导入重写为全局变量读取。
   * 键为模块名（如 `'element-plus'`），值为全局变量名（如 `'ElementPlus'`）。
   * 仅支持命名导入：`import { ElMessage } from 'element-plus'`
   * 会被改写为 `const { ElMessage } = window.ElementPlus`。
   */
  globals?: Record<string, string>

  /**
   * 模块解析器，用于在浏览器运行时异步解析相对路径组件导入
   *（如 `import MyButton from './button.vue'`）。
   * 返回对应模块的源码字符串；若无法解析，返回 `null`。
   */
  resolver?: ModuleResolver
}

/**
 * 浏览器运行时模块解析器。
 */
export interface ModuleResolver {
  /**
   * 解析相对路径模块。
   * @param specifier 源码中使用的相对路径，例如 `'./button.vue'`。
   * @param importer 当前正在编译的文件名，例如 `'counter.vue'`。
   * @returns 模块源码；解析失败时返回 `null`。
   */
  resolve(specifier: string, importer: string): Promise<string | null>
}

export interface TransformResult {
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

  /**
   * 递归编译的本地依赖模块，键为相对路径，值为该依赖的编译结果。
   * 仅在调用方传入 `resolver` 选项且源码中存在相对路径导入时返回。
   */
  localModules?: Record<string, TransformResult>
}

export interface MountOptions {
  /**
   * 挂载前要安装的 Vue 插件（如 Element Plus）。
   */
  plugins?: Plugin[]
}

export interface RenderableComponent {
  /**
   * 编译后的 Vue 组件，可在其他 Vue 3 应用中使用。
   */
  component: Component

  /**
   * 编译后的 `<style>` 元素，`mount()` 时自动注入，`unmount()` 时移除。
   */
  style: HTMLStyleElement | null

  /**
   * 将组件挂载到指定 DOM 容器。
   */
  mount(container: string | Element, options?: MountOptions): App<Element>

  /**
   * 卸载组件并清理已注入的样式。
   */
  unmount(): void
}
