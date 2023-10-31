/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Red: 'hsl(0, 100%, 74%)',
      Green: 'hsl(154, 59%, 51%)',
      Blue: 'hsl(248, 32%, 49%)',
      DarkBlue: 'hsl(249, 10%, 26%) ',
      GrayishBlue: 'hsl(246, 25%, 77%)',
    },
    extend: {
    },
    fontFamily: {
      Poppins: ['Poppins']
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}

