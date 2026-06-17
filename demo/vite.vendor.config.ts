import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'vendor-entry.ts'),
      name: 'Vendor',
      formats: ['es'],
      fileName: 'vendor',
    },
    outDir: resolve(__dirname, 'vendor'),
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        codeSplitting: false,
        banner: `if (typeof globalThis.process === 'undefined') { globalThis.process = { env: { NODE_ENV: 'production' } } }`,
      },
      onwarn(warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION') return
        warn(warning)
      },
    },
    cssCodeSplit: false,
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
})
