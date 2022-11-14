/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#f9f9f9",
      primary: {
        100: "#e7f9f2",
        200: "#b6edd9",
        300: "#91e5c7",
        400: "#60d9ae",
        450: "#32d89d",
        500: "#1cb37d",
        600: "#0b8f62",
      },
      gray: {
        50: "#f9f9f9",
        100: "#f0f0f2",
        200: "#c4c5ca",
        300: "#9799a2",
        400: "#52545b",
        500: "#2a2b2f",
        600: "#1f2022",
      },
      economy: "#f34848",
      education: "#f47113",
      news: "#f9c540",
      design: "#db9918",
      lifestyle: "#9fe05e",
      marketing: "#1ae885",
      culture: "#1adbe8",
      work: "#1a79e8",
      society: "#8e5cf9",
      tech: "#d069f4",
      trend: "#f854b6",
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
