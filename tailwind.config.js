/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000",
      blue: "#1d428a",
      orange: "#e56043",
      red: "red",
      sectionBg: "#f6f9f9",
      gray: "#959595",
      iconBorder:"#2093CA"
    },
    backgroundImage: {
      "footer-bg-1": "url('/common/bg_footer_1.png')",
      "footer-bg-2": "url('/common/bg_footer_2.png')",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
