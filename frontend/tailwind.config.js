/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      lato: ["Lato", 'sans-serif'],
      colors: {
        'custom-dark': '#101820',
        'dark-gray': '#515151',
      },
    },},
    
  },
  plugins: [],
}