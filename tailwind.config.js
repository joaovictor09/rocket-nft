/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily:{
      'sans': ['Montserrat', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        'background': "url(/src/assets/background.png)"
      },
      colors: {
        "backgroundcolor": "#0e0e0e",
        "logo": "#ff5b50",
        "card": "#252525",
        "subtitle-color": "#5a5757",
        "input": "#0D0D0D"
      }
    },
  },
  plugins: [],
}
