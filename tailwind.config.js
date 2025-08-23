/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
