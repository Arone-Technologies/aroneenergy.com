/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      lato: ['lato', 'sans-serif'],
      myFont: ['DM Sans', 'sans-serif']
    },
    screens: {
      'xss': '200px',
      'xs': '320px',
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

