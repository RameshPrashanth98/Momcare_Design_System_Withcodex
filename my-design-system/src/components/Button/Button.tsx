import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, fontSizePrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type ButtonVariant = "filled" | "text";
export type ButtonSize = "compact" | "comfortable" | "spacious";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  loading?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  size?: ButtonSize;
  trailingIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  "aria-label"?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children" | "disabled" | "onClick" | "type">;

const sizeTokens = {
  compact: {
    gap: spacingPrimitives.space2.value,
    iconSize: fontSizePrimitives.textSm.value,
    minHeight: spacingPrimitives.space10.value,
    minWidth: spacingPrimitives.space10.value,
    paddingInline: spacingPrimitives.space4.value,
    textStyle: typographyTokens.caption
  },
  comfortable: {
    gap: spacingPrimitives.space2.value,
    iconSize: fontSizePrimitives.textBase.value,
    minHeight: spacingPrimitives.space12.value,
    minWidth: spacingPrimitives.space12.value,
    paddingInline: spacingPrimitives.space5.value,
    textStyle: typographyTokens.labelSm
  },
  spacious: {
    gap: spacingPrimitives.space3.value,
    iconSize: fontSizePrimitives.textLg.value,
    minHeight: spacingPrimitives.space16.value,
    minWidth: spacingPrimitives.space16.value,
    paddingInline: spacingPrimitives.space6.value,
    textStyle: typographyTokens.bodyMd
  }
} as const;

const variantTokens = {
  filled: {
    activeBackground: colorPrimitives.roseDark.value,
    activeShadow: shadowPrimitives.shadowXs.value,
    defaultBackground: componentAliases.button.primaryBg.value,
    defaultColor: componentAliases.button.text.value,
    disabledBackground: semanticTokens.surface.muted.value,
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: componentAliases.button.primaryHover.value,
    hoverShadow: shadowPrimitives.shadowMd.value,
    pressedBackground: colorPrimitives.roseDark.value,
    pressedShadow: shadowPrimitives.shadowXs.value,
    shadow: shadowPrimitives.shadowSm.value
  },
  text: {
    activeBackground: colorPrimitives.creamSoft.value,
    activeShadow: "none",
    defaultBackground: "transparent",
    defaultColor: semanticTokens.interactive.primaryHover.value,
    disabledBackground: "transparent",
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: semanticTokens.surface.subtle.value,
    hoverShadow: "none",
    pressedBackground: colorPrimitives.roseMist.value,
    pressedShadow: "none",
    shadow: "none"
  }
} as const;

function iconWrapperStyle(size: ButtonSize): CSSProperties {
  return {
    alignItems: "center",
    color: "currentColor",
    display: "inline-flex",
    flexShrink: 0,
    fontSize: sizeTokens[size].iconSize,
    justifyContent: "center",
    lineHeight: "1"
  };
}

export function Button({
  children,
  className,
  disabled = false,
  leadingIcon,
  loading = false,
  onClick,
  size = "comfortable",
  trailingIcon,
  type = "button",
  variant = "filled",
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const isDisabled = disabled || loading;
  const isIconOnly = !children;
  const activeSize = sizeTokens[size];
  const activeVariant = variantTokens[variant];

  const backgroundColor = isDisabled
    ? activeVariant.disabledBackground
    : isPressed
      ? activeVariant.pressedBackground
      : isHovered
        ? activeVariant.hoverBackground
        : activeVariant.defaultBackground;

  const color = isDisabled ? activeVariant.disabledColor : activeVariant.defaultColor;
  const boxShadow = isDisabled
    ? "none"
    : isPressed
      ? activeVariant.pressedShadow
      : isHovered
        ? activeVariant.hoverShadow
        : activeVariant.shadow;

  const buttonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor,
    border: "none",
    borderRadius: componentAliases.button.radius.value,
    boxShadow,
    color,
    cursor: isDisabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    fontFamily: activeSize.textStyle.fontFamily,
    fontSize: activeSize.textStyle.fontSize,
    fontWeight: activeSize.textStyle.fontWeight,
    gap: activeSize.gap,
    justifyContent: "center",
    letterSpacing: activeSize.textStyle.letterSpacing,
    lineHeight: String(activeSize.textStyle.lineHeight),
    minHeight: activeSize.minHeight,
    minWidth: isIconOnly ? activeSize.minWidth : `calc(${activeSize.minHeight} + ${activeSize.paddingInline})`,
    opacity: isDisabled ? 0.72 : 1,
    outlineColor: isFocused ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocused ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: isIconOnly ? spacingPrimitives.space3.value : activeSize.paddingInline,
    textDecoration: "none",
    userSelect: "none"
  };

  const label = loading ? "Loading…" : children;

  return (
    <button
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      className={className}
      disabled={isDisabled}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onKeyDown={(event) => {
        if (event.key === " " || event.key === "Enter") {
          setIsPressed(true);
        }
      }}
      onKeyUp={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseUp={() => setIsPressed(false)}
      style={buttonStyle}
      type={type}
      {...rest}
    >
      {leadingIcon ? <span aria-hidden="true" style={iconWrapperStyle(size)}>{leadingIcon}</span> : null}
      {label ? <span>{label}</span> : null}
      {trailingIcon ? <span aria-hidden="true" style={iconWrapperStyle(size)}>{trailingIcon}</span> : null}
    </button>
  );
}
