import type { CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type BrandMarkProps = {
  ariaLabel: string;
  icon: ReactNode;
};

export function BrandMark({ ariaLabel, icon }: BrandMarkProps) {
  const style: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: semanticTokens.elevation.card.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    height: spacingPrimitives.space16.value,
    justifyContent: "center",
    padding: spacingPrimitives.space4.value,
    width: spacingPrimitives.space16.value
  };

  return <div aria-label={ariaLabel} role="img" style={style}>{icon}</div>;
}
