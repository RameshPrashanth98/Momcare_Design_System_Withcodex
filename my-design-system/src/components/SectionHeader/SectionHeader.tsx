import type { CSSProperties, ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type SectionHeaderProps = {
  "aria-label"?: string;
  actionLabel?: string;
  className?: string;
  onActionClick?: () => void;
  onTrailingIconClick?: () => void;
  subtitle?: ReactNode;
  title: string;
  trailingAction?: ReactNode;
  trailingIcon?: ReactNode;
};

export function SectionHeader({
  "aria-label": ariaLabel,
  actionLabel,
  className,
  onActionClick,
  onTrailingIconClick,
  subtitle,
  title,
  trailingAction,
  trailingIcon
}: SectionHeaderProps) {
  const wrapperStyle: CSSProperties = {
    alignItems: subtitle ? "start" : "center",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: subtitle ? spacingPrimitives.space1.value : borderWidthPrimitives.border0.value,
    minWidth: 0
  };

  const titleStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyLg.fontFamily,
    fontSize: typographyTokens.bodyLg.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.bodyLg.letterSpacing,
    lineHeight: String(typographyTokens.bodyLg.lineHeight),
    margin: "0"
  };

  const subtitleStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const actionStyle: CSSProperties = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: componentAliases.button.radius.value,
    color: semanticTokens.interactive.primaryHover.value,
    cursor: "pointer",
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    outlineColor: componentAliases.focusRing.color.value,
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: borderWidthPrimitives.border0.value,
    paddingBlock: spacingPrimitives.space2.value,
    paddingInline: spacingPrimitives.space3.value,
    whiteSpace: "nowrap"
  };

  const iconButtonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: componentAliases.button.radius.value,
    color: semanticTokens.text.secondary.value,
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    outlineColor: componentAliases.focusRing.color.value,
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space2.value
  };

  const resolvedTrailingAction = trailingAction ?? (trailingIcon ? (
    <button aria-label={`Open ${title} action`} onClick={onTrailingIconClick} style={iconButtonStyle} type="button">
      <span aria-hidden="true" style={{ display: "inline-flex", lineHeight: "1" }}>{trailingIcon}</span>
    </button>
  ) : actionLabel && onActionClick ? (
    <button onClick={onActionClick} style={actionStyle} type="button">
      {actionLabel}
    </button>
  ) : null);

  return (
    <div aria-label={ariaLabel} className={className} style={wrapperStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        {subtitle ? <p style={subtitleStyle}>{subtitle}</p> : null}
      </div>
      {resolvedTrailingAction ? <div>{resolvedTrailingAction}</div> : null}
    </div>
  );
}
