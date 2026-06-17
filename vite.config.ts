import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      // 使用浏览器版 Vue 运行时，避免依赖 import map 和 Node 全局变量。
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
      // 将 @vue/compiler-sfc 浏览器版和 Vue 运行时一起打包，使库在浏览器中独立运行。
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
