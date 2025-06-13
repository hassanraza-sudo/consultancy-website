/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#1a365d',
        'sky-blue': '#3b82f6',
        'light-gold': '#fcd34d',
        'soft-green': '#34d399'
      }
    },
  },
  plugins: [],
};