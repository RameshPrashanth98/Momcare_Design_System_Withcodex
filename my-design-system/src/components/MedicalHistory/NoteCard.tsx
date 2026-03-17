import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type NoteCardProps = {
  className?: string;
  content: string;
  title?: string;
};

export function NoteCard({ className, content, title = "Clinical Note" }: NoteCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  const titleStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    margin: "0"
  };

  const contentStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  return (
    <article className={className} style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={contentStyle}>{content}</p>
    </article>
  );
}
