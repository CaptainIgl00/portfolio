/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
        },
      },
    },
  },
  plugins: [],
} 