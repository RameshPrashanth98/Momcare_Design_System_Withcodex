import type { CSSProperties } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type SectionHeaderProps = {
  "aria-label"?: string;
  actionLabel?: string;
  className?: string;
  onActionClick?: () => void;
  title: string;
};

export function SectionHeader({
  "aria-label": ariaLabel,
  actionLabel,
  className,
  onActionClick,
  title
}: SectionHeaderProps) {
  const wrapperStyle: CSSProperties = {
    alignItems: "center",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between",
    width: "100%"
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
    paddingInline: spacingPrimitives.space3.value
  };

  return (
    <div aria-label={ariaLabel} className={className} style={wrapperStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {actionLabel && onActionClick ? (
        <button onClick={onActionClick} style={actionStyle} type="button">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
