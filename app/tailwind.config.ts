import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#594797",
          hover: "#43356F",
        },
        accent: "#914594",
        sidebar: {
          bg: "#1A1030",
          active: "#2E2560",
          text: "#C6BADF",
        },
        app: "#F7F6FB",
        surface: "#FFFFFF",
        line: "#E3DEEF",
        ink: {
          DEFAULT: "#17122A",
          secondary: "#574C74",
          tertiary: "#6E6488",
        },
        success: { DEFAULT: "#0D6B45", bg: "#E3F3EB" },
        warning: { DEFAULT: "#8A5300", bg: "#FCF0DC" },
        danger: { DEFAULT: "#A3271E", bg: "#FCEAE7" },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
