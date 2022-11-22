/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-economy",
    "bg-education",
    "bg-news",
    "bg-design",
    "bg-lifestyle",
    "bg-marketing",
    "bg-culture",
    "bg-work",
    "bg-society",
    "bg-tech",
    "bg-trend",
  ],
  theme: {
    colors: {
      white: "#fff",
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
      boxShadow: {
        "shadow-1":
          "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
        "shadow-2": "0px 16px 20px rgba(229, 229, 229, 0.2)",
        "search": "0px 16px 60px rgba(35, 31, 32, 0.1)",
      },
    },
  },
  plugins: [],
};
