/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary:{
        light:"#FB9300",
        default:"#F68712"
      },
      secondary:{
        default:"#FEF5EC",
      },
      accent:{
        default:"#F9F9F9",
        light:"#FAF9FB"
      },
      sideBarText:{
        default:"#2C2151",
        light:"#B9B2D1"
      },
      heighLight:{
        focus:"#FF7733"
      }
    },
    extend: {},
  },
  plugins: [],
}