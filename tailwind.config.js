/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'traslateX(0)' },
          '100%': { transform: 'traslateX(-100%)' },

        }
      },
      animation: {
        slide: 'slide 35s ease-in-out linear infinite',
      },
    },
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'min-lg': '942px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

