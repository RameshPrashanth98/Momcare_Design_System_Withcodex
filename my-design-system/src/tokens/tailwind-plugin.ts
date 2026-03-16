type UtilityValue = string | number | Record<string, string | number>;
type UtilityDefinition = Record<string, UtilityValue>;
type UtilityMap = Record<string, UtilityDefinition>;

type PluginApi = {
  addComponents: (components: UtilityMap) => void;
  addUtilities: (utilities: UtilityMap) => void;
};

import { componentAliases } from "./component-aliases.js";
import { gridPrimitives } from "./primitives.js";
import { typographyTokens } from "./typography.js";

export const morphTailwindPlugin = {
  handler({ addComponents, addUtilities }: PluginApi) {
    addComponents({
      ".type-displayHero": {
        fontFamily: typographyTokens.displayHero.fontFamily,
        fontSize: typographyTokens.displayHero.fontSize,
        fontWeight: String(typographyTokens.displayHero.fontWeight),
        lineHeight: String(typographyTokens.displayHero.lineHeight),
        letterSpacing: typographyTokens.displayHero.letterSpacing,
        "@screen md": {
          fontSize: typographyTokens.displayHero.responsive?.md?.fontSize ?? typographyTokens.displayHero.fontSize
        },
        "@screen lg": {
          fontSize: typographyTokens.displayHero.responsive?.lg?.fontSize ?? typographyTokens.displayHero.fontSize
        }
      },
      ".type-displaySection": {
        fontFamily: typographyTokens.displaySection.fontFamily,
        fontSize: typographyTokens.displaySection.fontSize,
        fontWeight: String(typographyTokens.displaySection.fontWeight),
        lineHeight: String(typographyTokens.displaySection.lineHeight),
        letterSpacing: typographyTokens.displaySection.letterSpacing,
        "@screen md": {
          fontSize: typographyTokens.displaySection.responsive?.md?.fontSize ?? typographyTokens.displaySection.fontSize
        },
        "@screen lg": {
          fontSize: typographyTokens.displaySection.responsive?.lg?.fontSize ?? typographyTokens.displaySection.fontSize
        }
      },
      ".type-bodyLg": {
        fontFamily: typographyTokens.bodyLg.fontFamily,
        fontSize: typographyTokens.bodyLg.fontSize,
        fontWeight: String(typographyTokens.bodyLg.fontWeight),
        lineHeight: String(typographyTokens.bodyLg.lineHeight),
        letterSpacing: typographyTokens.bodyLg.letterSpacing
      },
      ".type-bodyMd": {
        fontFamily: typographyTokens.bodyMd.fontFamily,
        fontSize: typographyTokens.bodyMd.fontSize,
        fontWeight: String(typographyTokens.bodyMd.fontWeight),
        lineHeight: String(typographyTokens.bodyMd.lineHeight),
        letterSpacing: typographyTokens.bodyMd.letterSpacing
      },
      ".type-labelSm": {
        fontFamily: typographyTokens.labelSm.fontFamily,
        fontSize: typographyTokens.labelSm.fontSize,
        fontWeight: String(typographyTokens.labelSm.fontWeight),
        lineHeight: String(typographyTokens.labelSm.lineHeight),
        letterSpacing: typographyTokens.labelSm.letterSpacing
      },
      ".type-eyebrow": {
        fontFamily: typographyTokens.eyebrow.fontFamily,
        fontSize: typographyTokens.eyebrow.fontSize,
        fontWeight: String(typographyTokens.eyebrow.fontWeight),
        lineHeight: String(typographyTokens.eyebrow.lineHeight),
        letterSpacing: typographyTokens.eyebrow.letterSpacing
      },
      ".type-caption": {
        fontFamily: typographyTokens.caption.fontFamily,
        fontSize: typographyTokens.caption.fontSize,
        fontWeight: String(typographyTokens.caption.fontWeight),
        lineHeight: String(typographyTokens.caption.lineHeight),
        letterSpacing: typographyTokens.caption.letterSpacing
      },
      ".layout-container": {
        maxWidth: String(gridPrimitives.container2xl.value),
        marginInline: "auto",
        width: "100%"
      },
      ".layout-grid": {
        display: "grid",
        gridTemplateColumns: `repeat(${gridPrimitives.gridColsMobile.value}, minmax(0, 1fr))`,
        gap: gridPrimitives.gridGutterSm.value,
        marginInline: gridPrimitives.gridMarginSm.value,
        "@screen md": {
          gridTemplateColumns: `repeat(${gridPrimitives.gridColsTablet.value}, minmax(0, 1fr))`,
          gap: gridPrimitives.gridGutterMd.value,
          marginInline: gridPrimitives.gridMarginMd.value
        },
        "@screen lg": {
          gridTemplateColumns: `repeat(${gridPrimitives.gridColsDesktop.value}, minmax(0, 1fr))`,
          gap: gridPrimitives.gridGutterLg.value,
          marginInline: gridPrimitives.gridMarginLg.value
        }
      }
    });

    addUtilities({
      ".layout-cols-mobile": { gridTemplateColumns: `repeat(${gridPrimitives.gridColsMobile.value}, minmax(0, 1fr))` },
      ".layout-cols-tablet": { gridTemplateColumns: `repeat(${gridPrimitives.gridColsTablet.value}, minmax(0, 1fr))` },
      ".layout-cols-desktop": { gridTemplateColumns: `repeat(${gridPrimitives.gridColsDesktop.value}, minmax(0, 1fr))` },
      ".layout-gutter-mobile": { gap: gridPrimitives.gridGutterSm.value },
      ".layout-gutter-tablet": { gap: gridPrimitives.gridGutterMd.value },
      ".layout-gutter-desktop": { gap: gridPrimitives.gridGutterLg.value },
      ".layout-margin-mobile": { marginInline: gridPrimitives.gridMarginSm.value },
      ".layout-margin-tablet": { marginInline: gridPrimitives.gridMarginMd.value },
      ".layout-margin-desktop": { marginInline: gridPrimitives.gridMarginLg.value },
      ".alias-button-primary": {
        backgroundColor: componentAliases.button.primaryBg.value,
        color: componentAliases.button.text.value,
        borderRadius: componentAliases.button.radius.value
      },
      ".alias-button-primary-hover": {
        backgroundColor: componentAliases.button.primaryHover.value
      },
      ".alias-input": {
        backgroundColor: componentAliases.input.background.value,
        borderColor: componentAliases.input.border.value,
        borderRadius: componentAliases.input.radius.value
      },
      ".alias-input-focus": {
        borderColor: componentAliases.input.borderFocus.value
      },
      ".alias-card": {
        backgroundColor: componentAliases.card.background.value,
        borderColor: componentAliases.card.border.value,
        borderRadius: componentAliases.card.radius.value,
        boxShadow: componentAliases.card.shadow.value
      },
      ".alias-badge": {
        backgroundColor: componentAliases.badge.background.value,
        color: componentAliases.badge.text.value,
        borderRadius: componentAliases.badge.radius.value
      },
      ".alias-focusRing": {
        outlineColor: componentAliases.focusRing.color.value,
        outlineOffset: componentAliases.focusRing.offset.value,
        outlineWidth: componentAliases.focusRing.width.value,
        outlineStyle: "solid"
      }
    });
  }
} as const;
