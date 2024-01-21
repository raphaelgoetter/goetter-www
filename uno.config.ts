import { defineConfig } from 'unocss'
<<<<<<< HEAD
import { presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetAttributify()],
=======
import { presetMini } from 'unocss'

export default defineConfig({
  // presets: [
  //   presetMini(),
  // ],
>>>>>>> parent of 1ad2d0a (Revert "feat(config): configure UnoCSS (suite)")
  theme: {
    colors: {
      violet: '#000000',
      tomato: '#FFFFFF',
      hotpink: '#FF69B4',
      kiwigreen: '#7A960F',
    },
  },
}) as unknown
