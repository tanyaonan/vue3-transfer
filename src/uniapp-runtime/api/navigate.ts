import type { NavigateOptions } from '../utils/constants.js'

function warn(name: string, options: NavigateOptions): void {
  console.warn(
    `[uniapp-runtime] ${name} 在浏览器预览中仅做占位，目标：${options.url}。完整路由将在完整 H5 运行时中实现。`,
  )
  options.success?.()
  options.complete?.()
}

export function navigateTo(options: NavigateOptions): void {
  warn('navigateTo', options)
}

export function redirectTo(options: NavigateOptions): void {
  warn('redirectTo', options)
}

export function switchTab(options: NavigateOptions): void {
  warn('switchTab', options)
}

export function reLaunch(options: NavigateOptions): void {
  warn('reLaunch', options)
}
