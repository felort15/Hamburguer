/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#f44336',
          light: '#ff7961',
          dark: '#ba000d',
        },
        secondary: {
          main: '#ffa726',
          light: '#ffd95b',
          dark: '#c77800',
        },
      },
    },
  },
  plugins: [],
} 