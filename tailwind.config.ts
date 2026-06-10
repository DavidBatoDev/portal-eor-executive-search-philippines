import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#101828", 700: "#1B2638", 900: "#0B111E" },
        gold: { DEFAULT: "#D9A437", soft: "#EFD267", deep: "#BB8A28" },
        cream: "#F9F4E8",
        charcoal: "#1F2937",
        body: "#475467", // default body text
        border: "#E4E7EC",
        soft: "#F7F7F4", // soft section background
        // muted supporting accents — use sparingly
        teal: "#2F8F8A",
        copper: "#B86B2B",
        blue: "#1E3A5F",
        // tints for soft fills
        "gold-tint": "#FBF4E2",
        "teal-tint": "#EAF3F2",
        "copper-tint": "#F6EDE4",
      },
      fontFamily: {
        head: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "16px",
        lg: "24px",
      },
      maxWidth: {
        container: "1300px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.06)",
        DEFAULT:
          "0 4px 12px rgba(16,24,40,.05), 0 12px 28px rgba(16,24,40,.07)",
        lg: "0 18px 50px rgba(16,24,40,.12), 0 6px 16px rgba(16,24,40,.06)",
        gold: "0 12px 28px rgba(217,164,55,.28)",
      },
    },
  },
  plugins: [],
};

export default config;
