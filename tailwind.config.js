/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cultured': '#f2f7f7',
        'prussian-blue': 'rgba(11, 36, 54, 1)',
        'blue-gray': 'rgba(11, 36, 54, 0.3)',
        'purple-gray': 'rgba(168, 118, 176, 0.3)',
      },
      fontFamily: {
        barlow: ["'Barlow'", 'sans-serif'],
        roboto: ["'Roboto Mono'", 'monospace'],
        tiempos: ["'Test Tiempos Headline'", 'sans-serif'],
      },
      screens: {
        md: '48em',
        lg: '64em',
        xl: '90em',
      },
    },
  },
  plugins: [],
};
