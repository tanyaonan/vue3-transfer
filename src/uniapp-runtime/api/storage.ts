export function getStorageSync(key: string): unknown {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return ''
    return JSON.parse(raw)
  } catch {
    return ''
  }
}

export function setStorageSync(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.warn('[uniapp-runtime] setStorageSync failed', e)
  }
}

export function removeStorageSync(key: string): void {
  localStorage.removeItem(key)
}

export function clearStorageSync(): void {
  localStorage.clear()
}
