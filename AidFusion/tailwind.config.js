/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#fff5dc',
        secondary: '#8b0000',
        accent: '#ffd700',
        button: '#008000', 
        txtPrimary: '#333333',
        txtSecondary: '#777777',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        // Primary fonts
        lato: ['Lato', 'sans'],
        opensans: ['Open Sans', 'sans'],
        quicksand: ['Quicksand', 'sans'],
        // Secondary fonts
        dancingscript: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}