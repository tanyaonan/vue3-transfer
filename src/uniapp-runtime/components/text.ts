import type { Component, VNodeChild } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'

/**
 * 创建 UniApp <text> 的浏览器端运行时组件。
 *
 * 与真实 uni-h5 一致：渲染为 <uni-text>，内部包裹 <span>，
 * 默认插槽文本按 \n 切分并插入 <br>。
 * 支持 selectable、space、decode 三个核心属性。
 */
export function createText(): Component {
  const { h, defineComponent } = getRuntimeVue()

  return defineComponent({
    name: 'Text',
    props: {
      selectable: { type: Boolean, default: false },
      space: { type: String, default: '' },
      decode: { type: Boolean, default: false },
    },
    setup(props, { slots, attrs }) {
      function decodeHtmlEntities(text: string): string {
        if (!props.decode) return text
        const textarea = document.createElement('textarea')
        textarea.innerHTML = text
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
        return textarea.value
      }

      function mapSpace(text: string): string {
        if (props.space === 'ensp') {
          return text.replace(/ /g, '\u2002')
        }
        if (props.space === 'emsp') {
          return text.replace(/ /g, '\u2003')
        }
        if (props.space === 'nbsp') {
          return text.replace(/ /g, '\u00a0')
        }
        return text
      }

      function extractText(): string {
        const nodes = slots.default?.() as VNodeChild[] | undefined
        if (!nodes) return ''
        let text = ''
        for (const node of nodes) {
          if (typeof node === 'string' || typeof node === 'number') {
            text += String(node)
          } else if (node && typeof node === 'object' && 'children' in node) {
            text += String((node as { children?: unknown }).children ?? '')
          }
        }
        return text
      }

      function renderTextNodes(): (string | ReturnType<typeof h>)[] {
        const rawText = extractText()
        const processed = mapSpace(decodeHtmlEntities(rawText))
        const parts = processed.split('\n')
        const children: (string | ReturnType<typeof h>)[] = []
        parts.forEach((part, index) => {
          children.push(part)
          if (index < parts.length - 1) {
            children.push(h('br'))
          }
        })
        return children
      }

      return () =>
        h(
          'uni-text',
          {
            ...attrs,
            selectable: props.selectable ? true : null,
          },
          [h('span', null, renderTextNodes())],
        )
    },
  })
}
