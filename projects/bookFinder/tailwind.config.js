/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",   
     "./src/nextChapter/**/*.html",    
    "./src/jsFiles/**/*.{js,ts}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};