import type { CSSProperties } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type ConditionChipGroupProps = {
  className?: string;
  items: string[];
};

export function ConditionChipGroup({ className, items }: ConditionChipGroupProps) {
  const chipStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.text.primary.value,
    display: "inline-flex",
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    paddingBlock: spacingPrimitives.space2.value,
    paddingInline: spacingPrimitives.space3.value
  };

  return (
    <div className={className} style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space2.value }}>
      {items.map((item) => (
        <span key={item} style={chipStyle}>{item}</span>
      ))}
    </div>
  );
}
