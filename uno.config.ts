import { defineConfig } from 'unocss'
import customProperties from 'unocss-custom-properties'
import { resolve } from 'node:path'

export default defineConfig({
  presets: [
    customProperties({
      writeFile: true,
      filePath: resolve(__dirname, 'vars.css')
    }
    ),
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        10: '#E6E7E8',
        50: '#939598',
        90: '#414042',
        95: '#262527',
      },
      green: {
        50: '#3C763D',
        60: '#275C28',
      },
      orange: {
        20: '#ECC984',
        30: '#DCAA44',
        50: '#C4851C',
        60: '#8A6D3B',
      },
      pink: {
        10: '#F4CEE1',
        60: '#8E1D56',
      },
      hotpink: '#FF69B4',
      kiwigreen: '#7A960F',
    },
    spacing: {
      0: '0',
      1: '1px',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      '25p': '25%',
      '50p': '50%',
      '75p': '75%',
      '100p': '100%',
      'auto': 'auto',
    },
    fontFamily: {
      calendas: 'calendas, georgia, serif',
    },
    fontSize: {
      10: '0.625rem',
      11: '0.6875rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      30: '1.875rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
    },
    fontWeight: {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'regular': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    lineHeight: {
      10: '0.625rem',
      11: '0.6875rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      30: '1.875rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.25rem',
      'md': '0.5rem',
      'lg': '1rem',
      'full': '9999px',
    },
  },
})