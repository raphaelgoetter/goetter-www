// vite.config.js
import { resolve } from 'path'

import { defineConfig } from 'vite'

// https://vitejs.dev/guide/build.html
export default defineConfig({
  plugins: [
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
