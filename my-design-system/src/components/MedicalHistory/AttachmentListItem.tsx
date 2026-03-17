import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type AttachmentListItemProps = {
  className?: string;
  date: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  title: string;
  trailingIcon?: ReactNode;
};

export function AttachmentListItem({ className, date, onClick, title, trailingIcon }: AttachmentListItemProps) {
  const style: CSSProperties = {
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

  const titleStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const dateStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight),
    margin: "0"
  };

  const content = (
    <>
      <span style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: "0" }}>
        <span style={titleStyle}>{title}</span>
        <span style={dateStyle}>{date}</span>
      </span>
      {trailingIcon ? <span aria-hidden="true" style={{ color: semanticTokens.text.secondary.value }}>{trailingIcon}</span> : null}
    </>
  );

  if (onClick) {
    return (
      <button className={className} onClick={onClick} style={style} type="button">
        {content}
      </button>
    );
  }

  return <div className={className} style={style}>{content}</div>;
}
