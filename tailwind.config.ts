import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",

        navy: {
          900: "#040d1a",
          800: "#071529",
          700: "#0a1f3d",
          600: "#0f2850",
          500: "#1a3a6e",
        },

        gold: {
          500: "#C8960C",
          400: "#e8b840",
          300: "#f0c96a",
          600: "#a87a08",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      lineHeight: {
        "tight-heading": "1.1",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(200,150,12,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,12,0.05) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "60px 60px",
      },

      borderRadius: {
        none: "0px",
      },
    },
  },

  plugins: [],
};

export default config;