import type { Config } from "tailwindcss";

import { morphTailwindTheme } from "./src/tokens/tailwind-theme.js";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./stories/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: morphTailwindTheme
  }
};

export default config;
