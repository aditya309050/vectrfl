/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#D0E1EB",
          dark: "#050419",
          blue: "#0F32DC",
          blueHover: "#284ae8",
          light: "#FCFCFC",
          muted: "#6B7280",
          card: "rgba(255, 255, 255, 0.65)",
          cardDark: "rgba(5, 4, 25, 0.75)",
          glassBorder: "rgba(255, 255, 255, 0.35)",
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
}
