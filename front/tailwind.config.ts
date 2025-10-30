import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/organisms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['"Vazirmatn"', "sans-serif"],
      },
      colors: {
        "nemak-green": "#2E8B57",
        "nemak-gold": "#FFD700",
        "nemak-earth": "#8B4513",
        "nemak-warm": "#F4A460",
      },
      boxShadow: {
        image:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      transitionDuration: {
        "200": "200ms",
      },
      scale: {
        "105": "1.05",
      },
    },
  },
  plugins: [],
  prefix: "",
};
export default config;
