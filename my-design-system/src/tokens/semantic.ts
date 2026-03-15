import { createSourceRef } from "./metadata.js";
import { colorPrimitives, gridPrimitives, shadowPrimitives } from "./primitives.js";
import type { SemanticToken } from "./types.js";

export const semanticTokens = {
  surface: {
    base: { value: colorPrimitives.white.value, source: createSourceRef("--color-bg-base", "root-colors"), description: "Base page background" },
    subtle: { value: colorPrimitives.creamWarm.value, source: createSourceRef("--color-bg-subtle", "root-colors"), description: "Soft background surface" },
    muted: { value: colorPrimitives.neutral50.value, source: createSourceRef("--color-neutral-50", "root-colors"), description: "Muted canvas surface" }
  },
  text: {
    primary: { value: colorPrimitives.neutral800.value, source: createSourceRef("--color-text-primary", "root-colors"), description: "Primary body and heading text" },
    secondary: { value: colorPrimitives.neutral500.value, source: createSourceRef("--color-text-secondary", "root-colors"), description: "Secondary support text" },
    muted: { value: colorPrimitives.neutral400.value, source: createSourceRef("--color-text-muted", "root-colors"), description: "Muted helper text" },
    inverse: { value: colorPrimitives.white.value, source: createSourceRef("--color-white", "root-colors"), description: "Text on dark surfaces" }
  },
  border: {
    default: { value: colorPrimitives.neutral200.value, source: createSourceRef("--color-border-default", "root-colors"), description: "Default card and input borders" },
    subtle: { value: colorPrimitives.neutral100.value, source: createSourceRef("--color-border-subtle", "root-colors"), description: "Subtle separators and row lines" },
    emphasis: { value: colorPrimitives.roseDeep.value, source: createSourceRef("--color-rose-deep", "border"), description: "Selected and highlighted borders" }
  },
  interactive: {
    primary: { value: colorPrimitives.roseBlush.value, source: createSourceRef("--color-primary", "root-colors"), description: "Primary action fill" },
    primaryHover: { value: colorPrimitives.roseDeep.value, source: createSourceRef("--color-primary-hover", "root-colors"), description: "Primary hover and active fill" },
    accent: { value: colorPrimitives.sageMid.value, source: createSourceRef("--color-accent", "root-colors"), description: "Supporting highlight and tag color" },
    focus: { value: colorPrimitives.roseBlush.value, source: createSourceRef("--color-primary", "border"), description: "Focus ring color" }
  },
  feedback: {
    success: { value: colorPrimitives.success.value, source: createSourceRef("--color-success", "root-colors"), description: "Success states" },
    warning: { value: colorPrimitives.warning.value, source: createSourceRef("--color-warning", "root-colors"), description: "Warning states" },
    error: { value: colorPrimitives.error.value, source: createSourceRef("--color-error", "root-colors"), description: "Error states" },
    info: { value: colorPrimitives.info.value, source: createSourceRef("--color-info", "root-colors"), description: "Informational states" }
  },
  elevation: {
    card: { value: shadowPrimitives.shadowMd.value, source: createSourceRef("--shadow-md", "elevation"), description: "Default card elevation" },
    overlay: { value: shadowPrimitives.shadowXl.value, source: createSourceRef("--shadow-xl", "elevation"), description: "Modal and overlay elevation" }
  },
  layout: {
    maxWidth: { value: String(gridPrimitives.container2xl.value), source: createSourceRef("--container-2xl", "grid"), description: "Max page width" },
    desktopColumns: { value: String(gridPrimitives.gridColsDesktop.value), source: createSourceRef("--grid-cols-desktop", "grid"), description: "Desktop column count" },
    tabletColumns: { value: String(gridPrimitives.gridColsTablet.value), source: createSourceRef("--grid-cols-tablet", "grid"), description: "Tablet column count" },
    mobileColumns: { value: String(gridPrimitives.gridColsMobile.value), source: createSourceRef("--grid-cols-mobile", "grid"), description: "Mobile column count" }
  }
} as const satisfies Record<string, Record<string, SemanticToken<string>>>;

export const surface = semanticTokens.surface;
export const textPrimary = semanticTokens.text.primary;
export const borderDefault = semanticTokens.border.default;
