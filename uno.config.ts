import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      hotpink: '#FF69B4',
      kiwigreen: '#7A960F',
    },
  },
  rules: [
    ['kiwigreen', { fontWeight: 'bold' }],
  ],
}) as unknown
