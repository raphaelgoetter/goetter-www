import "./assets/styles.css"
import "virtual:uno.css"

let currentTheme = "light"

const button = document.querySelector(".theme-switcher") // Use the correct selector
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
const storedTheme = localStorage.getItem("theme-preference")
if (storedTheme) {
  currentTheme = storedTheme
} else if (prefersDark.matches) {
  currentTheme = "dark"
}

if (button) {
  button.addEventListener("click", function (event) {
    currentTheme =
      document.documentElement.getAttribute("data-theme-preference") === "dark"
        ? "light"
        : "dark"
    setTheme(currentTheme)
  })
} else {
  console.warn("Theme toggle button not found")
}

prefersDark.addEventListener("change", function (event) {
  currentTheme = event.matches ? "dark" : "light"
  setTheme(currentTheme)
})
function setTheme(theme: string) {
  document.documentElement.setAttribute("data-theme-preference", theme)
  localStorage.setItem("theme-preference", theme)
  if (button) {
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false")
  }
}

setTheme(currentTheme)
