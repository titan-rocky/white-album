/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      fira: ['"Fira Code"'],
      start2p: ['"Press Start 2P"'],
      arcade: ["retrogam", "monospace"],
      upheavel: ["upheavel"],
      alstoria: ["alstoria"],
    },
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
      green: "#3a5d42",
    },
    extend: {
      fontFamily: {},
      dropShadow: {
        gf: "-3px 3px 0px #7f7e7e",
      },
      backgroundImage: {
        gfw: "radial-gradient(red 0% , lred 25% , org 50% , lbl 75% , dbl 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
