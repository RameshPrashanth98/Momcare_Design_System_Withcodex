export * from "./types.js";
export * from "./metadata.js";
export { primitives } from "./primitives.js";
export { semanticTokens } from "./semantic.js";
export { componentAliases } from "./component-aliases.js";
export { typographyTokens } from "./typography.js";
export { morphTailwindTheme } from "./tailwind-theme.js";
export { morphTailwindPlugin } from "./tailwind-plugin.js";

export const tokenLayers = {
  primitive: "primitive",
  semantic: "semantic",
  componentAlias: "componentAlias"
} as const;
