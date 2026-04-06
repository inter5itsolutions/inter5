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

        // Navy palette - primary corporate color
        navy: {
          950: "#02070f",  // Deepest navy
          900: "#040d1a",  // Primary dark navy
          800: "#071529",  // Rich navy
          700: "#0a1f3d",  // Medium-dark navy
          600: "#0f2850",  // Medium navy
          500: "#1a3a6e",  // Lighter navy
          400: "#2a4a85",  // Navy with more visibility
          300: "#3d5f9e",  // Soft navy
          200: "#5c7db8",  // Muted navy
          100: "#8aa5d1",  // Light navy tint
        },

        // Gold palette - accent color from logo
        gold: {
          700: "#7A3F00",  // Deep burnt orange (darkest)
          600: "#A65500",  // Dark orange
          500: "#FB8501",  // Primary brand color
          400: "#FC9A2E",  // Bright orange
          300: "#FDB35C",  // Soft orange
          200: "#FEC98A",  // Light orange
          100: "#FEE1B8",  // Very light tint
          50:  "#FFF4E6",  // Soft creamy background
        },

        // Neutral palette for hierarchy
        charcoal: {
          900: "#111111",
          800: "#1a1a1a",
          700: "#2b2b2b",
          600: "#404040",
          500: "#666666",
          400: "#999999",
          300: "#cccccc",
          200: "#e5e5e5",
          100: "#f5f5f5",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },

      fontSize: {
        // Custom heading scale
        "hero": ["5rem", { lineHeight: "1", fontWeight: "900" }],
        "hero-md": ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        "hero-sm": ["3rem", { lineHeight: "1.1", fontWeight: "800" }],
      },

      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.01em",
        widest: "0.25em",
      },

      lineHeight: {
        "tight-heading": "1.1",
        "ultra-tight": "0.95",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "fade-right": "fadeRight 0.5s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
        "gold-shimmer": "goldShimmer 2s ease infinite",
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
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        goldShimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(200,150,12,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,12,0.05) 1px, transparent 1px)",
        "navy-gradient": "linear-gradient(135deg, #040d1a 0%, #071529 50%, #0a1f3d 100%)",
        "gold-gradient": "linear-gradient(135deg, #C8960C 0%, #E8B840 50%, #F0C96A 100%)",
        "hero-pattern": "radial-gradient(circle at 10% 20%, rgba(200,150,12,0.08) 0%, transparent 50%)",
      },

      backgroundSize: {
        grid: "60px 60px",
      },

      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        lg: "8px",
      },

      borderWidth: {
        "1": "1px",
      },

      transitionTimingFunction: {
        "brand": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};

export default config;