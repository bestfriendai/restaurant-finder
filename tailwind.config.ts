import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00ffff",
          hover: "#00cccc",
        },
        secondary: {
          DEFAULT: "#ff00ff",
          hover: "#cc00cc",
        },
        accent: {
          DEFAULT: "#9900ff",
          hover: "#7700cc",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#0a0a0f",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#00ffff",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#ff00ff",
            foreground: "#000000",
          },
        },
      },
    },
  })],
} satisfies Config;

