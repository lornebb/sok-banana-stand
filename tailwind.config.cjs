/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'sokHero': "url('./media/img/SOKlarge.png')",
      }
    },
  plugins: [],
}
}
