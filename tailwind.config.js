/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled straight from the RARE logo
        brand: {
          blue: '#0533B5',
          'blue-dark': '#032585',
          yellow: '#FDC901',
          'yellow-light': '#FFDD55',
        },
        ink: '#000000',
        muted: '#5F6470',
        surface: '#F0F1F4',
        line: '#E3E5EA',
      },
      fontFamily: {
        sans: ['"Archivo"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
