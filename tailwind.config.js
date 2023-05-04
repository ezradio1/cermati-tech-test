/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '960px',
    },
    extend: {
      backgroundImage: {
        'header-and-hero-shot': "url('/src/assets/work-desk__dustin-lee.jpg')",
      },
      colors: {
        blue: '#007bc1',
        'dark-blue': '#004a75',
        orange: '#ff8000',
        'dark-orange': '#cc6600',
        'smoke-grey': '#e5e5e5',
      },
    },
  },
  plugins: [],
};
