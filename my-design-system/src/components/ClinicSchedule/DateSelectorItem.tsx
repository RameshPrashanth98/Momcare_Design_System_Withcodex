import type { CSSProperties } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type DateSelectorItemProps = {
  dateLabel: string;
  dayLabel: string;
  disabled?: boolean;
  onClick?: () => void;
  selected?: boolean;
};

export function DateSelectorItem({ dateLabel, dayLabel, disabled = false, onClick, selected = false }: DateSelectorItemProps) {
  const style: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled
      ? semanticTokens.surface.muted.value
      : selected
        ? colorPrimitives.roseMist.value
        : semanticTokens.surface.base.value,
    borderColor: selected ? colorPrimitives.roseDeep.value : semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radius2xl.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "grid",
    gap: spacingPrimitives.space1.value,
    justifyItems: "center",
    minWidth: spacingPrimitives.space16.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value
  };

  return (
    <button disabled={disabled} onClick={onClick} style={style} type="button">
      <span style={{ color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.secondary.value, fontFamily: typographyTokens.caption.fontFamily, fontSize: typographyTokens.caption.fontSize, fontWeight: typographyTokens.caption.fontWeight, letterSpacing: typographyTokens.caption.letterSpacing, lineHeight: String(typographyTokens.caption.lineHeight) }}>{dayLabel}</span>
      <span style={{ fontFamily: typographyTokens.labelSm.fontFamily, fontSize: typographyTokens.bodyLg.fontSize, fontWeight: typographyTokens.labelSm.fontWeight, letterSpacing: typographyTokens.bodyLg.letterSpacing, lineHeight: String(typographyTokens.bodyLg.lineHeight) }}>{dateLabel}</span>
    </button>
  );
}
