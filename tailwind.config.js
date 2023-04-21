/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      tan: "#ffffff",
      white: "#F1EFE5",
      lgray: "#bebfbe",
      gray: "#7f7e7e",
      dgray: "#414140",
      black: "#1c1c1c",
      lbl: "#92d2bc",
      bl: "#089397",
      dbl: "#015e71",
      ylw: "#ec9b01",
      org: "#ca6702",
      pur: "#9c2326",
      red: "#b12113",
      lred: "#ba3e02",
    },
    extend: {
      fontFamily: {
        fira: ['"Fira Code"'],
        start2p: ['"Press Start 2P"'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
