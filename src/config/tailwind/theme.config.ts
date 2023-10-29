import tailwindStandartColors from "tailwindcss/colors";

export const colors = {
  ...tailwindStandartColors,
  background: "#090A0A",
  "bg-light": "#171819",
  primary: "#2662F0",
  logo: "#9EA7AC",
  inactive: "#636D73",
  avatar: "#CCCCCC",
  emergency: "#414D55",
  "error-color": "#F05568",

  warning: "#F1D399",
};
export const theme = {
  colors,
  extend: {
    fontSize: {
      xss: "0.625rem",
      xs: "0.7rem",
      sm: "0.82rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.22rem",
      "1.25xl": "1.36rem",
      "1.5xl": "1.5rem",
      "2xl": "2rem",
      "3xl": "2.155rem",
      "4xl": "2.58rem",
      "5xl": "3.45rem",
      "6xl": "4.3rem",
      "7xl": "5.17rem",
      "8xl": "6.9rem",
      "9xl": "9.2rem",
    },
    fontFamily: {
      roboto: "var(--font-roboto)",
      rubik: "var(--font-rubik)",
    },
    keyframes: {
      animationOpacity: {
        from: { opacity: "0.2" },
        to: { opacity: "1" },
      },
      scaleIn: {
        "0%": {
          opacity: "0",
          transform: "scale(0.9)",
        },
        "50%": {
          opacity: "0.3",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
    },
    animation: {
      opacity: "animationOpacity 0.7s ease-in-out",
      scaleIn: "scaleIn .35s ease-in-out",
    },
    gridTemplateColumns: {
      // Простая сетка из 16 столбцов
      16: "repeat(16, minmax(0, 1fr))",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    aspectRatio: {
      "4/3": "16 / 11",
    },
  },
};