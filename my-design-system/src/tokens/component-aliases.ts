import { createSourceRef } from "./metadata.js";
import { radiusPrimitives, shadowPrimitives } from "./primitives.js";
import { semanticTokens } from "./semantic.js";
import type { ComponentAliasToken } from "./types.js";

export const componentAliases = {
  button: {
    primaryBg: { value: semanticTokens.interactive.primary.value, source: createSourceRef("button-primary-bg", "root-colors"), description: "Primary button background" },
    primaryHover: { value: semanticTokens.interactive.primaryHover.value, source: createSourceRef("button-primary-hover", "root-colors"), description: "Primary button hover state" },
    text: { value: semanticTokens.text.inverse.value, source: createSourceRef("button-text", "root-colors"), description: "Primary button text" },
    radius: { value: radiusPrimitives.radiusMd.value, source: createSourceRef("button-radius", "radius"), description: "Default button radius" }
  },
  input: {
    border: { value: semanticTokens.border.default.value, source: createSourceRef("input-border", "border"), description: "Default input border" },
    borderFocus: { value: semanticTokens.interactive.focus.value, source: createSourceRef("input-border-focus", "border"), description: "Input focus border" },
    background: { value: semanticTokens.surface.base.value, source: createSourceRef("input-background", "root-colors"), description: "Input background" },
    radius: { value: radiusPrimitives.radiusMd.value, source: createSourceRef("input-radius", "radius"), description: "Input corner radius" }
  },
  card: {
    background: { value: semanticTokens.surface.base.value, source: createSourceRef("card-background", "root-colors"), description: "Card background surface" },
    border: { value: semanticTokens.border.default.value, source: createSourceRef("card-border", "border"), description: "Card border color" },
    shadow: { value: shadowPrimitives.shadowMd.value, source: createSourceRef("card-shadow", "elevation"), description: "Default card elevation" },
    radius: { value: radiusPrimitives.radiusLg.value, source: createSourceRef("card-radius", "radius"), description: "Card corner radius" }
  },
  badge: {
    background: { value: semanticTokens.surface.subtle.value, source: createSourceRef("badge-background", "root-colors"), description: "Badge background surface" },
    text: { value: semanticTokens.text.secondary.value, source: createSourceRef("badge-text", "root-colors"), description: "Badge text color" },
    radius: { value: radiusPrimitives.radiusSm.value, source: createSourceRef("badge-radius", "radius"), description: "Badge radius" }
  },
  focusRing: {
    color: { value: semanticTokens.interactive.focus.value, source: createSourceRef("focus-ring-color", "border"), description: "Focus ring color" },
    width: { value: "2px", source: createSourceRef("focus-ring-width", "border"), description: "Focus ring width" },
    offset: { value: "2px", source: createSourceRef("focus-ring-offset", "border"), description: "Focus ring offset" }
  }
} as const satisfies Record<string, Record<string, ComponentAliasToken<string>>>;

export const button = componentAliases.button;
export const input = componentAliases.input;
export const card = componentAliases.card;
export const focusRing = componentAliases.focusRing;
