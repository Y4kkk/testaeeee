import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#070707",
        elevated: "#0C0C0C",
        surface: "#121212",
        primary: "#F4F4F0",
        muted: "#8E8E93",
        dim: "#78787E",
        emeraldGlow: "#2E5A36",
        vermilion: "#FF3B00",
        linkedin: "#0A66C2",
        paper: "#EAE8E1",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;