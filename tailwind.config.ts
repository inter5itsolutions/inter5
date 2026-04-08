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
        // Dark Blue - #023047
        "dark-blue": "#023047",
        
        // Light Blue - #8ECAE6
        "light-blue": "#8ECAE6",
        
        // Orange - #FB8500
        "brand-orange": "#FB8500",
        
        // Teal Blue - #219EBC
        "teal-blue": "#219EBC",
        
        // Basic neutrals for text and backgrounds
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },

      fontSize: {
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
        "accent-shimmer": "accentShimmer 2s ease infinite",
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
        accentShimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },

      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(2,48,71,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(2,48,71,0.05) 1px, transparent 1px)",
        "primary-gradient": "linear-gradient(135deg, #023047 0%, #219EBC 100%)",
        "secondary-gradient": "linear-gradient(135deg, #8ECAE6 0%, #219EBC 100%)",
        "accent-gradient": "linear-gradient(135deg, #FB8500 0%, #FB8500 100%)",
        "hero-pattern": "radial-gradient(circle at 10% 20%, rgba(251,133,0,0.08) 0%, transparent 50%)",
        "blue-wave": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23023047' fill-opacity='0.05' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
      },

      backgroundSize: {
        grid: "60px 60px",
      },

      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },

      borderWidth: {
        "1": "1px",
      },

      transitionTimingFunction: {
        "brand": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      boxShadow: {
        "accent": "0 4px 14px 0 rgba(251, 133, 0, 0.25)",
        "primary": "0 4px 14px 0 rgba(2, 48, 71, 0.15)",
        "secondary": "0 4px 14px 0 rgba(142, 202, 230, 0.25)",
      },
    },
  },

  plugins: [],
};

export default config;