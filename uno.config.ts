import { defineConfig } from 'unocss'
import { presetMini } from 'unocss'

export default defineConfig({
  // presets: [
  //   presetMini(),
  // ],
  theme: {
    colors: {
      violet: '#000000',
      tomato: '#FFFFFF',
      hotpink: '#FF69B4',
      kiwigreen: '#7A960F',
    },
  },
}) as unknown
