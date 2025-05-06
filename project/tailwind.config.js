/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue
        secondary: '#EC4899', // pink
        highlight: '#FBBF24', // yellow
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
