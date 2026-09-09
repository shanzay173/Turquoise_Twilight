/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#080808',
        burgundy: '#65000B',
        twilightRed: '#E30A17',
        antiqueGold: '#C9A227',
        ivory: '#F5EBDD',
        sand: '#D8C3A5',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
