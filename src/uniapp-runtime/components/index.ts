import { createView } from './view.js'
import { createText } from './text.js'
import { createImage } from './image.js'
import { createButton } from './button.js'
import { createInput } from './input.js'

export { createView, createText, createImage, createButton, createInput }

/**
 * 内置组件构造器映射表。
 *
 * 组件在插件 install 时才实例化，以便使用页面提供的 Vue 运行时
 * （`window.Vue`），避免与第三方组件库使用不同 Vue 副本。
 */
export const builtInComponentFactories = {
  'uni-view': createView,
  'uni-text': createText,
  'uni-image': createImage,
  'uni-button': createButton,
  'uni-input': createInput,
}
