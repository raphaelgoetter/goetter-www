/** @type {import("prettier").Config} */
export default {
  semi: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  singleAttributePerLine: true,
  printWidth: 80,
  jsxSingleQuote: true,
  plugins: ["prettier-plugin-css-order"],
  cssDeclarationSorterOrder: "smacss",
  overrides: [
    {
      files: "*.stories.{ts,js,tsx,jsx}",
      options: {
        htmlWhitespaceSensitivity: "ignore",
      },
    },
  ],
};
