/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#00B2FF",
      },
      fontFamily: {
        main: ["Bebas Neue", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
    },
    plugins: [],
  }
};