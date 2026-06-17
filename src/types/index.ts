import type { App, Component } from 'vue'

export interface TransformOptions {
  /**
   * The filename of the source file, used for caching, error reporting and
   * scoped styles. Required to prevent different files from overwriting each
   * other's cache entries.
   */
  filename: string

  /**
   * Whether to compile in production mode.
   * @default false
   */
  isProduction?: boolean

  /**
   * How to handle `<style>` blocks.
   * - `'inject'`: inject styles into the document head at runtime
   * - `'inline'`: append the compiled CSS as an exported string
   * - `'none'`: drop styles
   * @default 'inject'
   */
  styleMode?: 'inject' | 'inline' | 'none'

  /**
   * Enable experimental Vapor mode compilation.
   * Vapor mode compiles templates to direct DOM operations instead of
   * virtual DOM, achieving near-native performance.
   * @default true
   */
  vapor?: boolean

  /**
   * Whether to use the in-memory compile cache. Cached by source + options.
   * @default true
   */
  useCache?: boolean
}

export interface TransformResult {
  /**
   * The compiled JavaScript code.
   */
  code: string

  /**
   * The compiled CSS code, only available when `styleMode` is `'inline'`.
   */
  css?: string

  /**
   * Errors encountered during compilation.
   */
  errors: string[]
}

export interface RenderableComponent {
  /**
   * The compiled Vue component. Can be used directly in another Vue 3 app
   * (e.g. passed to `createApp()` or used as a child component).
   */
  component: Component

  /**
   * The compiled `<style>` element, not yet injected into the document.
   * It is automatically injected on `mount()` and removed on `unmount()`.
   */
  style: HTMLStyleElement | null

  /**
   * Mount the component into a DOM container.
   */
  mount(container: string | Element): App<Element>

  /**
   * Unmount the component and clean up injected styles.
   */
  unmount(): void
}
