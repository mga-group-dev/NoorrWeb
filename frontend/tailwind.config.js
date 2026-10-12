/** @type {import('tailwindcss').Config} */
module.exports = {
  // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C9A45C",
        ink: "#050505",
        charcoal: "#111111",
        offwhite: "#F5F5F0",
      },
    },
  },
  plugins: [],
};
