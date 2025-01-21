import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/hero-mobile.jpg')",
        "hero-laptop": "url('/images/hero-laptop.jpg')",
        "hero-desktop": "url('/images/hero-desktop.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cabinetGrotesk: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
