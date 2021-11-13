const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
        spacing: {
            128: '32rem',
        },
        colors: {
          trueGray: colors.trueGray
        }
    },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
