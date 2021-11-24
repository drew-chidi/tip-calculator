module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    placeholderColor: {
      primary: "hsl(172, 67%, 45%)",
      secondary: "var(--dark-grayish-cyan-1)",
    },

    borderColor: (theme) => ({
      DEFAULT: theme("#26c0ab", "currentColor"),
      primary: "#26c0ab",
    }),
    extend: {
      backgroundColor: {
        skin: {
          active: "var(--color-button-active)",
          fill: "var(--color-button-primary)",
          input: "var(--color-input-fill)",
          main: "var(--color-container-fill)",
          inactive: "var(--dark-grayish-cyan-1)",
          hover: "hsl(185, 41%, 84%)",
        },
      },
      textColor: {
        skin: {
          main: "var(--dark-grayish-cyan-1)",
          sub: "var(--dark-grayish-cyan-2)",
          active: "var(--color-button-active)",
          primary: "var(--color-button-primary)",
          secondary: "var(--color-input-fill)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
