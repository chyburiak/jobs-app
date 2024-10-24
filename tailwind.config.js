/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Open Sans", sans-serif'],
        'app-name': ['"Passion One", sans-serif'],
      },
      container: {
        center: true,
      },
      maxHeight: {
        '40vh': '40vh',
      }
    },
  },
  plugins: [],
}

