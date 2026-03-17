import type { CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type StatusChipTone = "high-risk" | "normal" | "active" | "waiting" | "inactive" | "warning" | "upcoming" | "completed";
export type StatusChipStatus = StatusChipTone;

export type StatusChipProps = {
  className?: string;
  label: string;
  leadingIcon?: ReactNode;
  status?: StatusChipStatus;
  tone?: StatusChipTone;
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
  },
  active: {
    background: colorPrimitives.sageLight.value,
    border: colorPrimitives.sageDeep.value,
    text: colorPrimitives.sageDeep.value
  },
  waiting: {
    background: colorPrimitives.creamSoft.value,
    border: semanticTokens.feedback.warning.value,
    text: semanticTokens.feedback.warning.value
  },
  inactive: {
    background: semanticTokens.surface.muted.value,
    border: semanticTokens.border.default.value,
    text: semanticTokens.text.secondary.value
  },
  warning: {
    background: colorPrimitives.creamSoft.value,
    border: semanticTokens.feedback.warning.value,
    text: semanticTokens.feedback.warning.value
  },
  upcoming: {
    background: colorPrimitives.roseMist.value,
    border: colorPrimitives.roseDeep.value,
    text: colorPrimitives.roseDeep.value
  },
  completed: {
    background: semanticTokens.surface.muted.value,
    border: semanticTokens.border.default.value,
    text: semanticTokens.text.secondary.value
  }
} as const;

export function StatusChip({ className, label, leadingIcon, status, tone }: StatusChipProps) {
  const resolvedTone = status ?? tone ?? "normal";
  const activeTone = toneTokens[resolvedTone];

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
    gap: spacingPrimitives.space2.value,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    paddingBlock: spacingPrimitives.space1.value,
    paddingInline: spacingPrimitives.space3.value,
    whiteSpace: "nowrap"
  };

  return <span className={className} style={style}>{leadingIcon ? <span aria-hidden="true" style={{ display: "inline-flex", lineHeight: "1" }}>{leadingIcon}</span> : null}{label}</span>;
}
