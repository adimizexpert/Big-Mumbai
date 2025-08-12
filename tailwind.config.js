/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
        },
        secondary: {
          500: '#22c55e',
          600: '#16a34a',
        }
      }
    },
  },
  plugins: [],
}
