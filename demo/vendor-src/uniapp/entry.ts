/// <reference types="vite/client" />

import type { Plugin } from 'vue'
import { createSelectorQuery, getCurrentPages } from './uniapp-stub.ts'

export * as Vue from 'vue'

declare global {
  interface Window {
    uni?: any
  }
}

// 在 vendor 加载阶段提供一个最小 uni 对象，避免 Wot UI 组件在 mount 前访问
// createSelectorQuery / getCurrentPages 时报错。完整的 uni API（showToast、
// request 等）由 src/uniapp-runtime 在 renderUniAppToDOM().mount() 时注入。
if (typeof window !== 'undefined') {
  const existing = (window as any).uni || {}
  window.uni = Object.assign(existing, {
    createSelectorQuery,
    getCurrentPages,
  })
  ;(window as any).getCurrentPages = getCurrentPages
}

/**
 * Wot UI 2.x 主题变量。
 * 先引入主题文件，确保组件内部使用的 CSS 变量已定义。
 */
import '@wot-ui/ui/styles/theme/index.scss'

interface ComponentMeta {
  /** Wot UI 组件目录名，例如 button、card */
  path: string
}

/**
 * 部分 Wot UI 组件在模板中直接使用了其他 Wot UI 组件，但没有通过 import 引入，
 * 依赖 UniApp 的 easycom 自动注册。浏览器端没有 easycom，因此需要在按需
 * 加载时连带加载这些隐式依赖。
 */
const componentDependencies: Record<string, string[]> = {
  'wd-slider': ['wd-icon'],
}

/**
 * 支持的 Wot UI 组件映射表（全量）。
 * key 为模板中使用的标签名（短横线），
 * value 为组件在 @wot-ui/ui/components 下的目录名。
 *
 * 注册表保持全量，这样动态编译的 SFC 里可以随意使用任意 Wot UI 组件；
 * 实际运行时通过 resolveWotUITags + loadWotUI 按需加载。
 */
const componentRegistry: Record<string, ComponentMeta> = {
  'wd-action-sheet': { path: 'action-sheet' },
  'wd-avatar': { path: 'avatar' },
  'wd-avatar-group': { path: 'avatar-group' },
  'wd-backtop': { path: 'backtop' },
  'wd-badge': { path: 'badge' },
  'wd-button': { path: 'button' },
  'wd-calendar': { path: 'calendar' },
  'wd-calendar-view': { path: 'calendar-view' },
  'wd-card': { path: 'card' },
  'wd-cascader': { path: 'cascader' },
  'wd-cell': { path: 'cell' },
  'wd-cell-group': { path: 'cell-group' },
  'wd-checkbox': { path: 'checkbox' },
  'wd-checkbox-group': { path: 'checkbox-group' },
  'wd-circle': { path: 'circle' },
  'wd-col': { path: 'col' },
  'wd-collapse': { path: 'collapse' },
  'wd-collapse-item': { path: 'collapse-item' },
  'wd-config-provider': { path: 'config-provider' },
  'wd-count-down': { path: 'count-down' },
  'wd-count-to': { path: 'count-to' },
  'wd-curtain': { path: 'curtain' },
  'wd-datetime-picker': { path: 'datetime-picker' },
  'wd-datetime-picker-view': { path: 'datetime-picker-view' },
  'wd-dialog': { path: 'dialog' },
  'wd-divider': { path: 'divider' },
  'wd-drop-menu': { path: 'drop-menu' },
  'wd-drop-menu-item': { path: 'drop-menu-item' },
  'wd-empty': { path: 'empty' },
  'wd-fab': { path: 'fab' },
  'wd-floating-panel': { path: 'floating-panel' },
  'wd-form': { path: 'form' },
  'wd-form-item': { path: 'form-item' },
  'wd-gap': { path: 'gap' },
  'wd-grid': { path: 'grid' },
  'wd-grid-item': { path: 'grid-item' },
  'wd-icon': { path: 'icon' },
  'wd-image-preview': { path: 'image-preview' },
  'wd-img': { path: 'img' },
  'wd-img-cropper': { path: 'img-cropper' },
  'wd-index-anchor': { path: 'index-anchor' },
  'wd-index-bar': { path: 'index-bar' },
  'wd-input': { path: 'input' },
  'wd-input-number': { path: 'input-number' },
  'wd-keyboard': { path: 'keyboard' },
  'wd-loading': { path: 'loading' },
  'wd-loadmore': { path: 'loadmore' },
  'wd-navbar': { path: 'navbar' },
  'wd-navbar-capsule': { path: 'navbar-capsule' },
  'wd-notice-bar': { path: 'notice-bar' },
  'wd-notify': { path: 'notify' },
  'wd-overlay': { path: 'overlay' },
  'wd-pagination': { path: 'pagination' },
  'wd-password-input': { path: 'password-input' },
  'wd-picker': { path: 'picker' },
  'wd-picker-view': { path: 'picker-view' },
  'wd-popover': { path: 'popover' },
  'wd-popup': { path: 'popup' },
  'wd-progress': { path: 'progress' },
  'wd-radio': { path: 'radio' },
  'wd-radio-group': { path: 'radio-group' },
  'wd-rate': { path: 'rate' },
  'wd-resize': { path: 'resize' },
  'wd-root-portal': { path: 'root-portal' },
  'wd-row': { path: 'row' },
  'wd-search': { path: 'search' },
  'wd-segmented': { path: 'segmented' },
  'wd-select-picker': { path: 'select-picker' },
  'wd-sidebar': { path: 'sidebar' },
  'wd-sidebar-item': { path: 'sidebar-item' },
  'wd-signature': { path: 'signature' },
  'wd-skeleton': { path: 'skeleton' },
  'wd-slide-verify': { path: 'slide-verify' },
  'wd-slider': { path: 'slider' },
  'wd-sort-button': { path: 'sort-button' },
  'wd-step': { path: 'step' },
  'wd-steps': { path: 'steps' },
  'wd-sticky': { path: 'sticky' },
  'wd-sticky-box': { path: 'sticky-box' },
  'wd-swipe-action': { path: 'swipe-action' },
  'wd-swiper': { path: 'swiper' },
  'wd-swiper-nav': { path: 'swiper-nav' },
  'wd-switch': { path: 'switch' },
  'wd-tab': { path: 'tab' },
  'wd-tabbar': { path: 'tabbar' },
  'wd-tabbar-item': { path: 'tabbar-item' },
  'wd-table': { path: 'table' },
  'wd-table-column': { path: 'table-column' },
  'wd-tabs': { path: 'tabs' },
  'wd-tag': { path: 'tag' },
  'wd-text': { path: 'text' },
  'wd-textarea': { path: 'textarea' },
  'wd-toast': { path: 'toast' },
  'wd-tooltip': { path: 'tooltip' },
  'wd-tour': { path: 'tour' },
  'wd-transition': { path: 'transition' },
  'wd-upload': { path: 'upload' },
  'wd-video-preview': { path: 'video-preview' },
  'wd-watermark': { path: 'watermark' },
}

/**
 * 组件动态加载器（全量）。
 * 使用动态 import() 显式列出所有组件，避免 vendor 构建时扫描全部 Wot UI
 * 组件源码（部分组件包含小程序/App 条件编译，标准 @vitejs/plugin-vue 无法编译）。
 */
const componentLoaders: Record<string, () => Promise<any>> = {
  'wd-action-sheet': () => import('@wot-ui/ui/components/wd-action-sheet/wd-action-sheet.vue'),
  'wd-avatar': () => import('@wot-ui/ui/components/wd-avatar/wd-avatar.vue'),
  'wd-avatar-group': () => import('@wot-ui/ui/components/wd-avatar-group/wd-avatar-group.vue'),
  'wd-backtop': () => import('@wot-ui/ui/components/wd-backtop/wd-backtop.vue'),
  'wd-badge': () => import('@wot-ui/ui/components/wd-badge/wd-badge.vue'),
  'wd-button': () => import('@wot-ui/ui/components/wd-button/wd-button.vue'),
  'wd-calendar': () => import('@wot-ui/ui/components/wd-calendar/wd-calendar.vue'),
  'wd-calendar-view': () => import('@wot-ui/ui/components/wd-calendar-view/wd-calendar-view.vue'),
  'wd-card': () => import('@wot-ui/ui/components/wd-card/wd-card.vue'),
  'wd-cascader': () => import('@wot-ui/ui/components/wd-cascader/wd-cascader.vue'),
  'wd-cell': () => import('@wot-ui/ui/components/wd-cell/wd-cell.vue'),
  'wd-cell-group': () => import('@wot-ui/ui/components/wd-cell-group/wd-cell-group.vue'),
  'wd-checkbox': () => import('@wot-ui/ui/components/wd-checkbox/wd-checkbox.vue'),
  'wd-checkbox-group': () => import('@wot-ui/ui/components/wd-checkbox-group/wd-checkbox-group.vue'),
  'wd-circle': () => import('@wot-ui/ui/components/wd-circle/wd-circle.vue'),
  'wd-col': () => import('@wot-ui/ui/components/wd-col/wd-col.vue'),
  'wd-collapse': () => import('@wot-ui/ui/components/wd-collapse/wd-collapse.vue'),
  'wd-collapse-item': () => import('@wot-ui/ui/components/wd-collapse-item/wd-collapse-item.vue'),
  'wd-config-provider': () => import('@wot-ui/ui/components/wd-config-provider/wd-config-provider.vue'),
  'wd-count-down': () => import('@wot-ui/ui/components/wd-count-down/wd-count-down.vue'),
  'wd-count-to': () => import('@wot-ui/ui/components/wd-count-to/wd-count-to.vue'),
  'wd-curtain': () => import('@wot-ui/ui/components/wd-curtain/wd-curtain.vue'),
  'wd-datetime-picker': () => import('@wot-ui/ui/components/wd-datetime-picker/wd-datetime-picker.vue'),
  'wd-datetime-picker-view': () => import('@wot-ui/ui/components/wd-datetime-picker-view/wd-datetime-picker-view.vue'),
  'wd-dialog': () => import('@wot-ui/ui/components/wd-dialog/wd-dialog.vue'),
  'wd-divider': () => import('@wot-ui/ui/components/wd-divider/wd-divider.vue'),
  'wd-drop-menu': () => import('@wot-ui/ui/components/wd-drop-menu/wd-drop-menu.vue'),
  'wd-drop-menu-item': () => import('@wot-ui/ui/components/wd-drop-menu-item/wd-drop-menu-item.vue'),
  'wd-empty': () => import('@wot-ui/ui/components/wd-empty/wd-empty.vue'),
  'wd-fab': () => import('@wot-ui/ui/components/wd-fab/wd-fab.vue'),
  'wd-floating-panel': () => import('@wot-ui/ui/components/wd-floating-panel/wd-floating-panel.vue'),
  'wd-form': () => import('@wot-ui/ui/components/wd-form/wd-form.vue'),
  'wd-form-item': () => import('@wot-ui/ui/components/wd-form-item/wd-form-item.vue'),
  'wd-gap': () => import('@wot-ui/ui/components/wd-gap/wd-gap.vue'),
  'wd-grid': () => import('@wot-ui/ui/components/wd-grid/wd-grid.vue'),
  'wd-grid-item': () => import('@wot-ui/ui/components/wd-grid-item/wd-grid-item.vue'),
  'wd-icon': () => import('@wot-ui/ui/components/wd-icon/wd-icon.vue'),
  'wd-image-preview': () => import('@wot-ui/ui/components/wd-image-preview/wd-image-preview.vue'),
  'wd-img': () => import('@wot-ui/ui/components/wd-img/wd-img.vue'),
  'wd-img-cropper': () => import('@wot-ui/ui/components/wd-img-cropper/wd-img-cropper.vue'),
  'wd-index-anchor': () => import('@wot-ui/ui/components/wd-index-anchor/wd-index-anchor.vue'),
  'wd-index-bar': () => import('@wot-ui/ui/components/wd-index-bar/wd-index-bar.vue'),
  'wd-input': () => import('@wot-ui/ui/components/wd-input/wd-input.vue'),
  'wd-input-number': () => import('@wot-ui/ui/components/wd-input-number/wd-input-number.vue'),
  'wd-keyboard': () => import('@wot-ui/ui/components/wd-keyboard/wd-keyboard.vue'),
  'wd-loading': () => import('@wot-ui/ui/components/wd-loading/wd-loading.vue'),
  'wd-loadmore': () => import('@wot-ui/ui/components/wd-loadmore/wd-loadmore.vue'),
  'wd-navbar': () => import('@wot-ui/ui/components/wd-navbar/wd-navbar.vue'),
  'wd-navbar-capsule': () => import('@wot-ui/ui/components/wd-navbar-capsule/wd-navbar-capsule.vue'),
  'wd-notice-bar': () => import('@wot-ui/ui/components/wd-notice-bar/wd-notice-bar.vue'),
  'wd-notify': () => import('@wot-ui/ui/components/wd-notify/wd-notify.vue'),
  'wd-overlay': () => import('@wot-ui/ui/components/wd-overlay/wd-overlay.vue'),
  'wd-pagination': () => import('@wot-ui/ui/components/wd-pagination/wd-pagination.vue'),
  'wd-password-input': () => import('@wot-ui/ui/components/wd-password-input/wd-password-input.vue'),
  'wd-picker': () => import('@wot-ui/ui/components/wd-picker/wd-picker.vue'),
  'wd-picker-view': () => import('@wot-ui/ui/components/wd-picker-view/wd-picker-view.vue'),
  'wd-popover': () => import('@wot-ui/ui/components/wd-popover/wd-popover.vue'),
  'wd-popup': () => import('@wot-ui/ui/components/wd-popup/wd-popup.vue'),
  'wd-progress': () => import('@wot-ui/ui/components/wd-progress/wd-progress.vue'),
  'wd-radio': () => import('@wot-ui/ui/components/wd-radio/wd-radio.vue'),
  'wd-radio-group': () => import('@wot-ui/ui/components/wd-radio-group/wd-radio-group.vue'),
  'wd-rate': () => import('@wot-ui/ui/components/wd-rate/wd-rate.vue'),
  'wd-resize': () => import('@wot-ui/ui/components/wd-resize/wd-resize.vue'),
  'wd-root-portal': () => import('@wot-ui/ui/components/wd-root-portal/wd-root-portal.vue'),
  'wd-row': () => import('@wot-ui/ui/components/wd-row/wd-row.vue'),
  'wd-search': () => import('@wot-ui/ui/components/wd-search/wd-search.vue'),
  'wd-segmented': () => import('@wot-ui/ui/components/wd-segmented/wd-segmented.vue'),
  'wd-select-picker': () => import('@wot-ui/ui/components/wd-select-picker/wd-select-picker.vue'),
  'wd-sidebar': () => import('@wot-ui/ui/components/wd-sidebar/wd-sidebar.vue'),
  'wd-sidebar-item': () => import('@wot-ui/ui/components/wd-sidebar-item/wd-sidebar-item.vue'),
  'wd-signature': () => import('@wot-ui/ui/components/wd-signature/wd-signature.vue'),
  'wd-skeleton': () => import('@wot-ui/ui/components/wd-skeleton/wd-skeleton.vue'),
  'wd-slide-verify': () => import('@wot-ui/ui/components/wd-slide-verify/wd-slide-verify.vue'),
  'wd-slider': () => import('@wot-ui/ui/components/wd-slider/wd-slider.vue'),
  'wd-sort-button': () => import('@wot-ui/ui/components/wd-sort-button/wd-sort-button.vue'),
  'wd-step': () => import('@wot-ui/ui/components/wd-step/wd-step.vue'),
  'wd-steps': () => import('@wot-ui/ui/components/wd-steps/wd-steps.vue'),
  'wd-sticky': () => import('@wot-ui/ui/components/wd-sticky/wd-sticky.vue'),
  'wd-sticky-box': () => import('@wot-ui/ui/components/wd-sticky-box/wd-sticky-box.vue'),
  'wd-swipe-action': () => import('@wot-ui/ui/components/wd-swipe-action/wd-swipe-action.vue'),
  'wd-swiper': () => import('@wot-ui/ui/components/wd-swiper/wd-swiper.vue'),
  'wd-swiper-nav': () => import('@wot-ui/ui/components/wd-swiper-nav/wd-swiper-nav.vue'),
  'wd-switch': () => import('@wot-ui/ui/components/wd-switch/wd-switch.vue'),
  'wd-tab': () => import('@wot-ui/ui/components/wd-tab/wd-tab.vue'),
  'wd-tabbar': () => import('@wot-ui/ui/components/wd-tabbar/wd-tabbar.vue'),
  'wd-tabbar-item': () => import('@wot-ui/ui/components/wd-tabbar-item/wd-tabbar-item.vue'),
  'wd-table': () => import('@wot-ui/ui/components/wd-table/wd-table.vue'),
  'wd-table-column': () => import('@wot-ui/ui/components/wd-table-column/wd-table-column.vue'),
  'wd-tabs': () => import('@wot-ui/ui/components/wd-tabs/wd-tabs.vue'),
  'wd-tag': () => import('@wot-ui/ui/components/wd-tag/wd-tag.vue'),
  'wd-text': () => import('@wot-ui/ui/components/wd-text/wd-text.vue'),
  'wd-textarea': () => import('@wot-ui/ui/components/wd-textarea/wd-textarea.vue'),
  'wd-toast': () => import('@wot-ui/ui/components/wd-toast/wd-toast.vue'),
  'wd-tooltip': () => import('@wot-ui/ui/components/wd-tooltip/wd-tooltip.vue'),
  'wd-tour': () => import('@wot-ui/ui/components/wd-tour/wd-tour.vue'),
  'wd-transition': () => import('@wot-ui/ui/components/wd-transition/wd-transition.vue'),
  'wd-upload': () => import('@wot-ui/ui/components/wd-upload/wd-upload.vue'),
  'wd-video-preview': () => import('@wot-ui/ui/components/wd-video-preview/wd-video-preview.vue'),
  'wd-watermark': () => import('@wot-ui/ui/components/wd-watermark/wd-watermark.vue'),
}

/**
 * 从 UniApp SFC 源码中提取需要按需加载的 Wot UI 组件标签。
 *
 * 识别规则：模板中以 wd- 开头的标签名（不区分大小写）
 */
export function resolveWotUITags(source: string): string[] {
  const tags = new Set<string>()

  const tagMatches = source.matchAll(/<\s*(wd-[\w-]+)/gi)
  for (const m of tagMatches) {
    tags.add(m[1])
  }

  const selfClosingMatches = source.matchAll(/<\s*(wd-[\w-]+)\s*\/?>/gi)
  for (const m of selfClosingMatches) {
    tags.add(m[1])
  }

  return [...tags]
}

/**
 * 按需加载 Wot UI 组件，返回一个可供 createWotUIPlugin 使用的组件映射。
 *
 * 使用示例：
 *   const tags = resolveWotUITags(source)
 *   const components = await loadWotUI(tags)
 *   app.use(createWotUIPlugin(components))
 */
export async function loadWotUI(refs: string[]): Promise<Record<string, any>> {
  const result: Record<string, any> = {}
  const loaded = new Set<string>()
  const queue: string[] = [...refs]

  // 递归加载隐式依赖
  for (const ref of refs) {
    const deps = componentDependencies[ref]
    if (deps) {
      for (const dep of deps) {
        if (!queue.includes(dep)) queue.push(dep)
      }
    }
  }

  await Promise.all(
    queue.map(async (ref) => {
      if (loaded.has(ref)) return
      loaded.add(ref)

      const loader = componentLoaders[ref]
      if (!loader) {
        if (componentRegistry[ref]) {
          console.warn(`[vue3-transfer] Wot UI component loader missing: ${ref}`)
        }
        return
      }

      const mod = (await loader()) as any
      result[ref] = mod.default || mod
    }),
  )

  return result
}

/**
 * 在 Vue 应用中注册按需加载的 Wot UI 组件。
 * 这样模板里可以直接写 <wd-button>、<wd-card> 等，
 * 与 UniApp 项目开启 easycom 后的写法保持一致，源码可直接迁移。
 */
export function createWotUIPlugin(components: Record<string, any>): Plugin {
  return {
    install(app) {
      for (const [name, component] of Object.entries(components)) {
        app.component(name, component)
      }
    },
  }
}
