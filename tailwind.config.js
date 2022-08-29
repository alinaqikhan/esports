/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'navigation':"#212121",
      "white": "#fff",
      "offwhite":"#d8d8d8",
      "yellow":"#f7c001"
    },
  },
  plugins: [],
}
