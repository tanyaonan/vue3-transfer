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
 *
 * 注意：
 * 1. 下方列表需要与 demo/components/counter-uniapp.vue 中实际使用的 Wot UI 标签保持一致。
 * 2. 组件内部会自行 import 子组件（如 wd-popup 内部使用 wd-overlay/wd-transition 等），
 *    因此只需注册模板中直接书写的组件即可。
 */

// 基础 / 按钮
import WdButton from '@wot-ui/ui/components/wd-button/wd-button.vue'
import WdCard from '@wot-ui/ui/components/wd-card/wd-card.vue'
import WdTag from '@wot-ui/ui/components/wd-tag/wd-tag.vue'
import WdIcon from '@wot-ui/ui/components/wd-icon/wd-icon.vue'
import WdLoading from '@wot-ui/ui/components/wd-loading/wd-loading.vue'

// 表单
import WdInput from '@wot-ui/ui/components/wd-input/wd-input.vue'
import WdSwitch from '@wot-ui/ui/components/wd-switch/wd-switch.vue'
import WdRadio from '@wot-ui/ui/components/wd-radio/wd-radio.vue'
import WdRadioGroup from '@wot-ui/ui/components/wd-radio-group/wd-radio-group.vue'
import WdCheckbox from '@wot-ui/ui/components/wd-checkbox/wd-checkbox.vue'
import WdCheckboxGroup from '@wot-ui/ui/components/wd-checkbox-group/wd-checkbox-group.vue'
import WdRate from '@wot-ui/ui/components/wd-rate/wd-rate.vue'
import WdSlider from '@wot-ui/ui/components/wd-slider/wd-slider.vue'
import WdInputNumber from '@wot-ui/ui/components/wd-input-number/wd-input-number.vue'

// 展示
import WdCell from '@wot-ui/ui/components/wd-cell/wd-cell.vue'
import WdCellGroup from '@wot-ui/ui/components/wd-cell-group/wd-cell-group.vue'
import WdGrid from '@wot-ui/ui/components/wd-grid/wd-grid.vue'
import WdGridItem from '@wot-ui/ui/components/wd-grid-item/wd-grid-item.vue'
import WdNoticeBar from '@wot-ui/ui/components/wd-notice-bar/wd-notice-bar.vue'
import WdBadge from '@wot-ui/ui/components/wd-badge/wd-badge.vue'
import WdEmpty from '@wot-ui/ui/components/wd-empty/wd-empty.vue'
import WdDivider from '@wot-ui/ui/components/wd-divider/wd-divider.vue'

// 反馈
import WdPopup from '@wot-ui/ui/components/wd-popup/wd-popup.vue'

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
  WdInput,
  WdSwitch,
  WdRadio,
  WdRadioGroup,
  WdCheckbox,
  WdCheckboxGroup,
  WdRate,
  WdSlider,
  WdInputNumber,
  WdCell,
  WdCellGroup,
  WdGrid,
  WdGridItem,
  WdNoticeBar,
  WdBadge,
  WdEmpty,
  WdDivider,
  WdPopup,
}

/**
 * 在 Vue 应用中全局注册 Wot UI 组件。
 * 这样模板里可以直接写 <wd-button>、<wd-card>、<wd-tag> 等，
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

      app.component('wd-input', WdInput)
      app.component('wd-switch', WdSwitch)
      app.component('wd-radio', WdRadio)
      app.component('wd-radio-group', WdRadioGroup)
      app.component('wd-checkbox', WdCheckbox)
      app.component('wd-checkbox-group', WdCheckboxGroup)
      app.component('wd-rate', WdRate)
      app.component('wd-slider', WdSlider)
      app.component('wd-input-number', WdInputNumber)

      app.component('wd-cell', WdCell)
      app.component('wd-cell-group', WdCellGroup)
      app.component('wd-grid', WdGrid)
      app.component('wd-grid-item', WdGridItem)
      app.component('wd-notice-bar', WdNoticeBar)
      app.component('wd-badge', WdBadge)
      app.component('wd-empty', WdEmpty)
      app.component('wd-divider', WdDivider)

      app.component('wd-popup', WdPopup)
    },
  }
}
