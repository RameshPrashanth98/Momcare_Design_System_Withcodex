import type { CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type IllustrationPanelProps = {
  alt: string;
  aspectRatio?: string;
  image: ReactNode;
};

export function IllustrationPanel({ alt, aspectRatio, image }: IllustrationPanelProps) {
  const style: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusXl.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: semanticTokens.elevation.card.value,
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  if (aspectRatio) {
    style.aspectRatio = aspectRatio;
  }

  return (
    <figure style={{ margin: "0", width: "100%" }}>
      <div aria-label={alt} role="img" style={style}>{image}</div>
    </figure>
  );
}
