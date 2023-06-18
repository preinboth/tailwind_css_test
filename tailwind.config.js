/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
    ]},
  plugins: [
    require("daisyui"), 
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

    ],
}
