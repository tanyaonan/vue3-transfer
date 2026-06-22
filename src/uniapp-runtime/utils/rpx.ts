/**
 * rpx 转 rem。
 *
 * UniApp H5 打包产物中，rpx 会被固定转换为 rem：
 * 1rpx = 0.5px = 0.03125rem（以默认 16px 根字体为基准）。
 * 这样在不同宽度的浏览器视口下，文字、间距等尺寸与真实 H5 一致，
 * 而不是随窗口宽度线性放大。
 */

export function rpx2rem(rpx: number): number {
  return rpx / 32
}

/**
 * 将 CSS 字符串中的 rpx 单位替换为 rem。
 */
export function convertRpxToRem(css: string): string {
  return css.replace(/(\d+(?:\.\d+)?)rpx\b/g, (_m, num: string) => {
    return `${rpx2rem(parseFloat(num))}rem`
  })
}

/**
 * 兼容旧命名的别名。
 * @deprecated 请使用 convertRpxToRem。
 */
export const convertRpxToPx = convertRpxToRem

let cachedWidth = 0

function getWindowWidth(): number {
  return typeof window !== 'undefined' ? window.innerWidth : 375
}

export function getCachedWindowWidth(): number {
  return cachedWidth || getWindowWidth()
}

export function updateWindowWidthCache(): void {
  cachedWidth = getWindowWidth()
}
