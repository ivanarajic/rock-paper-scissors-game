/** @type {import('tailwindcss').Config} */

const { transform } = require('framer-motion');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary':
          'radial-gradient(hsl(214, 47%, 23%),hsl(237, 49%, 15%))',
      },

      keyframes: {
        'slide-paper': {
          '0%': { left: '30px', opacity: '0%' },
          '100%': { left: 0, opacity: '100%' },
        },
        'slide-rock': {
          '0%': { bottom: '30px', opacity: '0%' },
          '100%': { bottom: 0, opacity: '100%' },
        },
        'slide-scissors': {
          '0%': { top: '30px', right: '30px', opacity: '0%' },
          '100%': { top: 0, right: 0, opacity: '100%' },
        },
      },
      animation: {
        'slide-paper': 'slide-paper .5s ease-in-out',
        'slide-rock': 'slide-rock .5s ease-in-out',
        'slide-scissors': 'slide-scissors .5s ease-in-out',
      },

      fontFamily: {
        barlow: ['var(--font-barlow)'],
      },
      boxShadow: {
        blue: 'inset 0 5px 6px gray, 0 5px #0d31e3',
        red: 'inset 0 5px 6px gray, 0 5px #a11b34',
        orange: 'inset 0 5px 6px gray, 0 5px #a46e0a',
        'winner-sm':
          '0 5px 0 0 hsl(228, 23.2%, 78%) inset, 0 0 0 75px hsla(100, 100%, 100%, 0.01), 0 0 0 45px hsla(100, 100%, 100%, 0.02), 0 0 0 20px hsla(100, 100%, 100%, 0.03)',
        'winner-lg':
          '0 12px 0 0 hsl(228, 23.2%, 78%) inset, 0 0 0 120px hsla(100, 100%, 100%, 0.01), 0 0 0 80px hsla(100, 100%, 100%, 0.02), 0 0 0 40px hsla(100, 100%, 100%, 0.03)',
      },
    },
    linearBorderGradients: ({ theme }) => ({
      colors: {
        'light-orange': ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
        'light-blue': ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
        'light-red': ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
      },
      background: theme('colors'),
    }),
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
};
