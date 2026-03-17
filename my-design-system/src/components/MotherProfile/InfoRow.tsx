import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type InfoRowProps = {
  className?: string;
  label: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  trailingIcon?: ReactNode;
  value: string;
};

export function InfoRow({ className, label, onClick, trailingIcon, value }: InfoRowProps) {
  const containerStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: semanticTokens.surface.base.value,
    border: "none",
    borderBottomColor: semanticTokens.border.subtle.value,
    borderBottomStyle: "solid",
    borderBottomWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.text.primary.value,
    cursor: onClick ? "pointer" : "default",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "minmax(0, 1fr) auto",
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space1.value,
    textAlign: "left",
    width: "100%"
  };

  const labelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const valueStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    margin: "0"
  };

  const trailingStyle: CSSProperties = {
    alignItems: "center",
    borderRadius: radiusPrimitives.radiusFull.value,
    color: semanticTokens.text.secondary.value,
    display: "inline-flex",
    fontSize: typographyTokens.bodyLg.fontSize,
    justifyContent: "center",
    minHeight: spacingPrimitives.space8.value,
    minWidth: spacingPrimitives.space8.value
  };

  const content = (
    <>
      <span style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: "0" }}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>{value}</span>
      </span>
      {trailingIcon ? <span style={trailingStyle}>{trailingIcon}</span> : null}
    </>
  );

  if (onClick) {
    return (
      <button className={className} onClick={onClick} style={containerStyle} type="button">
        {content}
      </button>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      {content}
    </div>
  );
}
