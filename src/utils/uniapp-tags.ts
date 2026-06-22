const tagMap: Record<string, string> = {
  view: 'div',
  'scroll-view': 'div',
  swiper: 'div',
  'swiper-item': 'div',
  text: 'span',
  'rich-text': 'div',
  image: 'img',
  navigator: 'a',
  picker: 'div',
  'picker-view': 'div',
  'picker-view-column': 'div',
  'movable-area': 'div',
  'movable-view': 'div',
  'cover-view': 'div',
  'cover-image': 'img',
  block: 'template',
  checkbox: 'input',
  radio: 'input',
  switch: 'input',
}

export interface TransformUniAppTagsOptions {
  /**
   * 需要保留原标签名、不做替换的标签列表。
   * 用于浏览器端已注册真实 UniApp 内置组件时，避免把 <view> 等替换为 <div>。
   */
  preserve?: string[]
  /**
   * 把特定 UniApp 内置标签映射为运行时组件标签名。
   * 例如 button -> uni-button，input -> uni-input，
   * 以绕过 Vue 对原生 HTML 标签的编译优化。
   */
  runtimeMap?: Record<string, string>
}

/**
 * 提取 SFC 中最外层 `<template>` 块的内容范围（支持内部嵌套 `<template>`）。
 */
function findTemplateBlock(source: string): { start: number; end: number } | null {
  const openIdx = source.search(/<template\b[^>]*>/)
  if (openIdx === -1) return null

  const openEndIdx = source.indexOf('>', openIdx)
  if (openEndIdx === -1) return null

  let depth = 1
  let pos = openEndIdx + 1

  while (pos < source.length) {
    const nextOpen = source.indexOf('<template', pos)
    const nextClose = source.indexOf('</template>', pos)

    if (nextClose === -1) return null

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++
      pos = nextOpen + '<template'.length
    } else {
      depth--
      if (depth === 0) {
        return { start: openEndIdx + 1, end: nextClose }
      }
      pos = nextClose + '</template>'.length
    }
  }

  return null
}

/**
 * 将 SFC `<template>` 块中的 UniApp 内置标签替换为等价的 HTML 标签。
 *
 * `<view>` / `<text>` / `<image>` 等标签在浏览器里会被识别为 SVG 原生元素，
 * 导致布局与样式异常。本函数仅在浏览器预览/编译时使用，不影响原始 UniApp 源码。
 *
 * 通过 options.preserve 可保留特定标签，使其能被真实的 UniApp 运行时组件接管。
 */
export function transformUniAppTags(
  source: string,
  options: TransformUniAppTagsOptions = {},
): string {
  const block = findTemplateBlock(source)
  if (!block) return source

  const preserve = new Set(options.preserve || [])
  const runtimeMap = options.runtimeMap || {}
  let content = source.slice(block.start, block.end)

  for (const [uniTag, htmlTag] of Object.entries(tagMap)) {
    if (preserve.has(uniTag)) continue

    const targetTag = runtimeMap[uniTag] || htmlTag
    content = content.replace(
      new RegExp(`<${uniTag}(?=[\\s/>])`, 'g'),
      `<${targetTag}`,
    )
    content = content.replace(
      new RegExp(`</${uniTag}>`, 'g'),
      `</${targetTag}>`,
    )
  }

  // 原生 <video> 不是 void 元素，Vue 模板不允许自闭合；UniApp 源码里常见 <video />
  content = content.replace(/<video\b([^>]*)\/>/g, '<video$1></video>')

  // 对保留标签中需要映射为运行时组件名的标签做二次转换
  for (const [uniTag, runtimeTag] of Object.entries(runtimeMap)) {
    if (!preserve.has(uniTag)) continue
    content = content.replace(
      new RegExp(`<${uniTag}\\b`, 'g'),
      `<${runtimeTag}`,
    )
    content = content.replace(
      new RegExp(`</${uniTag}>`, 'g'),
      `</${runtimeTag}>`,
    )
  }

  return source.slice(0, block.start) + content + source.slice(block.end)
}
