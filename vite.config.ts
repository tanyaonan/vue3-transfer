import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      // Use the browser build of Vue so the bundled runtime works without
      // import maps and without Node globals like `process`.
      vue: resolve(
        import.meta.dirname,
        'node_modules/vue/dist/vue.runtime-with-vapor.esm-browser.js',
      ),
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'vue3-transfer.js',
    },
    rollupOptions: {
      // Bundle @vue/compiler-sfc browser build and Vue runtime so the library
      // works standalone in a browser environment without an import map.
      external: [],
      output: {
        chunkFileNames: 'chunks/[name].js',
        manualChunks(id) {
          if (id.includes('compiler-sfc.esm-browser')) {
            return 'compiler'
          }
          if (id.includes('vue.runtime-with-vapor')) {
            return 'vue-runtime'
          }
        },
      },
    },
    sourcemap: false,
    minify: false,
  },
})
