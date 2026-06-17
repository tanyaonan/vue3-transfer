import type { TransformResult } from '../types/index.js'

const DB_NAME = 'vue3-transfer'
const DB_VERSION = 1
const DB_STORE = 'compile-cache'
const CACHE_TTL = 24 * 60 * 60 * 1000 // 1 天

export interface CacheEntry {
  sourceHash: string
  code: string
  css?: string
  errors: string[]
  timestamp: number
}

let dbPromise: Promise<IDBDatabase> | null = null

function openCacheDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE)
      }
    }
  })

  return dbPromise
}

async function withStore<T>(
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T | undefined> {
  try {
    const db = await openCacheDB()
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, mode)
      const store = tx.objectStore(DB_STORE)
      const request = fn(store)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  } catch {
    return undefined
  }
}

export async function getCacheEntry(
  key: string,
  sourceHash: string,
): Promise<TransformResult | null> {
  const entry = await withStore<CacheEntry>('readonly', (store) => store.get(key))
  if (!entry) return null

  if (Date.now() - entry.timestamp > CACHE_TTL || entry.sourceHash !== sourceHash) {
    withStore('readwrite', (store) => store.delete(key))
    return null
  }

  return {
    code: entry.code,
    css: entry.css,
    errors: entry.errors,
  }
}

export async function setCacheEntry(
  key: string,
  sourceHash: string,
  result: TransformResult,
): Promise<void> {
  const entry: CacheEntry = {
    sourceHash,
    code: result.code,
    css: result.css,
    errors: result.errors,
    timestamp: Date.now(),
  }
  await withStore('readwrite', (store) => store.put(entry, key))
}

export async function clearCompileCache(): Promise<void> {
  await withStore('readwrite', (store) => store.clear())
}
