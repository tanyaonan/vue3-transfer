export interface TransformOptions {
  /**
   * The filename of the source file, used for error reporting and scoped styles.
   * @default 'App.vue'
   */
  filename?: string

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
