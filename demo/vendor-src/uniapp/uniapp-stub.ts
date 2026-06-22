/**
 * @dcloudio/uni-app 的浏览器端存根。
 *
 * Wot UI 部分组件（如 wd-notice-bar）会引用 @dcloudio/uni-app 的生命周期钩子。
 * 在浏览器动态编译的 vendor 构建中不存在该包，因此提供空函数存根，避免构建
 * 失败，同时在 H5 预览时保持组件基本可用。
 */

export function onShow(_hook: () => void): void {}
export function onHide(_hook: () => void): void {}
