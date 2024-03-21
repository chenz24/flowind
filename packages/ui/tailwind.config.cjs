/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@flowind/ui-preset")],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
}
