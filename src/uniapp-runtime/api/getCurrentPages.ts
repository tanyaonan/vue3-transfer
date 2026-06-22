/**
 * 浏览器端 `getCurrentPages` 实现。
 *
 * 返回当前页面栈的简化信息，与 UniApp H5 产物行为对齐。
 */
export function getCurrentPages(): any[] {
  return [
    {
      route: typeof window !== 'undefined' ? window.location.pathname : '',
      options: {},
    },
  ]
}
