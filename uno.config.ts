import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [], // disable default preset
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
    text: {
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
    font: {
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
    size: {
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
    gap: {
      0: '0',
      6: '0.375rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      24: '1.5rem',
      40: '2.5rem',
      48: '3rem',
    },
    radius: {
      'none': '0',
      'sm': '0.25rem',
      'md': '0.5rem',
      'lg': '1rem',
      'full': '9999px',
    },
    display: {
      'none': 'none',
      'show': 'revert',
      'block': 'block',
      'inline': 'inline',
      'inline-block': 'inline-block',
      'flex:': 'flex',
      'inline-flex': 'inline-flex',
      'grid': 'grid',
      'inline-grid': 'inline-grid',
    },
  },
  // rules: [
  //   ['text-small', {font-size: '0.875rem'}],
  //   ['text-smaller', {font-size: '0.875em'}],
  //   ['text-big', {font-size: '1.125rem'}],
  //   ['text-bigger', {font-size: '1.125em'}],
  //   ['text-inherit', {font-size: 'inherit'}],
  //   ['text-start', {text-align: 'start'}],
  //   ['text-end', {text-align: 'end'}],
  //   ['text-center', {text-align: 'center'}],
  //   ['text-justify', {text-align: 'justify'}],
  // ],
})
