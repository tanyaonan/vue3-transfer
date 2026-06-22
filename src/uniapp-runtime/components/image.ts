import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'

const VALID_MODES = [
  'scaleToFill',
  'aspectFit',
  'aspectFill',
  'widthFix',
  'heightFix',
  'top',
  'bottom',
  'center',
  'left',
  'right',
  'top left',
  'top right',
  'bottom left',
  'bottom right',
] as const

type ImageMode = (typeof VALID_MODES)[number]

/**
 * 创建 UniApp <image> 的浏览器端运行时组件。
 *
 * 与真实 uni-h5 一致：外层 <uni-image>，内部用 div 做 mode 裁剪，
 * 并用 img 标签承载 src 与事件。img 默认不可拖拽。
 */
export function createImage(): Component {
  const { h, defineComponent, ref, computed, watch, onMounted, onUnmounted } = getRuntimeVue()

  return defineComponent({
    name: 'Image',
    props: {
      src: { type: String, default: '' },
      mode: { type: String, default: 'scaleToFill' },
      lazyLoad: { type: Boolean, default: false },
      draggable: { type: Boolean, default: false },
      showMenuByLongpress: { type: Boolean, default: false },
    },
    emits: ['load', 'error'],
    setup(props, { emit, attrs }) {
      const mode = computed<ImageMode>(() => {
        const m = props.mode as ImageMode
        return VALID_MODES.includes(m) ? m : 'scaleToFill'
      })

      const loaded = ref(false)
      const error = ref(false)
      const rootRef = ref<HTMLElement | null>(null)
      const imgSize = ref({ width: 0, height: 0 })

      const backgroundStyle = computed(() => {
        const s: Record<string, string> = {
          backgroundImage: props.src ? `url(${JSON.stringify(props.src)})` : 'none',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }

        switch (mode.value) {
          case 'aspectFit':
            s.backgroundSize = 'contain'
            break
          case 'aspectFill':
            s.backgroundSize = 'cover'
            break
          case 'widthFix': {
            const ratio =
              imgSize.value.width > 0
                ? (imgSize.value.height / imgSize.value.width) * 100
                : 75
            s.height = '0'
            s.paddingTop = `${ratio}%`
            break
          }
          case 'heightFix':
            s.width = '100%'
            s.height = '100%'
            break
          case 'top':
            s.backgroundPosition = 'top center'
            break
          case 'bottom':
            s.backgroundPosition = 'bottom center'
            break
          case 'center':
            s.backgroundPosition = 'center center'
            break
          case 'left':
            s.backgroundPosition = 'left center'
            break
          case 'right':
            s.backgroundPosition = 'right center'
            break
          case 'top left':
            s.backgroundPosition = 'top left'
            break
          case 'top right':
            s.backgroundPosition = 'top right'
            break
          case 'bottom left':
            s.backgroundPosition = 'bottom left'
            break
          case 'bottom right':
            s.backgroundPosition = 'bottom right'
            break
        }
        return s
      })

      function onLoad() {
        loaded.value = true
        error.value = false
        emit('load', { detail: { width: imgSize.value.width, height: imgSize.value.height } })
      }

      function onError() {
        error.value = true
        loaded.value = false
        emit('error', { detail: { errMsg: 'load image fail' } })
      }

      // widthFix / heightFix 需要读取容器尺寸，这里用 ResizeObserver 近似
      let resizeObserver: ResizeObserver | null = null
      onMounted(() => {
        if (!rootRef.value) return
        if (mode.value === 'widthFix' || mode.value === 'heightFix') {
          resizeObserver = new ResizeObserver((_entries) => {
            // 保持比例由 CSS 控制，这里预留观测入口
          })
          resizeObserver.observe(rootRef.value)
        }

        // 预加载获取原始尺寸
        if (props.src) {
          const img = new Image()
          img.onload = () => {
            imgSize.value = { width: img.naturalWidth, height: img.naturalHeight }
          }
          img.onerror = () => {
            error.value = true
          }
          img.src = props.src
        }
      })

      onUnmounted(() => {
        resizeObserver?.disconnect()
      })

      watch(
        () => props.src,
        (newSrc) => {
          if (!newSrc) {
            imgSize.value = { width: 0, height: 0 }
            return
          }
          const img = new Image()
          img.onload = () => {
            imgSize.value = { width: img.naturalWidth, height: img.naturalHeight }
          }
          img.onerror = () => {
            error.value = true
          }
          img.src = newSrc
        },
      )

      return () =>
        h(
          'uni-image',
          {
            ...attrs,
            ref: rootRef,
          },
          [
            h('div', {
              style: backgroundStyle.value,
            }),
            props.src
              ? h('img', {
                  src: props.src,
                  draggable: props.draggable,
                  onLoad: onLoad,
                  onError: onError,
                })
              : h('img'),
          ],
        )
    },
  })
}
