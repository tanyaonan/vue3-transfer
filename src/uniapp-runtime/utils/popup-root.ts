import type { Component, App } from 'vue'
import { getRuntimeVue } from './vue.js'

/**
 * 确保 body 上存在一个用于挂载弹窗/浮层的根节点。
 * 与 @dcloudio/uni-h5 中的 ensureRoot 保持一致，使用 u-a-* 系列 id。
 */
export function ensureRoot(id: string): HTMLElement {
  let rootEl = document.getElementById(id)
  if (!rootEl) {
    rootEl = document.createElement('div')
    rootEl.id = id
    document.body.append(rootEl)
  }
  return rootEl
}

/**
 * 为弹窗组件创建一个独立的 Vue 应用实例。
 * 与 uni-h5 中的 createRootApp 等价：把 props 作为 rootState 传入，
 * 并给 rootState 绑定 onClose 回调。
 *
 * 使用页面提供的 Vue 运行时，确保弹窗（Toast/Modal）与主应用上下文一致。
 */
export function createRootApp(
  component: Component,
  rootState: Record<string, unknown>,
  onClose: (...args: unknown[]) => void,
): App {
  const { createApp, h, computed } = getRuntimeVue()

  rootState.onClose = (...args: unknown[]) => {
    rootState.visible = false
    onClose.apply(null, args)
  }

  return createApp({
    setup() {
      const props = computed(() => ({ ...rootState }))
      return () => h(component, props.value)
    },
  })
}
