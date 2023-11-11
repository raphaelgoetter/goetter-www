// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/guide/build.html
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        index404: resolve(__dirname, '404.html')
      },
    },
  },
})
