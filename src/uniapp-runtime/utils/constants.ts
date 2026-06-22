/**
 * 浏览器端 UniApp H5 运行时常量与类型。
 *
 * 这些类型只描述本期需要支持的最小 API 表面，便于在浏览器预览中
 * 与真实 @dcloudio/uni-h5 保持一致。
 */

export interface ShowToastOptions {
  title?: string
  icon?: 'success' | 'loading' | 'none' | 'error'
  image?: string
  duration?: number
  mask?: boolean
  success?: () => void
  fail?: (err: unknown) => void
  complete?: () => void
}

export interface ShowLoadingOptions {
  title?: string
  mask?: boolean
  success?: () => void
  fail?: (err: unknown) => void
  complete?: () => void
}

export interface ShowModalOptions {
  title?: string
  content?: string
  showCancel?: boolean
  cancelText?: string
  cancelColor?: string
  confirmText?: string
  confirmColor?: string
  editable?: boolean
  placeholderText?: string
  success?: (res: { confirm: boolean; cancel: boolean; content?: string }) => void
  fail?: (err: unknown) => void
  complete?: () => void
}

export interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT'
  data?: unknown
  header?: Record<string, string>
  timeout?: number
  dataType?: string
  responseType?: 'text' | 'arraybuffer'
  success?: (res: RequestSuccessResult) => void
  fail?: (err: unknown) => void
  complete?: () => void
}

export interface RequestSuccessResult {
  data: unknown
  statusCode: number
  header: Record<string, string>
  cookies?: string[]
}

export interface RequestTask {
  abort: () => void
  onHeadersReceived?: (cb: (res: { header: Record<string, string> }) => void) => void
  offHeadersReceived?: (cb?: (res: { header: Record<string, string> }) => void) => void
}

export interface SystemInfo {
  windowWidth: number
  windowHeight: number
  pixelRatio: number
  screenWidth: number
  screenHeight: number
  language: string
  statusBarHeight: number
  safeArea: {
    top: number
    left: number
    right: number
    bottom: number
    width: number
    height: number
  }
  platform: string
  system: string
  model: string
  deviceBrand?: string
  deviceType?: string
  SDKVersion?: string
  hostName?: string
  hostVersion?: string
  hostPackageName?: string
  appId?: string
  appName?: string
  appVersion?: string
  appLanguage?: string
  version?: string
  theme?: 'light' | 'dark'
}

export interface NavigateOptions {
  url: string
  success?: () => void
  fail?: (err: unknown) => void
  complete?: () => void
}

export type UniEventCallback = (...args: unknown[]) => void

/**
 * 注入到 window 的 uni 对象接口（最小子集）。
 */
export interface UniRuntime {
  showToast: (options: ShowToastOptions) => void
  hideToast: () => void
  showLoading: (options: ShowLoadingOptions) => void
  hideLoading: () => void
  showModal: (options: ShowModalOptions) => void
  request: (options: RequestOptions) => RequestTask
  getSystemInfoSync: () => SystemInfo
  getSystemInfo: (options: { success?: (res: SystemInfo) => void; fail?: (err: unknown) => void; complete?: () => void }) => void
  getStorageSync: (key: string) => unknown
  setStorageSync: (key: string, value: unknown) => void
  removeStorageSync: (key: string) => void
  clearStorageSync: () => void
  navigateTo: (options: NavigateOptions) => void
  redirectTo: (options: NavigateOptions) => void
  switchTab: (options: NavigateOptions) => void
  reLaunch: (options: NavigateOptions) => void
  $on: (event: string, cb: UniEventCallback) => void
  $off: (event: string, cb?: UniEventCallback) => void
  $emit: (event: string, ...args: unknown[]) => void
  createSelectorQuery: () => {
    in: (scope: unknown) => any
    select: (selector: string) => any
    selectAll: (selector: string) => any
    boundingClientRect: (callback?: (rect: any) => void) => any
    fields: (config: any, callback?: (res: any) => void) => any
    exec: (callback?: (res: any[]) => void) => any
  }
  getCurrentPages: () => any[]
}
