import { useState, type ButtonHTMLAttributes, type CSSProperties } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type FilterSelectProps = {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  value?: string;
};

export function FilterSelect({ className, disabled = false, label, onClick, value = "All" }: FilterSelectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const style: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: isHovered ? semanticTokens.surface.subtle.value : semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    gap: spacingPrimitives.space2.value,
    justifyContent: "space-between",
    minHeight: spacingPrimitives.space10.value,
    minWidth: `calc(${spacingPrimitives.space16.value} + ${spacingPrimitives.space8.value})`,
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingBlock: spacingPrimitives.space2.value,
    paddingInline: spacingPrimitives.space4.value
  };

  const labelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight)
  };

  const valueStyle: CSSProperties = {
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight)
  };

  return (
    <button
      className={className}
      disabled={disabled}
      onBlur={() => setIsFocusVisible(false)}
      onClick={onClick}
      onFocus={() => setIsFocusVisible(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
      type="button"
    >
      <span style={{ alignItems: "start", display: "grid", justifyItems: "start" }}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>{value}</span>
      </span>
      <span aria-hidden="true">?</span>
    </button>
  );
}
