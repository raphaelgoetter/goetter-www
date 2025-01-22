// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"
import UnoCSS from "unocss/vite"

// https://www.npmjs.com/package/vite-plugin-handlebars
const pageData = {
  "/index.html": {
    title: "Raphaël Goetter, CSS addict",
  },
  "/error.html": {
    title: "Erreur 404",
  },
}

// https://vitejs.dev/guide/build.html
export default defineConfig({
  plugins: [
    UnoCSS(),
    handlebars({
      partialDirectory: resolve(__dirname, "./assets/partials/"),
      context(pagePath) {
        return pageData[pagePath]
      },
    }),
  ],
  // Uniquement si build *avant* de push sur GH
  // base: "/goetter-www/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        error: resolve(__dirname, "404.html"),
      },
    },
  },
})
