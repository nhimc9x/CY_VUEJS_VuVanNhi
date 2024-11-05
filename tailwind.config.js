/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-+/,
      variants: ['peer-checked'],
    },
    {
      pattern: /text-+/,
      variants: ['has-[:checked]'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#1d2238',
        'secondary': '#262d47',
        'accent': '#e84393',
        'highlight': '#80f0ff',
      }
    },
  },
  plugins: [],
}

