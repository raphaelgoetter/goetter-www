// vite.config.js
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

import { defineConfig } from 'vite'

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
