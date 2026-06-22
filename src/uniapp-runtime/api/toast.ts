import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'
import { ensureRoot, createRootApp } from '../utils/popup-root.js'
import type { ShowToastOptions, ShowLoadingOptions } from '../utils/constants.js'

// 与真实 uni-h5 产物中的图标路径保持一致
const ICON_SUCCESS_PATH =
  'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z'

const ICON_ERROR_PATH =
  'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z'

function createToastComponent(): Component {
  const { h, defineComponent, Transition, computed } = getRuntimeVue()

  return defineComponent({
    name: 'Toast',
    props: {
      title: { type: String, default: '' },
      icon: { type: String, default: 'success' },
      image: { type: String, default: '' },
      duration: { type: Number, default: 1500 },
      mask: { type: Boolean, default: false },
      visible: { type: Boolean, default: false },
    },
    setup(props) {
      const hasIcon = computed(
        () => !!(props.image || props.icon === 'success' || props.icon === 'loading' || props.icon === 'error'),
      )

      const iconFill = computed(() => {
        if (typeof window === 'undefined') return '#fff'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'rgba(255, 255, 255, 0.9)'
          : '#ffffff'
      })

      function renderIcon() {
        if (props.image) {
          return h('img', { src: props.image, class: 'uni-toast__icon' })
        }
        if (props.icon === 'success') {
          return h('svg', {
            width: 38,
            height: 38,
            viewBox: '0 0 32 32',
            class: 'uni-toast__icon',
            innerHTML: `<path d="${ICON_SUCCESS_PATH}" fill="${iconFill.value}"/>`,
          })
        }
        if (props.icon === 'error') {
          return h('svg', {
            width: 38,
            height: 38,
            viewBox: '0 0 32 32',
            class: 'uni-toast__icon',
            innerHTML: `<path d="${ICON_ERROR_PATH}" fill="${iconFill.value}"/>`,
          })
        }
        if (props.icon === 'loading') {
          return h('i', { class: 'uni-toast__icon uni-loading' })
        }
        return null
      }

      function onMaskTouchMove(e: TouchEvent) {
        e.preventDefault()
      }

      return () => h(
          Transition,
          { name: 'uni-fade' },
          {
            default: () =>
              h(
                'uni-toast',
                {
                  'data-duration': props.duration,
                  style: { display: props.visible ? 'block' : 'none' },
                },
                [
                  props.mask
                    ? h('div', {
                        class: 'uni-mask',
                        style: { background: 'transparent' },
                        onTouchmove: onMaskTouchMove,
                      })
                    : null,
                  !hasIcon.value
                    ? h('div', { class: 'uni-sample-toast' }, [
                        h('p', { class: 'uni-simple-toast__text' }, props.title),
                      ])
                    : h('div', { class: 'uni-toast' }, [
                        renderIcon(),
                        h('p', { class: 'uni-toast__content' }, props.title),
                      ]),
                ],
              ),
          },
        )
    },
  })
}

let toastState: ShowToastState | null = null
let showType: 'toast' | 'loading' | '' = ''
let timeoutId: ReturnType<typeof setTimeout> | null = null

interface ShowToastState extends ShowToastOptions {
  visible: boolean
}

function watchVisible() {
  const { watch } = getRuntimeVue()
  watch(
    [() => toastState!.visible, () => toastState!.duration],
    ([visible, duration]) => {
      if (visible) {
        const delay = typeof duration === 'number' && duration > 0 ? duration : 1500
        if (timeoutId) clearTimeout(timeoutId)
        if (showType === 'loading') return
        timeoutId = setTimeout(() => {
          hideToast()
        }, delay)
      } else {
        if (timeoutId) clearTimeout(timeoutId)
      }
    },
  )
}

function createToast(args: ShowToastState) {
  const { reactive, nextTick } = getRuntimeVue()

  if (!toastState) {
    toastState = reactive({ ...args, visible: false })
    nextTick(() => {
      watchVisible()
      createRootApp(createToastComponent(), toastState as unknown as Record<string, unknown>, () => {}).mount(
        ensureRoot('u-a-t'),
      )
    })
  } else {
    Object.assign(toastState, args)
  }
  setTimeout(() => {
    if (toastState) {
      toastState.visible = true
    }
  }, 10)
}

export function showToast(options: ShowToastOptions): void {
  createToast({
    title: options.title || '',
    icon: options.icon || 'success',
    image: options.image || '',
    duration: options.duration ?? 1500,
    mask: options.mask ?? false,
    visible: false,
  })
  showType = 'toast'
  options.success?.()
  options.complete?.()
}

export function showLoading(options: ShowLoadingOptions): void {
  createToast({
    title: options.title || '',
    icon: 'loading',
    image: '',
    duration: 1e8,
    mask: options.mask ?? false,
    visible: false,
  })
  showType = 'loading'
  options.success?.()
  options.complete?.()
}

export function hideToast(): void {
  if (showType !== 'toast') {
    console.warn('[uniapp-runtime] showToast 与 hideToast 必须配对使用')
    return
  }
  showType = ''
  setTimeout(() => {
    if (toastState) toastState.visible = false
  }, 10)
}

export function hideLoading(): void {
  if (showType !== 'loading') {
    console.warn('[uniapp-runtime] showLoading 与 hideLoading 必须配对使用')
    return
  }
  showType = ''
  setTimeout(() => {
    if (toastState) toastState.visible = false
  }, 10)
}
