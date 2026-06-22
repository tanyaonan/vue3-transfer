import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [
    uni(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 消除 Dart Sass legacy JS API 弃用警告
        api: 'modern',
      },
    },
  },
})
