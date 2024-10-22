/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {boxShadow: {
     'text-light': '0 0 10px rgba(255, 255, 255, 0.9)',  
        'text-dark': '0 0 10px rgba(0, 0, 0, 1.9)', 
    },
    colors: {
      customBlue: '#389de0',
    },},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

