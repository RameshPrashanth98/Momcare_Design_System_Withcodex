import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type MetadataRowProps = {
  className?: string;
  label: ReactNode;
  leadingIcon?: ReactNode;
  trailingContent?: ReactNode;
};

export function MetadataRow({ className, label, leadingIcon, trailingContent }: MetadataRowProps) {
  const rowStyle: CSSProperties = {
    alignItems: "center",
    color: semanticTokens.text.secondary.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `${leadingIcon ? 'auto ' : ''}minmax(0, 1fr)${trailingContent ? ' auto' : ''}`,
    width: "100%"
  };

  const iconStyle: CSSProperties = {
    alignItems: "center",
    color: semanticTokens.text.secondary.value,
    display: "inline-flex",
    fontSize: spacingPrimitives.space4.value,
    justifyContent: "center",
    lineHeight: "1"
  };

  const labelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    minWidth: 0
  };

  return (
    <div className={className} style={rowStyle}>
      {leadingIcon ? <span aria-hidden="true" style={iconStyle}>{leadingIcon}</span> : null}
      <span style={labelStyle}>{label}</span>
      {trailingContent ? <span>{trailingContent}</span> : null}
    </div>
  );
}
