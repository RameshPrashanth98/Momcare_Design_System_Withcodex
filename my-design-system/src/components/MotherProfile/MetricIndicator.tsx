import type { CSSProperties } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MetricIndicatorVariant = "stable" | "watch" | "critical";

export type MetricIndicatorProps = {
  className?: string;
  value: number;
  variant?: MetricIndicatorVariant;
};

const variantColors = {
  stable: semanticTokens.feedback.success.value,
  watch: semanticTokens.feedback.warning.value,
  critical: semanticTokens.feedback.error.value
} as const;

export function MetricIndicator({ className, value, variant = "stable" }: MetricIndicatorProps) {
  const clampedValue = Math.max(0, Math.min(1, value));

  const trackStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    height: spacingPrimitives.space2.value,
    overflow: "hidden",
    width: "100%"
  };

  const fillStyle: CSSProperties = {
    backgroundColor: variantColors[variant],
    borderRadius: radiusPrimitives.radiusFull.value,
    height: "100%",
    width: `${clampedValue * 100}%`
  };

  return (
    <div aria-hidden="true" className={className} style={trackStyle}>
      <div style={fillStyle} />
    </div>
  );
}
