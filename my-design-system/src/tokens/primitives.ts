import { createSourceRef } from "./metadata.js";
import type { PrimitiveToken } from "./types.js";

export const colorPrimitives = {
  roseBlush: { value: "#E8A4B0", source: createSourceRef("--color-rose-blush", "root-colors") },
  rosePetal: { value: "#F2C4CE", source: createSourceRef("--color-rose-petal", "root-colors") },
  roseMist: { value: "#FAE8EC", source: createSourceRef("--color-rose-mist", "root-colors") },
  roseDeep: { value: "#C4697A", source: createSourceRef("--color-rose-deep", "root-colors") },
  roseDark: { value: "#8B3A4A", source: createSourceRef("--color-rose-dark", "root-colors") },
  creamWarm: { value: "#FDF5F0", source: createSourceRef("--color-cream-warm", "root-colors") },
  creamSoft: { value: "#F9EDE8", source: createSourceRef("--color-cream-soft", "root-colors") },
  creamMid: { value: "#EFD9D0", source: createSourceRef("--color-cream-mid", "root-colors") },
  sageLight: { value: "#D6E4DC", source: createSourceRef("--color-sage-light", "root-colors") },
  sageMid: { value: "#A8C5B2", source: createSourceRef("--color-sage-mid", "root-colors") },
  sageDeep: { value: "#6B9E7E", source: createSourceRef("--color-sage-deep", "root-colors") },
  neutral50: { value: "#FAFAFA", source: createSourceRef("--color-neutral-50", "root-colors") },
  neutral100: { value: "#F5F5F5", source: createSourceRef("--color-neutral-100", "root-colors") },
  neutral200: { value: "#E8E8E8", source: createSourceRef("--color-neutral-200", "root-colors") },
  neutral300: { value: "#D4D4D4", source: createSourceRef("--color-neutral-300", "root-colors") },
  neutral400: { value: "#A8A8A8", source: createSourceRef("--color-neutral-400", "root-colors") },
  neutral500: { value: "#737373", source: createSourceRef("--color-neutral-500", "root-colors") },
  neutral600: { value: "#525252", source: createSourceRef("--color-neutral-600", "root-colors") },
  neutral700: { value: "#3D3D3D", source: createSourceRef("--color-neutral-700", "root-colors") },
  neutral800: { value: "#262626", source: createSourceRef("--color-neutral-800", "root-colors") },
  neutral900: { value: "#171717", source: createSourceRef("--color-neutral-900", "root-colors") },
  white: { value: "#FFFFFF", source: createSourceRef("--color-white", "root-colors") },
  black: { value: "#0F0F0F", source: createSourceRef("--color-black", "root-colors") },
  success: { value: "#6BAF7E", source: createSourceRef("--color-success", "root-colors") },
  warning: { value: "#D4A254", source: createSourceRef("--color-warning", "root-colors") },
  error: { value: "#C95C5C", source: createSourceRef("--color-error", "root-colors") },
  info: { value: "#6B8FB5", source: createSourceRef("--color-info", "root-colors") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const fontFamilyPrimitives = {
  display: {
    value: '"Cormorant Garamond", Georgia, serif',
    source: createSourceRef("--font-display", "typography", true, "Brand wordmark and display face are marked for brand-guideline verification in the source.")
  },
  body: {
    value: '"DM Sans", system-ui, sans-serif',
    source: createSourceRef("--font-body", "typography", true, "Body/UI typography is marked for brand-guideline verification in the source token table.")
  },
  mono: {
    value: '"DM Mono", "Courier New", monospace',
    source: createSourceRef("--font-mono", "typography")
  }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const fontSizePrimitives = {
  textXs: { value: "0.75rem", source: createSourceRef("--text-xs", "typography") },
  textSm: { value: "0.875rem", source: createSourceRef("--text-sm", "typography") },
  textBase: { value: "1rem", source: createSourceRef("--text-base", "typography") },
  textMd: { value: "1.125rem", source: createSourceRef("--text-md", "typography") },
  textLg: { value: "1.25rem", source: createSourceRef("--text-lg", "typography") },
  textXl: { value: "1.5rem", source: createSourceRef("--text-xl", "typography") },
  text2xl: { value: "1.875rem", source: createSourceRef("--text-2xl", "typography") },
  text3xl: { value: "2.25rem", source: createSourceRef("--text-3xl", "typography") },
  text4xl: { value: "3rem", source: createSourceRef("--text-4xl", "typography") },
  text5xl: { value: "3.75rem", source: createSourceRef("--text-5xl", "typography") },
  text6xl: { value: "4.5rem", source: createSourceRef("--text-6xl", "typography") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const lineHeightPrimitives = {
  tight: { value: 1.2, source: createSourceRef("--leading-tight", "typography") },
  snug: { value: 1.35, source: createSourceRef("--leading-snug", "typography") },
  normal: { value: 1.5, source: createSourceRef("--leading-normal", "typography") },
  relaxed: { value: 1.65, source: createSourceRef("--leading-relaxed", "typography") },
  loose: { value: 2, source: createSourceRef("--leading-loose", "typography") }
} as const satisfies Record<string, PrimitiveToken<number>>;

export const trackingPrimitives = {
  tight: { value: "-0.02em", source: createSourceRef("--tracking-tight", "typography") },
  normal: { value: "0", source: createSourceRef("--tracking-normal", "typography") },
  wide: { value: "0.05em", source: createSourceRef("--tracking-wide", "typography") },
  wider: { value: "0.1em", source: createSourceRef("--tracking-wider", "typography") },
  widest: { value: "0.2em", source: createSourceRef("--tracking-widest", "typography") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const fontWeightPrimitives = {
  light: { value: 300, source: createSourceRef("--font-light", "typography") },
  regular: { value: 400, source: createSourceRef("--font-regular", "typography") },
  medium: { value: 500, source: createSourceRef("--font-medium", "typography") },
  semibold: { value: 600, source: createSourceRef("--font-semibold", "typography") }
} as const satisfies Record<string, PrimitiveToken<number>>;

export const spacingPrimitives = {
  space1: { value: "0.25rem", source: createSourceRef("--space-1", "spacing") },
  space2: { value: "0.5rem", source: createSourceRef("--space-2", "spacing") },
  space3: { value: "0.75rem", source: createSourceRef("--space-3", "spacing") },
  space4: { value: "1rem", source: createSourceRef("--space-4", "spacing") },
  space5: { value: "1.25rem", source: createSourceRef("--space-5", "spacing") },
  space6: { value: "1.5rem", source: createSourceRef("--space-6", "spacing") },
  space8: { value: "2rem", source: createSourceRef("--space-8", "spacing") },
  space10: { value: "2.5rem", source: createSourceRef("--space-10", "spacing") },
  space12: { value: "3rem", source: createSourceRef("--space-12", "spacing") },
  space16: { value: "4rem", source: createSourceRef("--space-16", "spacing") },
  space20: { value: "5rem", source: createSourceRef("--space-20", "spacing") },
  space24: { value: "6rem", source: createSourceRef("--space-24", "spacing") },
  space32: { value: "8rem", source: createSourceRef("--space-32", "spacing") },
  space48: { value: "12rem", source: createSourceRef("--space-48", "spacing") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const shadowPrimitives = {
  shadowXs: { value: "0 1px 2px 0 rgba(139,58,74,0.04)", source: createSourceRef("--shadow-xs", "elevation") },
  shadowSm: { value: "0 2px 4px -1px rgba(139,58,74,0.06), 0 1px 2px -1px rgba(139,58,74,0.04)", source: createSourceRef("--shadow-sm", "elevation") },
  shadowMd: { value: "0 4px 12px -2px rgba(139,58,74,0.08), 0 2px 6px -2px rgba(139,58,74,0.04)", source: createSourceRef("--shadow-md", "elevation") },
  shadowLg: { value: "0 12px 24px -6px rgba(139,58,74,0.10), 0 4px 10px -4px rgba(139,58,74,0.06)", source: createSourceRef("--shadow-lg", "elevation") },
  shadowXl: { value: "0 24px 48px -12px rgba(139,58,74,0.14), 0 8px 16px -8px rgba(139,58,74,0.08)", source: createSourceRef("--shadow-xl", "elevation") },
  shadow2xl: { value: "0 40px 80px -20px rgba(139,58,74,0.18)", source: createSourceRef("--shadow-2xl", "elevation") },
  shadowInner: { value: "inset 0 2px 4px 0 rgba(139,58,74,0.05)", source: createSourceRef("--shadow-inner", "elevation") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const radiusPrimitives = {
  radiusNone: { value: "0", source: createSourceRef("--radius-none", "radius") },
  radiusXs: { value: "2px", source: createSourceRef("--radius-xs", "radius") },
  radiusSm: { value: "4px", source: createSourceRef("--radius-sm", "radius") },
  radiusMd: { value: "8px", source: createSourceRef("--radius-md", "radius") },
  radiusLg: { value: "12px", source: createSourceRef("--radius-lg", "radius") },
  radiusXl: { value: "16px", source: createSourceRef("--radius-xl", "radius") },
  radius2xl: { value: "24px", source: createSourceRef("--radius-2xl", "radius") },
  radius3xl: { value: "32px", source: createSourceRef("--radius-3xl", "radius") },
  radiusFull: { value: "9999px", source: createSourceRef("--radius-full", "radius") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const borderWidthPrimitives = {
  border0: { value: "0", source: createSourceRef("--border-0", "border") },
  border1: { value: "1px", source: createSourceRef("--border-1", "border") },
  border2: { value: "2px", source: createSourceRef("--border-2", "border") },
  border4: { value: "4px", source: createSourceRef("--border-4", "border") },
  border8: { value: "8px", source: createSourceRef("--border-8", "border") }
} as const satisfies Record<string, PrimitiveToken<string>>;

export const gridPrimitives = {
  gridColsDesktop: { value: 12, source: createSourceRef("--grid-cols-desktop", "grid") },
  gridColsTablet: { value: 8, source: createSourceRef("--grid-cols-tablet", "grid") },
  gridColsMobile: { value: 4, source: createSourceRef("--grid-cols-mobile", "grid") },
  gridGutterLg: { value: "32px", source: createSourceRef("--grid-gutter-lg", "grid") },
  gridGutterMd: { value: "24px", source: createSourceRef("--grid-gutter-md", "grid") },
  gridGutterSm: { value: "16px", source: createSourceRef("--grid-gutter-sm", "grid") },
  gridMarginLg: { value: "64px", source: createSourceRef("--grid-margin-lg", "grid") },
  gridMarginMd: { value: "32px", source: createSourceRef("--grid-margin-md", "grid") },
  gridMarginSm: { value: "16px", source: createSourceRef("--grid-margin-sm", "grid") },
  container2xl: { value: "1440px", source: createSourceRef("--container-2xl", "grid") }
} as const satisfies Record<string, PrimitiveToken<string | number>>;

export const primitives = {
  colors: colorPrimitives,
  fontFamilies: fontFamilyPrimitives,
  fontSizes: fontSizePrimitives,
  lineHeights: lineHeightPrimitives,
  tracking: trackingPrimitives,
  fontWeights: fontWeightPrimitives,
  spacing: spacingPrimitives,
  shadows: shadowPrimitives,
  radii: radiusPrimitives,
  borderWidths: borderWidthPrimitives,
  grid: gridPrimitives
} as const;
