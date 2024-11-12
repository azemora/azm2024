/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#03144b",
        bgfooter: "#1c1c1c",
        custom_yellow: "#ffc27c",
        secondary: "#051233",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gradientStart: '#000212', // Assuming this is the bottom color of your gradient
        gradientEnd: '#3c65bd',   
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))',
        'custom-gradient3': 'linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))',
        'custom-gradient2': 'linear-gradient(to top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
        'custom-image': `url('./src/assets/gamingBackground.png')`,
        'custom-image2' : `url('./src/assets/video.mp4')`,
        'custom-image4' : `url('./src/assets/gamingBackground2.png')`,
        'custom-image3' : `url('./src/assets/gamingBackground_large.png')`,
        'custom-image5' : `url('./src/assets/gamingBackground_large2.png')`

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
  ],

};