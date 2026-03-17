import { useState, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type StatCardProps = {
  className?: string;
  icon?: ReactNode;
  label: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  value: ReactNode;
  variant?: "default" | "accent" | "warning";
};

const variantBackgrounds = {
  default: componentAliases.card.background.value,
  accent: colorPrimitives.roseMist.value,
  warning: colorPrimitives.sageLight.value
} as const;

const variantBorders = {
  default: componentAliases.card.border.value,
  accent: semanticTokens.border.emphasis.value,
  warning: semanticTokens.feedback.warning.value
} as const;

export function StatCard({
  className,
  icon,
  label,
  onClick,
  selected = false,
  value,
  variant = "default"
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const isInteractive = Boolean(onClick);

  const backgroundColor = selected
    ? colorPrimitives.roseMist.value
    : isPressed
      ? colorPrimitives.creamSoft.value
      : isHovered
        ? semanticTokens.surface.subtle.value
        : variantBackgrounds[variant];

  const borderColor = selected ? semanticTokens.border.emphasis.value : variantBorders[variant];
  const boxShadow = isPressed ? shadowPrimitives.shadowSm.value : componentAliases.card.shadow.value;

  const cardStyle: CSSProperties = {
    alignItems: "start",
    appearance: "none",
    backgroundColor,
    borderColor,
    borderRadius: componentAliases.card.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow,
    color: semanticTokens.text.primary.value,
    cursor: isInteractive ? "pointer" : "default",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    minWidth: "0",
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space4.value,
    textAlign: "left",
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "background-color, border-color, box-shadow, outline-color",
    width: "100%"
  };

  const labelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight)
  };

  const valueStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.displaySection.fontFamily,
    fontSize: typographyTokens.displaySection.responsive.md.fontSize,
    fontWeight: typographyTokens.displaySection.fontWeight,
    letterSpacing: typographyTokens.displaySection.letterSpacing,
    lineHeight: String(typographyTokens.displaySection.lineHeight)
  };

  const content = (
    <>
      <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space3.value, justifyContent: "space-between" }}>
        <div style={labelStyle}>{label}</div>
        {icon ? (
          <span aria-hidden="true" style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "inline-flex", justifyContent: "center" }}>
            {icon}
          </span>
        ) : null}
      </div>
      <div style={valueStyle}>{value}</div>
    </>
  );

  if (!isInteractive) {
    return (
      <article className={className} style={cardStyle}>
        {content}
      </article>
    );
  }

  return (
    <button
      aria-pressed={selected || undefined}
      className={className}
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
      style={cardStyle}
      type="button"
    >
      {content}
    </button>
  );
}
