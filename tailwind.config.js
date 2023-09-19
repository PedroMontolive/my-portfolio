/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['Bebas Neue', 'sans'],
        roboto: ['Roboto', 'sans'],
        montserrat: ['Montserrat', 'sans'],
      }
    },
  },
  plugins: [],
}