const { MdHeight } = require('react-icons/md');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '660px',
        // => @media (min-width: 576px) { ... }
      },
      keyframes: {
        textfillfirst: {
          '0%,10%,100%': {
            width: '0%'
          },
          '70%,90%': {
            width: '100%'
          }
        }
      },
      animation: {
        textfillfirst: 'textfillfirst 6s linear infinite',
      },
    },
  },
  plugins: [],
}

