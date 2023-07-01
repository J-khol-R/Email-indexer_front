/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '3vw': '3vw',
        '10vw': '10vw',
        '55vw': '55vw',
        '40vw': '40vw',
        '70vw': '70vw',
      },
      height: {
        '3vw': '3vw',
        '10vw': '10vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '80vh': '80vh',
      },
      fill:{
        'red-pink': 'rgb(231, 47, 111)'
      },
      colors:{
        'red-pink': 'rgb(231, 47, 111)',
        'darkBg': '#1a2029'
      }
    },
  },
  plugins: [],
}

