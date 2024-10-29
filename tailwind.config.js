/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-grey': 'rgb(102, 110, 115)'
      }
    },
  },
  plugins: [],
}
