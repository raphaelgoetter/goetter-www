// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/guide/build.html
export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        error: resolve(__dirname, 'error.html')
      },
    },
  },
})
