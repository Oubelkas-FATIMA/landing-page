/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
    fontFamily: {
      poppins : ["Poppins", "sans-serif"],

    },
    backgroundImage: {
      'bionix' : "url('/src/assets/Background.png')",
      'back1' : "url('/src/assets/back1.png')",
      'backk' : "url('/src/assets/backk.jpeg')",
      'bac1' : "url('/src/assets/bac1.jpeg')",
      'background' : "url('/src/assets/background1.png')",
      'plante' : "url('/src/assets/backgroundd.jpg')",

      'image1' : "url('/src/assets/image1.jpg')",
      'image2' : "url('/src/assets/image2.jpg')",
      'image3' : "url('/src/assets/image3.jpg')",
    },
  },
  plugins: [],
}

