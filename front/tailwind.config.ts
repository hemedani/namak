import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['"Vazir"', "sans-serif"],
      },
      colors: {
        "nemak-green": "#2E8B57",
        "nemak-gold": "#FFD700",
        "nemak-earth": "#8B4513",
        "nemak-warm": "#F4A460",
      },
    },
  },
  plugins: [],
  // Enable RTL support
  prefix: "",
};
export default config;
