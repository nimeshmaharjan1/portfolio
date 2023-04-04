/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#693b93',
        'primary-600': '#512F72',
        'primary-400': '#C5A6E2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
