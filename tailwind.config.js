const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'queen-blue': '#5B7FAE',
        'french-blue': '#8FAFD9',
        'max-green': '#708D53',
        'almond': '#FDEAC4',
        'terminal-green': '#488310',
        'terminal-gray': '#333333',
        'terminal-blue': '#3465A4'
      },

      fontFamily: {
        sans: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
