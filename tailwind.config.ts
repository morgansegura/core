import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const capitalizeFirst = plugin(function ({ addUtilities }: unknown) {
  const newUtilities = {
    ".capitalize-first:first-letter": {
      textTransform: "uppercase",
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--fontsans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      maxWidth: {
        "8xl": "1536px",
      },
      colors: {
        primary: "#FF7270",
        "primary-dark": "#ff4e4b",
        "primary-light": "#ff9c9b",
        secondary: "#4CFFF2",
        "secondary-dark": "#00e8d7",
        "secondary-light": "#c9fffb",
        tertiary: "#FEF392",
        "tertiary-dark": "#feef6a",
        "tertiary-light": "#fffad3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [capitalizeFirst, require("@tailwindcss/typography")],
};
export default config;
