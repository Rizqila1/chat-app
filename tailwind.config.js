/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        textblue: "#2A7FFF",
        palmblue: "#C2DBFF",
      },
      fontFamily: {
        sfProFont: ["SF Pro Display", "sans"],
      },
    },
  },
  plugins: [],
};
