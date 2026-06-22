import type { UniEventCallback } from '../utils/constants.js'

const listeners: Record<string, Set<UniEventCallback>> = {}

export function $on(event: string, cb: UniEventCallback): void {
  ;(listeners[event] ??= new Set()).add(cb)
}

export function $off(event: string, cb?: UniEventCallback): void {
  if (!cb) {
    delete listeners[event]
    return
  }
  listeners[event]?.delete(cb)
}

export function $emit(event: string, ...args: unknown[]): void {
  listeners[event]?.forEach((cb) => cb(...args))
}
