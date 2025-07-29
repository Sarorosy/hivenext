/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c2421",   // Deep forest green
        secondary: "#4e624d", // Muted olive
        accent: "#e5daca",    // Cream/beige
        darkBrown: "#34160e", // Rich brown
        lightGray: "#d0cdca", // Light stone
        pastel : '#FCFAEE', //pastel White
      },
      fontFamily: {
        romantica: ['Italianno', 'cursive'],
        itali: ['Italiana', 'static'],
        elegance: ['Dancing Script', 'cursive'],
        serifStyle: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
