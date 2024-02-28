import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      screens: {
        xxl: "1440px",
      },
      colors: {
        "custom-red": "#7A0000",
        "custom-brightred": "#E72B1E",
        "custom-black": "#121212",
        "custom-offwhite": "#EBE8E8",
        "custom-white": "#F4F4F4",
        "custom-gray": "#333333",
        "custom-lightgray": "#BDBDBD",
        "custom-subscribe":"#EFE8E8",
        "custom-green": "#00FF00",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "100px": "100px",
        "90px": "90px",
        "54px": "54px",
      },
      fontSize: {
        "32px": ["32px", "32px"],
        "28px": ["28px", "28px"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
