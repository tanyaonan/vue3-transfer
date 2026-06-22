import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'

const TYPE_MAP: Record<string, string> = {
  text: 'text',
  number: 'number',
  idcard: 'text',
  digit: 'number',
  tel: 'tel',
  'safe-password': 'password',
  nickname: 'text',
}

/**
 * 创建 UniApp <input> 的浏览器端运行时组件。
 *
 * 与真实 uni-h5 对齐：
 * - 外层 <uni-input>
 * - .uni-input-wrapper 内包含独立的 .uni-input-placeholder 占位元素
 * - placeholder-style / placeholder-class 作用在占位元素上
 * - confirm-type="search" 时使用 <form class="uni-input-form"> 包装
 * - digit → type="number" + inputmode="decimal"
 * - number → type="number" + pattern="[0-9]*"
 */
export function createInput(): Component {
  const { h, defineComponent, ref, watch, computed } = getRuntimeVue()

  return defineComponent({
    name: 'Input',
    props: {
      value: { type: String, default: '' },
      modelValue: { type: String, default: '' },
      type: { type: String, default: 'text' },
      password: { type: Boolean, default: false },
      placeholder: { type: String, default: '' },
      placeholderStyle: { type: String, default: '' },
      placeholderClass: { type: String, default: 'input-placeholder' },
      disabled: { type: Boolean, default: false },
      maxlength: { type: Number, default: 140 },
      cursorSpacing: { type: Number, default: 0 },
      focus: { type: Boolean, default: false },
      confirmType: { type: String, default: 'done' },
      confirmHold: { type: Boolean, default: false },
      cursor: { type: Number, default: -1 },
      selectionStart: { type: Number, default: -1 },
      selectionEnd: { type: Number, default: -1 },
      cursorColor: { type: String, default: '' },
      textContentType: { type: String, default: '' },
      autoBlur: { type: Boolean, default: false },
      adjustPosition: { type: Boolean, default: true },
      showConfirmBar: { type: Boolean, default: true },
    },
    emits: ['update:modelValue', 'input', 'focus', 'blur', 'confirm', 'change', 'keyboardheightchange'],
    setup(props, { emit, attrs }) {
      const internalValue = ref(props.modelValue || props.value)
      const inputRef = ref<HTMLInputElement | null>(null)

      watch(
        () => props.modelValue || props.value,
        (v) => {
          if (v !== internalValue.value) {
            internalValue.value = String(v)
          }
        },
      )

      const inputType = computed(() => {
        if (props.password) return 'password'
        return TYPE_MAP[props.type] || 'text'
      })

      const inputMode = computed(() => {
        if (props.type === 'number') return 'numeric'
        if (props.type === 'digit') return 'decimal'
        if (props.type === 'tel') return 'tel'
        return 'text'
      })

      const inputStep = computed(() => {
        if (props.type === 'number' || props.type === 'digit') return '0.000000000000000001'
        return ''
      })

      const showPlaceholder = computed(() => internalValue.value === '')

      function convertRpx(value: string): string {
        // 与 uni-h5 产物中的 rpx 转换保持一致：1rpx -> 1/32rem
        return value.replace(/(\d+(?:\.\d+)?)rpx/g, (_, num) => `${(Number(num) / 32).toFixed(4).replace(/\.?0+$/, '')}rem`)
      }

      const placeholderStyleParsed = computed(() => {
        const style: Record<string, string> = {}
        if (props.placeholderStyle) {
          props.placeholderStyle.split(';').forEach((pair) => {
            const [k, v] = pair.split(':')
            if (k && v) style[k.trim()] = convertRpx(v.trim())
          })
        }
        return style
      })

      const inputStyle = computed(() => {
        const style: Record<string, string> = {}
        if (props.cursorColor) {
          style.caretColor = props.cursorColor
        }
        return style
      })

      function onInput(e: Event) {
        const target = e.target as HTMLInputElement
        let val = target.value
        if (props.maxlength >= 0 && val.length > props.maxlength) {
          val = val.slice(0, props.maxlength)
          target.value = val
        }
        internalValue.value = val
        emit('update:modelValue', val)
        emit('input', { detail: { value: val, cursor: target.selectionStart ?? 0 } })
      }

      function onFocus(_e: FocusEvent) {
        emit('focus', { detail: { value: internalValue.value } })
      }

      function onBlur(_e: FocusEvent) {
        emit('blur', { detail: { value: internalValue.value } })
        emit('change', { detail: { value: internalValue.value } })
      }

      function onConfirm() {
        emit('confirm', { detail: { value: internalValue.value } })
        emit('change', { detail: { value: internalValue.value } })
        if (props.autoBlur && inputRef.value) {
          inputRef.value.blur()
        }
      }

      function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter') {
          onConfirm()
        }
      }

      function onFormSubmit(e: Event) {
        e.preventDefault()
        onConfirm()
      }

      return () => {
        const inputEl = h('input', {
          ref: inputRef,
          type: inputType.value,
          inputmode: inputMode.value,
          step: inputStep.value,
          value: internalValue.value,
          disabled: props.disabled,
          maxlength: props.maxlength,
          autofocus: props.focus,
          enterkeyhint: props.confirmType,
          autocomplete: props.textContentType || 'off',
          class: 'uni-input-input',
          style: inputStyle.value,
          onInput,
          onFocus,
          onBlur,
          onKeydown,
        })

        const content =
          props.confirmType === 'search'
            ? h(
                'form',
                {
                  class: 'uni-input-form',
                  action: '',
                  onSubmit: onFormSubmit,
                },
                [inputEl],
              )
            : inputEl

        return h(
          'uni-input',
          {
            ...attrs,
            class: attrs.class,
          },
          [
            h('div', { class: 'uni-input-wrapper' }, [
              showPlaceholder.value
                ? h(
                    'div',
                    {
                      class: ['uni-input-placeholder', props.placeholderClass],
                      style: placeholderStyleParsed.value,
                    },
                    props.placeholder,
                  )
                : null,
              content,
            ]),
          ],
        )
      }
    },
  })
}
