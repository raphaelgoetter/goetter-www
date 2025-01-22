// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"

// https://www.npmjs.com/package/vite-plugin-handlebars
const pageData = {
  "/index.html": {
    isHome: true,
    title: "Raphaël Goetter, CSS addict",
  },
  "/error.html": {
    isError: true,
    title: "Erreur 404, fichier non trouvé",
  },
}

// https://vitejs.dev/guide/build.html
export default defineConfig({
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath]
      },
      partialDirectory: resolve(__dirname, "assets/partials"),
    }),
  ],
})
