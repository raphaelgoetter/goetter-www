import { defineConfig } from "unocss"
import customProperties from "unocss-custom-properties"
import { resolve } from "node:path"
import { presetMini } from "unocss"

export default defineConfig({
  presets: [
    presetMini({
      dark: { dark: "[data-theme='dark']" },
    }),
    /**
     * Export des custom properties dans un fichier `vars.css`
     */
    customProperties({
      writeFile: true,
      filePath: resolve(__dirname, "vars.css"),
    }),
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        10: "#E6E7E8",
        50: "#939598",
        90: "#414042",
        95: "#262527",
      },
      green: {
        50: "#3C763D",
        60: "#275C28",
      },
      orange: {
        20: "#ECC984",
        30: "#DCAA44",
        50: "#C4851C",
        60: "#8A6D3B",
      },
      pink: {
        10: "#F4CEE1",
        60: "#8E1D56",
      },
      hotpink: "#FF69B4",
      kiwigreen: "#7A960F",
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "0.125rem",
      4: "0.25rem",
      6: "0.375rem",
      8: "0.5rem",
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      "25p": "25%",
      "50p": "50%",
      "75p": "75%",
      "100p": "100%",
      max: "1440px",
      auto: "auto",
    },
    fontFamily: {
      calendas: "calendas, georgia, serif",
    },
    fontSize: {
      10: "0.625rem",
      11: "0.6875rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      30: "1.875rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      10: "0.625rem",
      11: "0.6875rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      30: "1.875rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },
  },
  preflights: [
    /**
     * Génération d'un reset de styles injecté dans UNOCSS
     */
    {
      getCSS: () => {
        return /* css */ `
          :where(*,
          *::before,
          *::after) {
            box-sizing: border-box;
            min-width: 0;
          }
          :where(html) {
            overflow-wrap: break-word;
          }
          :where(body) {
            min-height: 100vh;
            min-height: 100dvh;
            margin: 0;
            font-family: system-ui, sans-serif;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
          }

          /* Suppression des animations selon préférences utilisateurice */
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-delay: -1ms !important;
              animation-duration: 1ms !important;
              animation-iteration-count: 1 !important;
              background-attachment: initial !important;
              scroll-behavior: auto !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          }
        `
      },
    },
  ],
  rules: [
    [
      /^visually-hidden$/,
      (_, { rawSelector }) => /* css */ `
      .${rawSelector}:not(:focus):not(:active) {
        position: absolute !important;
        clip-path: inset(50%) !important;
        width: 1px !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        white-space: nowrap !important;
      }
      `,
    ],
    [
      /^liquid$/,
      (_, { rawSelector }) => /* css */ `
        :where(.${rawSelector}) {
          display: grid;
          grid-template-columns:
            [layout-start] minmax(var(--spacing-16), 1fr)
            [content-start] minmax(auto, var(--spacing-max)) [content-end]
            minmax(var(--spacing-16), 1fr) [layout-end];
          > * {
            grid-column: content;
          }
        }
      `,
    ],
    [
      /^splash$/,
      (_, { rawSelector }) => /* css */ `
        :where(.${rawSelector}) {
          display: grid;
          grid-template-columns: inherit;
          grid-column: layout;
          & > * {
            grid-column: content;
          }
        }
      `,
    ],
    [
      /^has-gradient$/,
      (_, { rawSelector }) => /* css */ `
        :where(.${rawSelector}) {
          background: linear-gradient(242.68deg, #0d1a2a -0.25%, #1f0921 100.37%);
        }
      `,
    ],
  ],
})
