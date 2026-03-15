import { componentAliases } from "./component-aliases.js";
import {
  borderWidthPrimitives,
  colorPrimitives,
  fontFamilyPrimitives,
  fontSizePrimitives,
  fontWeightPrimitives,
  gridPrimitives,
  lineHeightPrimitives,
  radiusPrimitives,
  shadowPrimitives,
  spacingPrimitives,
  trackingPrimitives
} from "./primitives.js";
import { semanticTokens } from "./semantic.js";
import { typographyTokens } from "./typography.js";

export const morphTailwindTheme = {
  colors: {
    surface: Object.fromEntries(
      Object.entries(semanticTokens.surface).map(([key, token]) => [key, token.value])
    ),
    text: Object.fromEntries(
      Object.entries(semanticTokens.text).map(([key, token]) => [key, token.value])
    ),
    border: Object.fromEntries(
      Object.entries(semanticTokens.border).map(([key, token]) => [key, token.value])
    ),
    interactive: Object.fromEntries(
      Object.entries(semanticTokens.interactive).map(([key, token]) => [key, token.value])
    ),
    feedback: Object.fromEntries(
      Object.entries(semanticTokens.feedback).map(([key, token]) => [key, token.value])
    ),
    brand: {
      roseBlush: colorPrimitives.roseBlush.value,
      rosePetal: colorPrimitives.rosePetal.value,
      roseMist: colorPrimitives.roseMist.value,
      roseDeep: colorPrimitives.roseDeep.value,
      sageLight: colorPrimitives.sageLight.value,
      sageMid: colorPrimitives.sageMid.value,
      creamWarm: colorPrimitives.creamWarm.value,
      neutral800: colorPrimitives.neutral800.value
    }
  },
  spacing: Object.fromEntries(
    Object.entries(spacingPrimitives).map(([key, token]) => [key, token.value])
  ),
  boxShadow: {
    card: semanticTokens.elevation.card.value,
    overlay: semanticTokens.elevation.overlay.value,
    xs: shadowPrimitives.shadowXs.value,
    sm: shadowPrimitives.shadowSm.value,
    md: shadowPrimitives.shadowMd.value,
    lg: shadowPrimitives.shadowLg.value,
    xl: shadowPrimitives.shadowXl.value
  },
  borderRadius: Object.fromEntries(
    Object.entries(radiusPrimitives).map(([key, token]) => [key, token.value])
  ),
  borderWidth: Object.fromEntries(
    Object.entries(borderWidthPrimitives).map(([key, token]) => [key, token.value])
  ),
  fontFamily: Object.fromEntries(
    Object.entries(fontFamilyPrimitives).map(([key, token]) => [key, token.value])
  ),
  fontWeight: Object.fromEntries(
    Object.entries(fontWeightPrimitives).map(([key, token]) => [key, token.value])
  ),
  letterSpacing: Object.fromEntries(
    Object.entries(trackingPrimitives).map(([key, token]) => [key, token.value])
  ),
  lineHeight: Object.fromEntries(
    Object.entries(lineHeightPrimitives).map(([key, token]) => [key, token.value])
  ),
  fontSize: Object.fromEntries(
    Object.entries(fontSizePrimitives).map(([key, token]) => [key, token.value])
  ),
  maxWidth: {
    content: String(gridPrimitives.container2xl.value)
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": String(gridPrimitives.container2xl.value)
  },
  morphAliases: componentAliases,
  morphTypography: typographyTokens,
  morphLayout: {
    columns: {
      mobile: gridPrimitives.gridColsMobile.value,
      tablet: gridPrimitives.gridColsTablet.value,
      desktop: gridPrimitives.gridColsDesktop.value
    },
    gutters: {
      mobile: gridPrimitives.gridGutterSm.value,
      tablet: gridPrimitives.gridGutterMd.value,
      desktop: gridPrimitives.gridGutterLg.value
    },
    margins: {
      mobile: gridPrimitives.gridMarginSm.value,
      tablet: gridPrimitives.gridMarginMd.value,
      desktop: gridPrimitives.gridMarginLg.value
    }
  }
} as const;
