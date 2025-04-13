/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueWedding: "#5eb7c4",
        blueLightWedding: "#096781",
        grayWedding: "#E5E5E5",
        grayLightWedding: "#1f2937",
      },
    },
  },
  plugins: [],
};
