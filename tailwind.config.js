/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0D0D0D",
        emerald: {
          light: "#1A7555",
          DEFAULT: "#135D43",
          dark: "#0D4632",
        },
        gold: {
          light: "#E5C86C",
          DEFAULT: "#D4AF37",
          dark: "#A3862A",
        },

        cloud: "#F5F5F7",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "emerald-gold": "linear-gradient(135deg, #2E8B57 0%, #D4AF37 100%)",
      },
    },
  },
  plugins: [],
};
