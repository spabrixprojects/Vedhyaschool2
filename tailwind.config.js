/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9f6f0",
        maroon: "#18221b",
        saffron: "#b85a24",
        gold: "#c38a35",
        ink: "#090e0a",
      },
      fontFamily: {
        serif: ["var(--font-italiana)", "var(--font-cormorant)", "serif"],
        display: ["var(--font-cormorant)", "var(--font-italiana)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
