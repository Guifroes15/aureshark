import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#146B9C",
          hover: "#0F5478",
        },
        accent: "#2AA8DE",
        sidebar: {
          bg: "#FFFFFF",
          active: "#E7F2FC",
          text: "#5B6B7C",
        },
        app: "#F5F9FC",
        surface: "#FFFFFF",
        line: "#E2E8F0",
        ink: {
          DEFAULT: "#101826",
          secondary: "#48566A",
          tertiary: "#6B7A8C",
        },
        tint: { DEFAULT: "#E7F2FC", fg: "#0B3C63" },
        success: { DEFAULT: "#0D6B45", bg: "#E3F3EB" },
        warning: { DEFAULT: "#8A5300", bg: "#FCF0DC" },
        danger: { DEFAULT: "#A3271E", bg: "#FCEAE7" },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
