// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"

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
    handlebars({
      data: pageData,
      partialDirectory: resolve(__dirname, "assets/partials"),
    }),
  ],
})
