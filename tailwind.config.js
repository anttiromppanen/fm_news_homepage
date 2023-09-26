/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "0.9375rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        userSoftOrange: "hsl(35, 77%, 62%)",
        userSoftRed: "hsl(5, 85%, 63%)",
        userOffWhite: "hsl(36, 100%, 99%)",
        userGrayishBlue: "hsl(233, 8%, 79%)",
        userDarkGrayishBlue: "hsl(236, 13%, 42%)",
        userVeryDarkBlue: "hsl(240, 100%, 5%)",
        userMainBgColor: "#fefdf9",
        userMobileMenuBg: "hsla(0, 100%, 0%, 0.5)",
      },
    },
  },
  plugins: [],
}