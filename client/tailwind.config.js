/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_bg: "#F6F6F6", //Seasalt
        primary_section: "#F0F6F6", //light green
        primary_element: "#26C499", //Green
        primary_font_light: "#FFFFFF", //White font
        primary_font_dark: "#000000", //Black font
      },
    },
  },
  plugins: [],
};
