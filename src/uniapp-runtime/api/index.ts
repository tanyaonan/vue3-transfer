import { showToast, hideToast, showLoading, hideLoading } from './toast.js'
import { showModal } from './modal.js'
import { request } from './request.js'
import { getSystemInfoSync, getSystemInfo } from './system-info.js'
import { getStorageSync, setStorageSync, removeStorageSync, clearStorageSync } from './storage.js'
import { navigateTo, redirectTo, switchTab, reLaunch } from './navigate.js'
import { $on, $off, $emit } from './event-bus.js'
import { createSelectorQuery } from './createSelectorQuery.js'
import { getCurrentPages } from './getCurrentPages.js'
import type { UniRuntime } from '../utils/constants.js'

export function createUniRuntime(_vue?: unknown): UniRuntime {
  return {
    showToast,
    hideToast,
    showLoading,
    hideLoading,
    showModal,
    request,
    getSystemInfoSync,
    getSystemInfo,
    getStorageSync,
    setStorageSync,
    removeStorageSync,
    clearStorageSync,
    navigateTo,
    redirectTo,
    switchTab,
    reLaunch,
    $on,
    $off,
    $emit,
    createSelectorQuery,
    getCurrentPages,
  }
}
