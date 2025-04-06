/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        clean: "#f9f9f9", //white
        primary: "#000000", // Your black color
        secondary: "#404040", // Your gray color
        tertiary: "#f8ad3b", // Your yellow gold color
        // tertiary: "#eadba4", // Your dark color
      },
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Custom text shadow
      },
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"], // Set Proxima Nova as default
      },
    },
  },
  plugins: [],
};
