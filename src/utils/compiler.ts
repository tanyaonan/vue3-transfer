export type CompilerModule = typeof import('@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js')

let compilerPromise: Promise<CompilerModule> | null = null

export async function loadCompiler(): Promise<CompilerModule> {
  if (!compilerPromise) {
    compilerPromise = import('@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js')
  }
  return compilerPromise
}
