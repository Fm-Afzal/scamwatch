/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        shadow1: '0px 0px 10px 0px rgba(191, 191, 191, 0.5)',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        26: "1.625rem",
        44: "2.75rem",
      },
      maxWidth: {
        siteWidth: "1336px",
      },
      colors: {
        'black': "#344054",
        'blue1': "#266df1",
        'gray1': "#f0f4f6",
        'blue-light': "#568df4",
        'bright-Orange': "#FF742D",
        'soft-vanilla': "#FFF5D2",
      },
      padding: {
        30: "30px",
        50: "50px",
      },
      lineHeight: {
        '22': '1.375rem',
        '32': '2rem',
      },
      letterSpacing: {
        '1.5': '0.09375rem',
      },
    },
  },
  plugins: [],
}

