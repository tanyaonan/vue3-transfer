import type { App, Plugin } from 'vue'
import { builtInComponentFactories } from './components/index.js'
import type { UniRuntime } from './utils/constants.js'

import { getRuntimeVue } from './utils/vue.js'

declare global {
  interface Window {
    uni?: UniRuntime
  }
}
import { createUniRuntime } from './api/index.js'
import './styles/base.css'
import './styles/toast.css'
import './styles/modal.css'
import './styles/components/view.css'
import './styles/components/text.css'
import './styles/components/image.css'
import './styles/components/button.css'
import './styles/components/input.css'

export interface UniAppH5RuntimePluginOptions {
  /**
   * 是否覆盖已存在的 window.uni。
   * 默认 false：仅在 window.uni 不存在时注入。
   */
  overrideUni?: boolean
}

/**
 * UniApp H5 浏览器端运行时插件。
 *
 * 注册真实 UniApp 内置组件（view/text/image/button/input），
 * 并注入与真实 H5 行为更接近的 window.uni 最小子集。
 *
 * 组件会在 install 时使用页面当前 Vue 运行时实例化，
 * 保证与 Wot UI 等第三方库共享同一份 Vue 上下文。
 */
export function createUniAppH5RuntimePlugin(
  options: UniAppH5RuntimePluginOptions = {},
): Plugin {
  return {
    install(app: App) {
      // 使用页面提供的 Vue 运行时创建组件，避免多份 Vue 运行时导致的
      // inject / onMounted 等上下文警告。
      const vue = getRuntimeVue()

      // 注册内置组件
      for (const [name, factory] of Object.entries(builtInComponentFactories)) {
        app.component(name, factory())
      }

      // 注入 uni 运行时
      if (typeof window !== 'undefined' && (options.overrideUni || !window.uni)) {
        window.uni = Object.assign(window.uni || {}, createUniRuntime(vue)) as typeof window.uni
      }
    },
  }
}
