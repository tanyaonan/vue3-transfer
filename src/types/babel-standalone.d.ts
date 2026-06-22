declare module '@babel/standalone' {
  export interface TransformOptions {
    filename?: string
    presets?: Array<string | [string, Record<string, unknown>]>
    development?: boolean
  }

  export interface TransformResult {
    code?: string
    map?: unknown
    ast?: unknown
  }

  export function transform(code: string, options?: TransformOptions): TransformResult
}
