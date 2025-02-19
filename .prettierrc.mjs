/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: true,
  jsxSingleQuote: true,
  printWidth: 80,
  quoteProps: "as-needed",
  semi: false,
  singleAttributePerLine: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: "*.stories.{ts,js,tsx,jsx}",
      options: {
        htmlWhitespaceSensitivity: "ignore",
      },
    },
  ],
}
