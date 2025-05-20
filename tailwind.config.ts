import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wave-slow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-25%) translateY(10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "wave-medium": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(25%) translateY(-10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "wave-fast": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-20%) translateY(5px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "float-slow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(100px) translateY(-15px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "float-medium": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-80px) translateY(10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "float-fast": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(60px) translateY(-20px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave-slow": "wave-slow 8s ease-in-out infinite",
        "wave-medium": "wave-medium 6s ease-in-out infinite",
        "wave-fast": "wave-fast 4s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "float-medium": "float-medium 10s ease-in-out infinite",
        "float-fast": "float-fast 8s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 3s linear infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
