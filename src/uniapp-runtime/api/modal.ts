import type { Component } from 'vue'
import { getRuntimeVue } from '../utils/vue.js'
import { ensureRoot, createRootApp } from '../utils/popup-root.js'
import type { ShowModalOptions } from '../utils/constants.js'

const DEFAULT_MODAL_STATE: Required<
  Omit<ShowModalOptions, 'success' | 'fail' | 'complete'>
> = {
  title: '',
  content: '',
  showCancel: true,
  cancelText: '',
  cancelColor: '',
  confirmText: '',
  confirmColor: '#007aff',
  editable: false,
  placeholderText: '',
}

function getLocaleTexts() {
  const lang = typeof navigator !== 'undefined' ? navigator.language || 'zh-CN' : 'zh-CN'
  if (lang.toLowerCase().startsWith('zh')) {
    return { cancel: '取消', confirm: '确定' }
  }
  return { cancel: 'Cancel', confirm: 'OK' }
}

function createModalComponent(): Component {
  const { h, defineComponent, Transition, ref } = getRuntimeVue()

  return defineComponent({
    name: 'Modal',
    props: {
      title: { type: String, default: '' },
      content: { type: String, default: '' },
      showCancel: { type: Boolean, default: true },
      cancelText: { type: String, default: '' },
      cancelColor: { type: String, default: '' },
      confirmText: { type: String, default: '' },
      confirmColor: { type: String, default: '#007aff' },
      editable: { type: Boolean, default: false },
      placeholderText: { type: String, default: '' },
      visible: { type: Boolean, default: false },
    },
    emits: ['close'],
    setup(props, { emit }) {
      const editableContent = ref('')

      const { watch } = getRuntimeVue()
      watch(
        () => props.visible,
        (visible) => {
          if (visible && props.editable) {
            editableContent.value = props.content || ''
          }
        },
        { immediate: true },
      )

      function onCancel() {
        emit('close', { confirm: false, cancel: true, content: '' })
      }
      function onConfirm() {
        emit('close', {
          confirm: true,
          cancel: false,
          content: props.editable ? editableContent.value : '',
        })
      }

      function onTouchMove(e: TouchEvent) {
        e.preventDefault()
      }
      function onBdTouchMove(e: TouchEvent) {
        e.stopPropagation()
      }

      const locale = getLocaleTexts()
      const cancelText = props.cancelText || locale.cancel
      const confirmText = props.confirmText || locale.confirm

      const isDark =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      const cancelColor = props.cancelColor || (isDark ? 'rgb(170,170,170)' : '#000000')

      return () =>
        h(
          Transition,
          { name: 'uni-fade' },
          {
            default: () =>
              h(
                'uni-modal',
                {
                  style: { display: props.visible ? 'block' : 'none' },
                  onTouchmove: onTouchMove,
                },
                [
                  h('div', { class: 'uni-mask' }),
                  h('div', { class: 'uni-modal' }, [
                    props.title
                      ? h('div', { class: 'uni-modal__hd' }, [
                          h('strong', { class: 'uni-modal__title' }, props.title),
                        ])
                      : null,
                    props.editable
                      ? h('textarea', {
                          class: 'uni-modal__textarea',
                          rows: '1',
                          placeholder: props.placeholderText,
                          value: editableContent.value,
                          onInput: (e: Event) => {
                            editableContent.value = (e.target as HTMLTextAreaElement).value
                          },
                        })
                      : h(
                          'div',
                          {
                            class: 'uni-modal__bd',
                            onTouchmove: onBdTouchMove,
                          },
                          props.content,
                        ),
                    h('div', { class: 'uni-modal__ft' }, [
                      props.showCancel
                        ? h(
                            'div',
                            {
                              class: 'uni-modal__btn uni-modal__btn_default',
                              style: { color: cancelColor },
                              onClick: onCancel,
                            },
                            cancelText,
                          )
                        : null,
                      h(
                        'div',
                        {
                          class: 'uni-modal__btn uni-modal__btn_primary',
                          style: { color: props.confirmColor },
                          onClick: onConfirm,
                        },
                        confirmText,
                      ),
                    ]),
                  ]),
                ],
              ),
          },
        )
    },
  })
}

let modalState: ModalState | null = null
let modalResolve: ((res: { confirm: boolean; cancel: boolean; content: string }) => void) | null = null

interface ModalState extends ShowModalOptions {
  visible: boolean
}

function pickModalState(options: ShowModalOptions): ModalState {
  const { success: _s, fail: _f, complete: _c, ...rest } = options as ShowModalOptions &
    Record<string, unknown>
  return {
    ...DEFAULT_MODAL_STATE,
    ...rest,
    visible: false,
  }
}

export function showModal(options: ShowModalOptions): void {
  const { reactive, nextTick } = getRuntimeVue()

  if (!modalState) {
    modalState = reactive(pickModalState(options))
    nextTick(() => {
      createRootApp(
        createModalComponent(),
        modalState as unknown as Record<string, unknown>,
        ((res: { confirm: boolean; cancel: boolean; content: string }) => {
          modalResolve?.(res)
          modalResolve = null
        }) as (...args: unknown[]) => void,
      ).mount(ensureRoot('u-a-m'))
    })
  } else {
    Object.assign(modalState, pickModalState(options))
  }

  modalResolve = (res) => {
    options.success?.(res)
    options.complete?.()
  }

  setTimeout(() => {
    modalState!.visible = true
  }, 10)
}
