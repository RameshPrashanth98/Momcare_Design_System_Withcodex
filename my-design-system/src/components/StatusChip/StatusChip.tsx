import type { CSSProperties } from "react";

import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type StatusChipTone = "high-risk" | "normal";

export type StatusChipProps = {
  className?: string;
  label: string;
  tone: StatusChipTone;
};

const toneTokens = {
  "high-risk": {
    background: colorPrimitives.roseMist.value,
    border: semanticTokens.feedback.error.value,
    text: semanticTokens.feedback.error.value
  },
  normal: {
    background: colorPrimitives.sageLight.value,
    border: colorPrimitives.sageDeep.value,
    text: colorPrimitives.sageDeep.value
  }
} as const;

export function StatusChip({ className, label, tone }: StatusChipProps) {
  const activeTone = toneTokens[tone];

  const style: CSSProperties = {
    alignItems: "center",
    backgroundColor: activeTone.background,
    borderColor: activeTone.border,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: activeTone.text,
    display: "inline-flex",
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    paddingBlock: spacingPrimitives.space1.value,
    paddingInline: spacingPrimitives.space3.value
  };

  return <span className={className} style={style}>{label}</span>;
}
