import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, fontSizePrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type ButtonVariant = "filled" | "text" | "tonal";
export type ButtonSize = "compact" | "comfortable" | "spacious";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
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
    paddingBlock: spacingPrimitives.space2.value,
    paddingInline: spacingPrimitives.space4.value,
    textStyle: typographyTokens.caption
  },
  comfortable: {
    gap: spacingPrimitives.space2.value,
    iconSize: fontSizePrimitives.textBase.value,
    minHeight: spacingPrimitives.space12.value,
    minWidth: spacingPrimitives.space12.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space5.value,
    textStyle: typographyTokens.labelSm
  },
  spacious: {
    gap: spacingPrimitives.space3.value,
    iconSize: fontSizePrimitives.textLg.value,
    minHeight: spacingPrimitives.space16.value,
    minWidth: spacingPrimitives.space16.value,
    paddingBlock: spacingPrimitives.space4.value,
    paddingInline: spacingPrimitives.space6.value,
    textStyle: typographyTokens.bodyMd
  }
} as const;

const variantTokens = {
  filled: {
    activeBackground: colorPrimitives.roseDark.value,
    activeShadow: shadowPrimitives.shadowXs.value,
    borderColor: colorPrimitives.roseDark.value,
    defaultBackground: componentAliases.button.primaryBg.value,
    defaultColor: componentAliases.button.text.value,
    disabledBackground: semanticTokens.surface.muted.value,
    disabledBorderColor: semanticTokens.border.subtle.value,
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: componentAliases.button.primaryHover.value,
    hoverShadow: shadowPrimitives.shadowMd.value,
    shadow: shadowPrimitives.shadowSm.value
  },
  text: {
    activeBackground: colorPrimitives.roseMist.value,
    activeShadow: "none",
    borderColor: "transparent",
    defaultBackground: "transparent",
    defaultColor: semanticTokens.interactive.primaryHover.value,
    disabledBackground: "transparent",
    disabledBorderColor: "transparent",
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: semanticTokens.surface.subtle.value,
    hoverShadow: "none",
    shadow: "none"
  },
  tonal: {
    activeBackground: colorPrimitives.sageMid.value,
    activeShadow: "none",
    borderColor: "transparent",
    defaultBackground: colorPrimitives.sageLight.value,
    defaultColor: colorPrimitives.sageDeep.value,
    disabledBackground: semanticTokens.surface.muted.value,
    disabledBorderColor: "transparent",
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: colorPrimitives.sageMid.value,
    hoverShadow: shadowPrimitives.shadowXs.value,
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
  fullWidth = false,
  leadingIcon,
  loading = false,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  size = "comfortable",
  trailingIcon,
  type = "button",
  variant = "filled",
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const isDisabled = disabled || loading;
  const isIconOnly = !children;
  const activeSize = sizeTokens[size];
  const activeVariant = variantTokens[variant];

  const backgroundColor = isDisabled
    ? activeVariant.disabledBackground
    : isPressed
      ? activeVariant.activeBackground
      : isHovered
        ? activeVariant.hoverBackground
        : activeVariant.defaultBackground;

  const color = isDisabled ? activeVariant.disabledColor : activeVariant.defaultColor;
  const boxShadow = isDisabled
    ? "none"
    : isPressed
      ? activeVariant.activeShadow
      : isHovered
        ? activeVariant.hoverShadow
        : activeVariant.shadow;

  const buttonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor,
    borderColor: isDisabled ? activeVariant.disabledBorderColor : activeVariant.borderColor,
    borderRadius: componentAliases.button.radius.value,
    borderStyle: "solid",
    borderWidth: variant === "filled" ? borderWidthPrimitives.border1.value : borderWidthPrimitives.border0.value,
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
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingBlock: activeSize.paddingBlock,
    paddingInline: isIconOnly ? activeSize.paddingBlock : activeSize.paddingInline,
    textDecoration: "none",
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "background-color, box-shadow, color, outline-color",
    userSelect: "none",
    width: fullWidth ? "100%" : undefined
  };

  const label = loading ? "Loading..." : children;

  return (
    <button
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      className={className}
      disabled={isDisabled}
      onBlur={(event) => {
        setIsFocusVisible(false);
        onBlur?.(event);
      }}
      onClick={onClick}
      onFocus={(event) => {
        setIsFocusVisible(true);
        onFocus?.(event);
      }}
      onKeyDown={(event) => {
        if (event.key === " " || event.key === "Enter") {
          setIsPressed(true);
        }
        onKeyDown?.(event);
      }}
      onKeyUp={(event) => {
        setIsPressed(false);
        onKeyUp?.(event);
      }}
      onMouseDown={(event) => {
        setIsPressed(true);
        onMouseDown?.(event);
      }}
      onMouseEnter={(event) => {
        setIsHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setIsHovered(false);
        setIsPressed(false);
        onMouseLeave?.(event);
      }}
      onMouseUp={(event) => {
        setIsPressed(false);
        onMouseUp?.(event);
      }}
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
