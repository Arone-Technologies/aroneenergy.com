module.exports = {
  purge: ["./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "big-img": "37.5rem",
      },
      fontSize: {
        coinbase: "3.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
