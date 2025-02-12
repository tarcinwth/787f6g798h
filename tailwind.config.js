import { COLORS } from "./src/config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-primary-light",
    "text-primary-dark",
    "text-secondary-light",
    "text-secondary-dark",
    "text-accent-light",
    "text-accent-dark",
    "text-tertiary-light",
    "text-tertiary-dark",
    // Adicione outras classes que são geradas dinamicamente
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7901FA",
          dark: "#9B4DFF",
        },
        secondary: {
          light: "#FA4534",
          dark: "#FF6B5C",
        },
        accent: {
          light: "#FAB432",
          dark: "#FFD27A",
        },
        tertiary: {
          light: "#34FAB4",
          dark: "#5CFFC6",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
