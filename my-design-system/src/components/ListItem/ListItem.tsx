import { useState, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type ListItemProps = {
  className?: string;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  leadingVisual?: ReactNode;
  onClick?: () => void;
  primaryText: ReactNode;
  secondaryText?: ReactNode;
  tertiaryText?: ReactNode;
  trailingIcon?: ReactNode;
  trailingText?: ReactNode;
  trailingVisual?: ReactNode;
};

export function ListItem({
  className,
  disabled = false,
  leadingIcon,
  leadingVisual,
  onClick,
  primaryText,
  secondaryText,
  tertiaryText,
  trailingIcon,
  trailingText,
  trailingVisual
}: ListItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const isInteractive = Boolean(onClick) && !disabled;
  const resolvedLeadingVisual = leadingIcon ?? leadingVisual;
  const resolvedTrailingVisual = trailingIcon ?? trailingVisual;

  const containerStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled
      ? semanticTokens.surface.muted.value
      : isPressed
        ? colorPrimitives.creamSoft.value
        : isHovered
          ? semanticTokens.surface.subtle.value
          : semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: isInteractive ? "pointer" : "default",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `${resolvedLeadingVisual ? "auto " : ""}minmax(0, 1fr)${trailingText || resolvedTrailingVisual ? " auto" : ""}`,
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space4.value,
    textAlign: "left",
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "background-color, outline-color",
    width: "100%"
  };

  const leadingStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.subtle.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    height: spacingPrimitives.space10.value,
    justifyContent: "center",
    width: spacingPrimitives.space10.value
  };

  const primaryStyle: CSSProperties = {
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight)
  };

  const secondaryStyle: CSSProperties = {
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight)
  };

  const tertiaryStyle: CSSProperties = {
    color: semanticTokens.feedback.error.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight)
  };

  const trailingTextStyle: CSSProperties = {
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    whiteSpace: "nowrap"
  };

  const content = (
    <>
      {resolvedLeadingVisual ? (
        <span aria-hidden="true" style={leadingStyle}>
          {resolvedLeadingVisual}
        </span>
      ) : null}
      <span style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: "0" }}>
        <span style={primaryStyle}>{primaryText}</span>
        {secondaryText ? <span style={secondaryStyle}>{secondaryText}</span> : null}
        {tertiaryText ? <span style={tertiaryStyle}>{tertiaryText}</span> : null}
      </span>
      {trailingText || resolvedTrailingVisual ? (
        <span style={{ alignItems: "end", display: "grid", gap: spacingPrimitives.space1.value, justifyItems: "end" }}>
          {trailingText ? <span style={trailingTextStyle}>{trailingText}</span> : null}
          {resolvedTrailingVisual ? <span aria-hidden="true">{resolvedTrailingVisual}</span> : null}
        </span>
      ) : null}
    </>
  );

  if (!isInteractive) {
    return (
      <div className={className} style={containerStyle}>
        {content}
      </div>
    );
  }

  return (
    <button
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
      style={containerStyle}
      type="button"
    >
      {content}
    </button>
  );
}
