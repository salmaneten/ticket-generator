/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)'
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)'
        }
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800
      },
      fontSize: {
        label: '20px'
      },
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))'
      },
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.1)',
        'lg': '0 0 10px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 10px rgba(0,0,0,0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};