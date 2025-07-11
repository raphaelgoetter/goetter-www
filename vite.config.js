// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"
import vsharp from "vite-plugin-vsharp"

// https://www.npmjs.com/package/vite-plugin-handlebars
const pageData = {
  "/index.html": {
    isHome: true,
    title: "Raphaël Goetter, CSS addict",
  },
  "/404.html": {
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
    vsharp({
      // excludePublic: ["public/*"],
      // includePublic: ["public/images/*"],
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 85,
        palette: true,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 85,
        mozjpeg: true,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 85,
        mozjpeg: true,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        quality: 80,
        lossless: false,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        quality: 70,
        lossless: false,
      },
    }),
  ],
})
