import type { CSSProperties, ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type TopAppBarProps = {
  actions?: ReactNode[];
  className?: string;
  navigationIcon?: ReactNode;
  title: string;
};

export function TopAppBar({
  actions = [],
  className,
  navigationIcon,
  title
}: TopAppBarProps) {
  const wrapperStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderBottomColor: semanticTokens.border.subtle.value,
    borderBottomStyle: "solid",
    borderBottomWidth: borderWidthPrimitives.border1.value,
    boxShadow: shadowPrimitives.shadowXs.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `${navigationIcon ? "auto " : ""}minmax(0, 1fr) auto`,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value,
    position: "relative",
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

  const actionsStyle: CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: spacingPrimitives.space2.value,
    justifyContent: "flex-end"
  };

  return (
    <header className={className} style={wrapperStyle}>
      {navigationIcon ? <div>{navigationIcon}</div> : null}
      <h1 style={titleStyle}>{title}</h1>
      <div style={actionsStyle}>
        {actions.map((action, index) => (
          <div key={`action-${index}`}>{action}</div>
        ))}
      </div>
    </header>
  );
}
