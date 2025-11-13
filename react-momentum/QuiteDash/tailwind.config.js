/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         openSans: ["'Open Sans'", 'sans-serif'],
      },
      colors:{
        primary:{
          DEFAULT: "#0f1a32",
          700: "#0d1629",
          800: "#0b1220",
          900: "#080e17",
        },
        secondary:{
          DEFAULT: "#F3F4F6",
          100: "#F9FAFB",
          200: "#E5E7EB",
          300: "#D1D5DB",
        }
      }
    },
  },
  plugins: [],
};
