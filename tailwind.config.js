/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '501px',
        'lg-md': '1199px', // Custom size between `lg` and `xl`
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
      scale: {
        '103': '1.03', 
        '102': '1.02',
        '101': '1.01',
      },
    },
  },
  plugins: [],
}

