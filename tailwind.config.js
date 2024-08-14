/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#00001B',
        'custom-orange': '#FF5B00',
        'custom-light-gray': '#F4F4F4',
        'custom-cream': '#FFEEE5',
        'custom-gray': '#ACACAC',
        'custom-buttons': '#D9D9D9'
      },
      fontFamily: {
        'urbanist': ['Urbanist', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

