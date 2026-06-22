import type * as Vue from 'vue'
import * as bundledVue from 'vue'

export type VueRuntime = typeof Vue

/**
 * 获取当前页面使用的 Vue 运行时。
 *
 * 在浏览器预览场景中，`uniapp.html` 会先把 Wot UI vendor 中的 Vue 暴露到
 * `window.Vue`，使库编译出的组件与 vendor 组件共用同一份运行时，避免
 * `inject()` / `onMounted()` 等依赖当前实例上下文的 API 出现跨副本警告。
 *
 * 如果页面没有提供 `window.Vue`，则回退到库自身打包的 Vue 运行时，
 * 保证独立使用 `dist/uniapp.js` 时仍然可用。
 */
export function getRuntimeVue(): VueRuntime {
  return (
    (typeof window !== 'undefined' && (window as unknown as { Vue?: VueRuntime }).Vue) ||
    bundledVue
  )
}
