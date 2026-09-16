/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled straight from the RARE logo
        brand: {
          blue: "#0533B5",
          "blue-dark": "#032585",
          yellow: "#FDC901",
          "yellow-light": "#FFDD55",
        },
        ink: "var(--color-ink)",
        "on-yellow": "#000000",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
      },
      fontFamily: {
        heading: ['"Upheaval"', "sans-serif"],
        sans: [
          '"Archivo"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
