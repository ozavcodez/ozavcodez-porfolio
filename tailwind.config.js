/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // colors
      colors:{
        bg: '#140D27',
        border: '#FFFFFF2E',
        main:'#D434FE',
        submain:'#903AFF',
        graywhite:'#FFFFFB',
        pinkpur: '#FE34B9',
        blues: '#903AFF'
      },
      screens: {
        'xs': '375px',
        // ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
