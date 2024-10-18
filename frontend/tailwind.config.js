/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-red": "#ff0055",
        "gray-color": "#292929",
      },
      zIndex: {
        5: "5",
        100: "100",
      },
      width: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
