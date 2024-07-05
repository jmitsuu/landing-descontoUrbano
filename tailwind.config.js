/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'title': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'light': '#64ed8d', 
         'medium': '#6aed64', 
         'mediumlight':'#3a683c',
         'heavy':'#1f331e'
      },
    },
  },
  plugins: [],
}

