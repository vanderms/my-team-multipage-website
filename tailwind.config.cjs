/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: "22.5rem",
      md: "42.5rem",
      xl: "70rem"
    },

    colors: {
      "primary": "var(--primary)",
      "secondary": "var(--secondary)",
      "primary-300": "var(--primary-300)",
      "primary-500": "var(--primary-500)",
      "primary-700": "var(--primary-700)",
      "neutral-50": "var(--neutral-50)",
      "neutral-800": "var(--neutral-800)",
      "neutral-850": "var(--neutral-850)",
      "transparent": "transparent"
    },

    extend: {},
  },
  plugins: [],
}