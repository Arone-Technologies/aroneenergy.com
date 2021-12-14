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
      animation: {
        fade: "fadeOut 2s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  variants: {
    extend: { grayscale: ["hover", "focus"] },
  },
  plugins: [],
};
