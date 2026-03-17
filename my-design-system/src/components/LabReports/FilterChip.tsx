import { useState, type CSSProperties, type ButtonHTMLAttributes } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type FilterChipProps = {
  disabled?: boolean;
  label: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  selected?: boolean;
};

export function FilterChip({ disabled = false, label, onClick, selected = false }: FilterChipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const backgroundColor = disabled
    ? semanticTokens.surface.muted.value
    : selected
      ? semanticTokens.interactive.primary.value
      : isPressed
        ? semanticTokens.surface.muted.value
        : isHovered
          ? semanticTokens.surface.subtle.value
          : semanticTokens.surface.base.value;

  const color = disabled
    ? semanticTokens.text.muted.value
    : selected
      ? semanticTokens.text.inverse.value
      : semanticTokens.text.secondary.value;

  const borderColor = selected ? semanticTokens.interactive.primaryHover.value : semanticTokens.border.default.value;

  const style: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor,
    borderColor,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    justifyContent: "center",
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    minHeight: spacingPrimitives.space10.value,
    outlineColor: isFocused ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocused ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingBlock: spacingPrimitives.space2.value,
    paddingInline: spacingPrimitives.space4.value,
    whiteSpace: "nowrap"
  };

  return (
    <button
      aria-pressed={selected}
      disabled={disabled}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onMouseDown={() => setIsPressed(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseUp={() => setIsPressed(false)}
      style={style}
      type="button"
    >
      {label}
    </button>
  );
}
