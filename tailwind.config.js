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
        'black2': "#484848",
        'black3': "#0a0a0a",
        'blue1': "#1361f0",
        'blue2': "#4381f3",
        'blue-light': "#568df4",
        'gray1': "#f0f4f6",
        'gray2': "#d0d5dd",
        'gray3': "#f9f9f9",
        'gray4': "#d6d6d6",
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

