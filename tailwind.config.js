/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'return': "url('/public/return.svg')",
      'game-over': "url('/public/images/game-over.gif')",
    },
  },
  plugins: [],
}
