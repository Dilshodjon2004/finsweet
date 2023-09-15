/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#2405F2",
        darkBlue: "#282938",
        grey: "#F4F6FC",
        yellow: "#FCD980",
        tintBlue: "#1C1E53",
        accent: "#EEF4FA",
        paleYellow: "#FCD9801A",
        btnPaleYellow: "#FDE4A6",
        btnPaleBlue: "#535460",
        btnTextColorDarkBlue: "#1B1C2A",
        btnTextColorBlue: "#1B1C2B",
        btnTextColorPrimary: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "280px",
      ss: "540px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
