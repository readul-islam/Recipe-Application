/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {colors: {
      primary:{
        light:"#FB9300",
        default:"#F68712"
      },
      secondary:{
        default:"#FEF5EC",
        light:"#fffcf9"
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
      },
      sidebarText:{
        active:"#50466C",
        inactive:"#C1BBD5"
      },
      "gary":{
        light:"#f9fafb"
      },
      bannerBg:{
        default:"#F9F9F9"
      }
    }},
  },
  plugins: [],
}