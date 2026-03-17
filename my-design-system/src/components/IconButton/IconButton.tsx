import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type IconButtonVariant = "standard" | "filled" | "tonal";
export type IconButtonSize = "compact" | "comfortable" | "spacious";

export type IconButtonProps = {
  "aria-label": string;
  className?: string;
  disabled?: boolean;
  icon: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  selected?: boolean;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children" | "disabled" | "onClick">;

const sizeTokens = {
  compact: {
    iconSize: typographyTokens.caption.fontSize,
    frameSize: spacingPrimitives.space10.value
  },
  comfortable: {
    iconSize: typographyTokens.bodyMd.fontSize,
    frameSize: spacingPrimitives.space12.value
  },
  spacious: {
    iconSize: typographyTokens.bodyLg.fontSize,
    frameSize: spacingPrimitives.space16.value
  }
} as const;

const variantTokens = {
  standard: {
    activeBackground: semanticTokens.surface.subtle.value,
    activeColor: semanticTokens.text.primary.value,
    borderColor: "transparent",
    defaultBackground: "transparent",
    defaultColor: semanticTokens.text.secondary.value,
    disabledBackground: "transparent",
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: colorPrimitives.roseMist.value,
    selectedBackground: colorPrimitives.roseMist.value,
    selectedColor: semanticTokens.interactive.primaryHover.value,
    shadow: "none"
  },
  filled: {
    activeBackground: colorPrimitives.roseDark.value,
    activeColor: semanticTokens.text.inverse.value,
    borderColor: componentAliases.button.primaryBg.value,
    defaultBackground: componentAliases.button.primaryBg.value,
    defaultColor: componentAliases.button.text.value,
    disabledBackground: semanticTokens.surface.muted.value,
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: componentAliases.button.primaryHover.value,
    selectedBackground: componentAliases.button.primaryHover.value,
    selectedColor: componentAliases.button.text.value,
    shadow: shadowPrimitives.shadowSm.value
  },
  tonal: {
    activeBackground: colorPrimitives.sageMid.value,
    activeColor: colorPrimitives.sageDeep.value,
    borderColor: "transparent",
    defaultBackground: colorPrimitives.sageLight.value,
    defaultColor: colorPrimitives.sageDeep.value,
    disabledBackground: semanticTokens.surface.muted.value,
    disabledColor: semanticTokens.text.muted.value,
    hoverBackground: colorPrimitives.sageMid.value,
    selectedBackground: colorPrimitives.sageMid.value,
    selectedColor: colorPrimitives.sageDeep.value,
    shadow: "none"
  }
} as const;

export function IconButton({
  "aria-label": ariaLabel,
  className,
  disabled = false,
  icon,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  selected = false,
  size = "comfortable",
  variant = "standard",
  ...rest
}: IconButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const activeSize = sizeTokens[size];
  const activeVariant = variantTokens[variant];

  const backgroundColor = disabled
    ? activeVariant.disabledBackground
    : isPressed
      ? activeVariant.activeBackground
      : selected
        ? activeVariant.selectedBackground
        : isHovered
          ? activeVariant.hoverBackground
          : activeVariant.defaultBackground;

  const color = disabled
    ? activeVariant.disabledColor
    : selected
      ? activeVariant.selectedColor
      : isPressed
        ? activeVariant.activeColor
        : activeVariant.defaultColor;

  const buttonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor,
    borderColor: activeVariant.borderColor,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: variant === "filled" ? borderWidthPrimitives.border1.value : borderWidthPrimitives.border0.value,
    boxShadow: disabled ? "none" : activeVariant.shadow,
    color,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    height: activeSize.frameSize,
    justifyContent: "center",
    minHeight: activeSize.frameSize,
    minWidth: activeSize.frameSize,
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space2.value,
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "background-color, color, outline-color, box-shadow",
    width: activeSize.frameSize
  };

  const iconStyle: CSSProperties = {
    alignItems: "center",
    color: "currentColor",
    display: "inline-flex",
    fontSize: activeSize.iconSize,
    justifyContent: "center",
    lineHeight: "1"
  };

  return (
    <button
      aria-label={ariaLabel}
      aria-pressed={selected || undefined}
      className={className}
      disabled={disabled}
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
        if (event.key === "Enter" || event.key === " ") {
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
      type="button"
      {...rest}
    >
      <span aria-hidden="true" style={iconStyle}>
        {icon}
      </span>
    </button>
  );
}
