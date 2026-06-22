import type { App, Component, Plugin } from 'vue'
import { h } from 'vue'
import {
  transformVueToJS,
  renderVueToDOM,
  clearCompileCache,
} from './index.js'
import { createUniAppH5RuntimePlugin, convertRpxToRem } from './uniapp-runtime/index.js'
import type {
  UniAppTransformOptions,
  UniAppTransformResult,
  UniAppMountOptions,
  RenderableUniAppComponent,
  UniAppPlatform,
} from './types/uniapp.js'
import { transformUniAppTags } from './utils/uniapp-tags.js'

export type {
  UniAppTransformOptions,
  UniAppTransformResult,
  UniAppMountOptions,
  RenderableUniAppComponent,
  UniAppPlatform,
}
export { clearCompileCache }

/**
 * 将 UniApp 内置组件在 H5 浏览器中映射为等价 HTML 标签。
 *
 * 作为 createUniAppH5RuntimePlugin 的降级补充：当用户没有使用完整 runtime plugin
 * 时，仍然能保证 <view>/<text>/<button>/<image>/<input> 等标签可渲染。
 *
 * @deprecated 新代码应优先使用 createUniAppH5RuntimePlugin 中的真实组件。
 */
function createUniAppH5FallbackPlugin(): Plugin {
  const makeTag = (tag: string) => {
    return (props: Record<string, unknown>, { slots }: { slots: any }) => {
      return h(tag, props, slots.default?.())
    }
  }

  return {
    install(app) {
      const registry: Record<string, any> = {
        view: makeTag('div'),
        'scroll-view': makeTag('div'),
        swiper: makeTag('div'),
        'swiper-item': makeTag('div'),
        text: makeTag('span'),
        'rich-text': makeTag('div'),
        image: makeTag('img'),
        button: makeTag('button'),
        input: makeTag('input'),
        textarea: makeTag('textarea'),
        checkbox: makeTag('input'),
        radio: makeTag('input'),
        switch: makeTag('input'),
        picker: makeTag('div'),
        form: makeTag('form'),
        label: makeTag('label'),
        navigator: makeTag('a'),
        block: (_props: Record<string, unknown>, { slots }: { slots: any }) => slots.default?.(),
      }

      for (const [name, component] of Object.entries(registry)) {
        // 若真实 runtime plugin 已注册同名组件，则不再用简单标签覆盖
        if (typeof app.component(name) === 'undefined') {
          app.component(name, component)
        }
      }
    },
  }
}

/**
 * 将 UniApp Vue 3 单文件组件源码编译为纯 JavaScript 代码。
 *
 * 与 `transformVueToJS` 不同，该方法默认关闭 Vapor 模式：
 * UniApp 的模板编译需要保留虚拟 DOM 语义，以便兼容小程序、App 等目标。
 * 其余选项与 Vue 版本保持一致，产物可直接用于 UniApp CLI 的 `uni` 命令编译。
 */
export async function transformUniAppToJS(
  source: string,
  options: UniAppTransformOptions,
): Promise<UniAppTransformResult> {
  const result = await transformVueToJS(
    transformUniAppTags(source, {
      preserve: ['view', 'text', 'image', 'button', 'input'],
      runtimeMap: {
        view: 'uni-view',
        text: 'uni-text',
        image: 'uni-image',
        button: 'uni-button',
        input: 'uni-input',
      },
    }),
    {
      ...options,
      vapor: false,
    },
  )
  return result
}

/**
 * 将 UniApp Vue 3 单文件组件源码编译为可直接挂载的组件对象。
 *
 * 浏览器预览时会自动：
 * 1. 关闭 Vapor 模式，保持与 UniApp 多目标兼容。
 * 2. 注入真实 UniApp H5 运行时组件与 uni API（若未提供）。
 * 3. 将 `<style>` 中的 `rpx` 单位按窗口宽度动态转换为 px。
 *
 * 返回的组件源码可直接复制到 UniApp 项目中，并通过 `uni` 命令编译到
 * H5、App、微信小程序、支付宝小程序等平台。
 */
export async function renderUniAppToDOM(
  source: string,
  options: UniAppTransformOptions,
): Promise<RenderableUniAppComponent> {
  const rendered = await renderVueToDOM(
    transformUniAppTags(source, {
      preserve: ['view', 'text', 'image', 'button', 'input'],
      runtimeMap: {
        view: 'uni-view',
        text: 'uni-text',
        image: 'uni-image',
        button: 'uni-button',
        input: 'uni-input',
      },
    }),
    {
      ...options,
      vapor: false,
    },
  )

  // 在 Vue 版本返回的 style 基础上做 rpx -> rem 转换，与真实 H5 打包产物对齐。
  // rem 相对于页面根字体，窗口变化时无需重新计算。
  if (rendered.style) {
    rendered.style.textContent = convertRpxToRem(rendered.style.textContent)
  }

  const originalMount = rendered.mount.bind(rendered)
  const originalUnmount = rendered.unmount.bind(rendered)

  return {
    get component() {
      return rendered.component
    },
    get style() {
      return rendered.style
    },

    mount(container, mountOptions?: UniAppMountOptions) {
      const app = originalMount(container, {
        plugins: [
          createUniAppH5RuntimePlugin(),
          createUniAppH5FallbackPlugin(),
          ...(mountOptions?.plugins || []),
        ],
      })

      return app
    },

    unmount() {
      originalUnmount()
    },
  }
}
