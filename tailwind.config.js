/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      links: "#9a9a9a",
      bgPrimary: "#121212",
      bgSecondary: "#161a1e",
      textOrange:'#e58e27'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      screens: {
        "2xl": "1619px",
        "1.5xl": "1500px",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
