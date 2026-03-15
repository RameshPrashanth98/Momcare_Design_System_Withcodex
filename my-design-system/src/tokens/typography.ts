import { createSourceRef } from "./metadata.js";
import { fontFamilyPrimitives, fontSizePrimitives, fontWeightPrimitives, lineHeightPrimitives, trackingPrimitives } from "./primitives.js";
import type { TypographyStyleToken } from "./types.js";

export const typographyTokens = {
  displayHero: {
    fontFamily: fontFamilyPrimitives.display.value,
    fontSize: fontSizePrimitives.text6xl.value,
    fontWeight: fontWeightPrimitives.light.value,
    lineHeight: lineHeightPrimitives.tight.value,
    letterSpacing: trackingPrimitives.tight.value,
    source: createSourceRef("display-hero", "typography", true, "Display family is marked provisional in the source token table."),
    responsive: {
      md: { fontSize: fontSizePrimitives.text5xl.value },
      lg: { fontSize: fontSizePrimitives.text6xl.value }
    }
  },
  displaySection: {
    fontFamily: fontFamilyPrimitives.display.value,
    fontSize: fontSizePrimitives.text4xl.value,
    fontWeight: fontWeightPrimitives.light.value,
    lineHeight: lineHeightPrimitives.tight.value,
    letterSpacing: trackingPrimitives.tight.value,
    source: createSourceRef("display-section", "typography", true),
    responsive: {
      md: { fontSize: fontSizePrimitives.text3xl.value },
      lg: { fontSize: fontSizePrimitives.text4xl.value }
    }
  },
  bodyLg: {
    fontFamily: fontFamilyPrimitives.body.value,
    fontSize: fontSizePrimitives.textMd.value,
    fontWeight: fontWeightPrimitives.regular.value,
    lineHeight: lineHeightPrimitives.relaxed.value,
    letterSpacing: trackingPrimitives.normal.value,
    source: createSourceRef("body-lg", "typography", true)
  },
  bodyMd: {
    fontFamily: fontFamilyPrimitives.body.value,
    fontSize: fontSizePrimitives.textBase.value,
    fontWeight: fontWeightPrimitives.regular.value,
    lineHeight: lineHeightPrimitives.normal.value,
    letterSpacing: trackingPrimitives.normal.value,
    source: createSourceRef("body-md", "typography", true)
  },
  labelSm: {
    fontFamily: fontFamilyPrimitives.body.value,
    fontSize: fontSizePrimitives.textSm.value,
    fontWeight: fontWeightPrimitives.medium.value,
    lineHeight: lineHeightPrimitives.normal.value,
    letterSpacing: trackingPrimitives.wide.value,
    source: createSourceRef("label-sm", "typography", true)
  },
  eyebrow: {
    fontFamily: fontFamilyPrimitives.body.value,
    fontSize: fontSizePrimitives.textXs.value,
    fontWeight: fontWeightPrimitives.semibold.value,
    lineHeight: lineHeightPrimitives.normal.value,
    letterSpacing: trackingPrimitives.widest.value,
    source: createSourceRef("eyebrow", "typography", true)
  },
  caption: {
    fontFamily: fontFamilyPrimitives.mono.value,
    fontSize: fontSizePrimitives.textXs.value,
    fontWeight: fontWeightPrimitives.regular.value,
    lineHeight: lineHeightPrimitives.normal.value,
    letterSpacing: trackingPrimitives.normal.value,
    source: createSourceRef("caption", "typography")
  }
} as const satisfies Record<string, TypographyStyleToken>;
