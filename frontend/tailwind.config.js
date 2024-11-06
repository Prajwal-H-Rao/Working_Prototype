/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:{
          dark:"#2C3E50",DEFAULT:"#4A6E86"},
        text:"#ECF0F1",
        comment:"#7F8C8D",
        keyword:"#F39C12",
        string:"#1ABC9C",
        function:"#3498DB",
        variable:"#E74C3C",
        class:"#9B59B6",
        number:"#E67E22",
        operator:"#F1C40F"
      }
    },
  },
  plugins: [],
}

