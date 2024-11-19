/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      maxWidth: {
        siteWidth: "1512px",
      },
      colors: {
        'blue1': "#266df1",
        'gray1': "#e9e9e4",
        'blue-light': "#568df4",
        'bright-Orange': "#FF742D",
        'soft-vanilla': "#FFF5D2",
      },
    },
  },
  plugins: [],
}

