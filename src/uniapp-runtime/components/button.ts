import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'

/**
 * 创建 UniApp <button> 的浏览器端运行时组件。
 *
 * 组件使用页面当前提供的 Vue 运行时（`window.Vue` 或库内置 Vue），
 * 避免与 Wot UI 等第三方组件库使用不同 Vue 副本时出现注入上下文警告。
 *
 * 样式完全通过属性选择器（`size`/`type`/`plain`/`disabled`/`loading`）
 * 与真实 H5 CSS 对齐，不再额外注入非标准的尺寸/类型类名。
 */
export function createButton(): Component {
  const { h, defineComponent, ref, computed, inject } = getRuntimeVue()

  return defineComponent({
    name: 'Button',
    props: {
      size: { type: String, default: 'default' },
      type: { type: String, default: 'default' },
      plain: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      loading: { type: Boolean, default: false },
      formType: { type: String, default: '' },
      openType: { type: String, default: '' },
      hoverClass: { type: String, default: 'button-hover' },
      hoverStartTime: { type: Number, default: 20 },
      hoverStayTime: { type: Number, default: 70 },
    },
    emits: ['click', 'getphonenumber', 'getuserinfo', 'contact', 'error', 'opensetting', 'launchapp'],
    setup(props, { emit, slots, attrs }) {
      const hovering = ref(false)
      let enterTimer: ReturnType<typeof setTimeout> | null = null
      let leaveTimer: ReturnType<typeof setTimeout> | null = null

      const formContext = inject<{ onSubmit?: () => void; onReset?: () => void } | null>('uni-form', null)

      const classes = computed(() => {
        const list: string[] = ['uni-button']
        if (props.plain) list.push('uni-button-plain')
        if (props.disabled) list.push('uni-button-disabled')
        if (props.loading) list.push('uni-button-loading')
        if (hovering.value && props.hoverClass) list.push(props.hoverClass)
        if (attrs.class && typeof attrs.class === 'string') list.push(attrs.class)
        return list
      })

      function onTouchStart(_e: TouchEvent) {
        if (props.disabled || props.loading) return
        if (enterTimer) clearTimeout(enterTimer)
        enterTimer = setTimeout(() => {
          hovering.value = true
        }, props.hoverStartTime)
      }

      function onTouchEnd() {
        if (leaveTimer) clearTimeout(leaveTimer)
        leaveTimer = setTimeout(() => {
          hovering.value = false
        }, props.hoverStayTime)
      }

      function onClick(e: MouseEvent) {
        if (props.disabled || props.loading) {
          e.preventDefault()
          return
        }

        if (props.formType === 'submit') {
          formContext?.onSubmit?.()
        } else if (props.formType === 'reset') {
          formContext?.onReset?.()
        }

        emit('click', e)
      }

      return () =>
        h(
          'uni-button',
          {
            ...attrs,
            class: classes.value,
            type: props.type,
            size: props.size,
            plain: props.plain || null,
            loading: props.loading || null,
            disabled: props.disabled || null,
            onTouchstart: onTouchStart,
            onTouchend: onTouchEnd,
            onTouchcancel: onTouchEnd,
            onMousedown: onTouchStart as unknown as (e: MouseEvent) => void,
            onMouseup: onTouchEnd,
            onMouseleave: onTouchEnd,
            onClick: onClick,
          },
          [slots.default?.()],
        )
    },
  })
}
