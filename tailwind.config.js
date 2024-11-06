/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#131929',
        'secondary': '#202938',
        'third': '#373f52',
        'text-color': '#aeb5bb',
        'highlight': '#258885',
      }
    },
  },
  plugins: [],
}

