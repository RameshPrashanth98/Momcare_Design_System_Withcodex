import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type FloatingActionButtonProps = {
  "aria-label": string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

export function FloatingActionButton({
  "aria-label": ariaLabel,
  className,
  disabled = false,
  icon,
  label,
  onClick
}: FloatingActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const style: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled ? semanticTokens.surface.muted.value : (isPressed ? colorPrimitives.roseDark.value : (isHovered ? componentAliases.button.primaryHover.value : componentAliases.button.primaryBg.value)),
    borderColor: componentAliases.button.primaryBg.value,
    borderRadius: radiusPrimitives.radius2xl.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: shadowPrimitives.shadowLg.value,
    color: disabled ? semanticTokens.text.muted.value : componentAliases.button.text.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    gap: spacingPrimitives.space2.value,
    minHeight: spacingPrimitives.space12.value,
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value
  };

  const labelStyle: CSSProperties = {
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight)
  };

  return (
    <button
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      onBlur={() => setIsFocusVisible(false)}
      onClick={onClick}
      onFocus={() => setIsFocusVisible(true)}
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
      <span aria-hidden="true">{icon ?? "+"}</span>
      {label ? <span style={labelStyle}>{label}</span> : null}
    </button>
  );
}

