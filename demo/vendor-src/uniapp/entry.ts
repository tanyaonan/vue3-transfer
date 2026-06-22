/// <reference types="vite/client" />

import type { Plugin } from 'vue'

export * as Vue from 'vue'

/**
 * Wot UI 2.x 主题变量。
 * 先引入主题文件，确保组件内部使用的 CSS 变量已定义。
 */
import '@wot-ui/ui/styles/theme/index.scss'

/**
 * 按需引入演示所需的 Wot UI 组件。
 * 组件以原始 .vue 源码形式导入，由 Vite + @vitejs/plugin-vue 编译为 H5 可用产物。
 */
import WdButton from '@wot-ui/ui/components/wd-button/wd-button.vue'
import WdCard from '@wot-ui/ui/components/wd-card/wd-card.vue'
import WdTag from '@wot-ui/ui/components/wd-tag/wd-tag.vue'
import WdIcon from '@wot-ui/ui/components/wd-icon/wd-icon.vue'
import WdLoading from '@wot-ui/ui/components/wd-loading/wd-loading.vue'

/**
 * 暴露组件对象，支持显式导入场景：
 * import { WdButton } from '@wot-ui/ui'
 */
export const WotUI = {
  WdButton,
  WdCard,
  WdTag,
  WdIcon,
  WdLoading,
}

/**
 * 在 Vue 应用中全局注册 Wot UI 组件。
 * 这样模板里可以直接写 <wd-button>、<wd-card>、<wd-tag>，
 * 与 UniApp 项目开启 easycom 后的写法保持一致，源码可直接迁移。
 */
export function createWotUIPlugin(): Plugin {
  return {
    install(app) {
      app.component('wd-button', WdButton)
      app.component('wd-card', WdCard)
      app.component('wd-tag', WdTag)
      app.component('wd-icon', WdIcon)
      app.component('wd-loading', WdLoading)
    },
  }
}
