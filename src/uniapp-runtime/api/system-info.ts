import type { SystemInfo } from '../utils/constants.js'

function isLandscape(): boolean {
  return typeof window !== 'undefined' && Math.abs(window.orientation) === 90
}

function parseUA(): { system: string; model: string; platform: string; deviceBrand: string; deviceType: string } {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  let system = ''
  let model = ''
  let platform = 'other'
  let deviceBrand = ''
  let deviceType = 'phone'

  const android = ua.match(/Android[\s/]([\w.]+)/)
  if (android) {
    system = `Android ${android[1]}`
    platform = 'android'
    const modelMatch = ua.match(/;\s*([^)]+)\)\s*AppleWebKit/)
    model = modelMatch?.[1]?.trim() || ''
    deviceBrand = model.split(' ')[0] || ''
  }

  const iphone = ua.match(/iPhone OS ([\w_]+)/)
  if (iphone) {
    system = `iOS ${iphone[1].replace(/_/g, '.')}`
    platform = 'ios'
    model = 'iPhone'
    deviceBrand = 'apple'
  }

  const ipad = ua.match(/iPad.*?OS ([\w_]+)/)
  if (ipad) {
    system = `iOS ${ipad[1].replace(/_/g, '.')}`
    platform = 'ios'
    model = 'iPad'
    deviceBrand = 'apple'
    deviceType = 'pad'
  }

  if (window.innerWidth >= 768 && window.innerWidth > window.innerHeight) {
    deviceType = 'pad'
  }

  return { system, model, platform, deviceBrand, deviceType }
}

export function getSystemInfoSync(): SystemInfo {
  const ua = parseUA()
  const pixelRatio = window.devicePixelRatio || 1
  const screenWidth = window.screen.width || window.innerWidth
  const screenHeight = window.screen.height || window.innerHeight
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const landscape = isLandscape()
  const language = navigator.language || 'zh-CN'

  // safe-area-insets 简单近似
  const safeAreaInsets = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

  const safeArea = {
    top: safeAreaInsets.top,
    left: safeAreaInsets.left,
    right: windowWidth - safeAreaInsets.right,
    bottom: windowHeight - safeAreaInsets.bottom,
    width: windowWidth - safeAreaInsets.left - safeAreaInsets.right,
    height: windowHeight - safeAreaInsets.top - safeAreaInsets.bottom,
  }

  return {
    windowWidth,
    windowHeight,
    pixelRatio,
    screenWidth: landscape ? screenHeight : screenWidth,
    screenHeight: landscape ? screenWidth : screenHeight,
    language,
    statusBarHeight: safeAreaInsets.top,
    safeArea,
    platform: ua.platform,
    system: ua.system,
    model: ua.model,
    deviceBrand: ua.deviceBrand,
    deviceType: ua.deviceType,
    SDKVersion: '',
    hostName: 'browser',
    hostVersion: '',
    hostPackageName: '',
    appId: '',
    appName: '',
    appVersion: '',
    appLanguage: language,
    version: '',
    theme: window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  }
}

export function getSystemInfo(options: {
  success?: (res: SystemInfo) => void
  fail?: (err: unknown) => void
  complete?: () => void
}): void {
  try {
    const res = getSystemInfoSync()
    options.success?.(res)
    options.complete?.()
  } catch (err) {
    options.fail?.(err)
    options.complete?.()
  }
}
