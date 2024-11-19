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
    },
  },
  plugins: [],
}

