/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F6F6F6',
        secondary: '#023246',
        third: '#287094',
        fourth: '#D4D4CE',
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '1024px',
      lg: '1280px',
    },
  },
  plugins: [],
};
