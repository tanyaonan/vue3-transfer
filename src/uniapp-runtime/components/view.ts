import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'

/**
 * 创建 UniApp <view> 的浏览器端运行时组件。
 */
export function createView(): Component {
  const { h, defineComponent, ref, computed } = getRuntimeVue()

  return defineComponent({
    name: 'View',
    props: {
      hoverClass: { type: String, default: 'none' },
      hoverStartTime: { type: Number, default: 50 },
      hoverStayTime: { type: Number, default: 400 },
      hoverStopPropagation: { type: Boolean, default: false },
    },
    setup(props, { slots, attrs }) {
      const hovering = ref(false)
      let enterTimer: ReturnType<typeof setTimeout> | null = null
      let leaveTimer: ReturnType<typeof setTimeout> | null = null

      const hasHover = computed(() => props.hoverClass && props.hoverClass !== 'none')

      const classes = computed(() => {
        const list: string[] = []
        if (attrs.class) {
          if (typeof attrs.class === 'string') {
            list.push(attrs.class)
          } else if (Array.isArray(attrs.class)) {
            list.push(...attrs.class.filter((c): c is string => typeof c === 'string'))
          }
        }
        if (hasHover.value && hovering.value && props.hoverClass) {
          list.push(props.hoverClass)
        }
        return list
      })

      function onTouchStart(e: TouchEvent) {
        if (props.hoverStopPropagation) {
          e.stopPropagation()
        }
        if (!hasHover.value) return
        if (leaveTimer) {
          clearTimeout(leaveTimer)
          leaveTimer = null
        }
        enterTimer = setTimeout(() => {
          hovering.value = true
        }, props.hoverStartTime)
      }

      function onTouchEnd() {
        if (!hasHover.value) return
        if (enterTimer) {
          clearTimeout(enterTimer)
          enterTimer = null
        }
        leaveTimer = setTimeout(() => {
          hovering.value = false
        }, props.hoverStayTime)
      }

      return () =>
        h(
          'uni-view',
          {
            ...attrs,
            class: classes.value,
            onTouchstart: onTouchStart,
            onTouchend: onTouchEnd,
            onTouchcancel: onTouchEnd,
            onMousedown: onTouchStart as unknown as (e: MouseEvent) => void,
            onMouseup: onTouchEnd,
            onMouseleave: onTouchEnd,
          },
          slots.default?.(),
        )
    },
  })
}
