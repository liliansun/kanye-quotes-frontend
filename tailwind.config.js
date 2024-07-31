/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  darkMode: false,
  container: {
    center: true
  },
  extend: {
    colors: {
      'primary': {
        100: '#D8F0F2',
        200: '#BAE4E8',
        300: '#9BD8DD',
        400: '#7DCCD3',
        500: '#5EC0C9',
        600: '#131720',
        700: '#2E8189',
        800: '#205A5F',
        900: '#123235'
      }
    },
    maxWidth: {
      xxs: '10rem'
    },
    height: {
      20: '20px',
      256: '64rem',
      96: '24rem'
    },
    minWidth: {
      100: '200px'
    },
    maxHeight: {
      96: '24rem'
    },
    fontFamily: {
      body: '"Open Sans"',
      fontAwesome: '"Font Awesome 5 Free"'
    },
    flex: {
      2: '2 2 0%',
      3: '3 3 0%'
    },
    inset: {
      full: '100%'
    },
  },
  plugins: [],
}

