/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Primary": "#3D639D",
        "Success": "#00C48C",
        "Gray": "#BBC2D0",
        "White": "#FFF",
        "BgColor": "#F3F5F8",
        "Blue": "#3855B3",
        "Orange": "#FF6422",
        "BgOrange": "#FFBD95",
        "BgRed": "#FF647C",
        "Purple": "#A2AEDB",
        "Pink": "#F39DBD",
        "Green": "#AAD9AC"
      },
      borderRadius:{
        "thirty": "30px"
      }
    },
  },
  plugins: [],
}
