import type { Config } from "tailwindcss";

import { morphTailwindPlugin } from "./src/tokens/tailwind-plugin.js";
import { morphTailwindTheme } from "./src/tokens/tailwind-theme.js";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./stories/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: morphTailwindTheme
  },
  plugins: [morphTailwindPlugin]
};

export default config;
