import type { CSSProperties } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type PregnancyHistoryEntry = {
  label: string;
  value: string;
};

export type PregnancyHistoryCardProps = {
  className?: string;
  entries: PregnancyHistoryEntry[];
  notesLabel?: string;
  year: string;
};

export function PregnancyHistoryCard({ className, entries, notesLabel, year }: PregnancyHistoryCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const yearStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyLg.fontFamily,
    fontSize: typographyTokens.bodyLg.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.bodyLg.letterSpacing,
    lineHeight: String(typographyTokens.bodyLg.lineHeight),
    margin: "0"
  };

  const entryLabelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight),
    margin: "0"
  };

  const entryValueStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const entryCardStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    display: "grid",
    gap: spacingPrimitives.space1.value,
    padding: spacingPrimitives.space3.value
  };

  return (
    <article className={className} style={cardStyle}>
      <h3 style={yearStyle}>{year}</h3>
      <div
        style={{
          display: "grid",
          gap: spacingPrimitives.space3.value,
          gridTemplateColumns: `repeat(auto-fit, minmax(calc(${spacingPrimitives.space24.value} + ${spacingPrimitives.space12.value}), 1fr))`
        }}
      >
        {entries.map((entry) => (
          <div key={entry.label} style={entryCardStyle}>
            <p style={entryLabelStyle}>{entry.label}</p>
            <p style={entryValueStyle}>{entry.value}</p>
          </div>
        ))}
      </div>
      {notesLabel ? <p style={entryLabelStyle}>{notesLabel}</p> : null}
    </article>
  );
}
