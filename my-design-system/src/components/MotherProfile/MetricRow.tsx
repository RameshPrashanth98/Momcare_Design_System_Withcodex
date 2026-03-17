import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { MetricIndicator, type MetricIndicatorVariant } from "./MetricIndicator.js";

export type MetricRowProps = {
  className?: string;
  indicatorValue: number;
  indicatorVariant?: MetricIndicatorVariant;
  label: string;
  value: string;
};

export function MetricRow({ className, indicatorValue, indicatorVariant = "stable", label, value }: MetricRowProps) {
  const labelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const valueStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    margin: "0"
  };

  return (
    <div className={className} style={{ display: "grid", gap: spacingPrimitives.space2.value }}>
      <div style={{ alignItems: "baseline", display: "flex", gap: spacingPrimitives.space2.value, justifyContent: "space-between" }}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>{value}</span>
      </div>
      <MetricIndicator value={indicatorValue} variant={indicatorVariant} />
    </div>
  );
}
