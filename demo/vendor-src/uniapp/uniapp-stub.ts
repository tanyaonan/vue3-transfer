/**
 * @dcloudio/uni-app 的浏览器端存根。
 *
 * Wot UI 部分组件（如 wd-notice-bar、wd-slider）会引用 @dcloudio/uni-app 的
 * 生命周期钩子或全局 uni API。在浏览器动态编译的 vendor 构建中不存在该包，
 * 因此提供兼容存根，避免构建失败，同时在 H5 预览时保持组件基本可用。
 */

export function onShow(_hook: () => void): void {}
export function onHide(_hook: () => void): void {}

/**
 * 提供 uni.createSelectorQuery 的浏览器实现。
 *
 * Wot UI 的 getRect 工具函数依赖该 API 获取节点尺寸。此处基于 DOM 实现，
 * 支持 .in(scope).select(selector).boundingClientRect(callback).exec() 的链式调用。
 */
export function createSelectorQuery() {
  let selector = ''
  let scope: any = null
  let all = false

  function getRoot(): Element | Document {
    return scope && scope.$el ? scope.$el : document
  }

  function queryNodes(): Element | Element[] | null {
    const root = getRoot()
    if (all) {
      const list = Array.from(root.querySelectorAll(selector))
      return list.length > 0 ? list : []
    }
    return root.querySelector(selector)
  }

  return {
    in(s: any) {
      scope = s
      return this
    },
    select(sel: string) {
      selector = sel
      all = false
      return this
    },
    selectAll(sel: string) {
      selector = sel
      all = true
      return this
    },
    boundingClientRect(callback?: (rect: DOMRect | DOMRect[] | null) => void) {
      const nodes = queryNodes()
      const rect = all
        ? (nodes as Element[]).map((n) => n.getBoundingClientRect())
        : nodes
          ? (nodes as Element).getBoundingClientRect()
          : null
      if (callback) callback(rect)
      return this
    },
    fields(_config: any, callback?: (res: any) => void) {
      const nodes = queryNodes()
      const res = all
        ? (nodes as Element[]).map((n) => ({ node: n, ...n.getBoundingClientRect() }))
        : nodes
          ? { node: nodes, ...(nodes as Element).getBoundingClientRect() }
          : null
      if (callback) callback(res)
      return this
    },
    exec(callback?: (res: any[]) => void) {
      if (callback) callback([])
    },
  }
}

/**
 * 返回当前页面栈的简化信息。
 */
export function getCurrentPages(): any[] {
  return [{ route: window.location.pathname }]
}
