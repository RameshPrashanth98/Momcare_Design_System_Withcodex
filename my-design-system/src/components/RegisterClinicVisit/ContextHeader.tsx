import type { CSSProperties, ReactNode } from "react";

import { IconButton } from "../IconButton/IconButton.js";
import { ArrowLeftIcon } from "../MotherProfile/icons.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type ContextHeaderProps = {
  onBack?: () => void;
  subtitle: ReactNode;
  title: string;
};

export function ContextHeader({ onBack, subtitle, title }: ContextHeaderProps) {
  const style: CSSProperties = {
    alignItems: "center",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: onBack ? "auto minmax(0, 1fr)" : "minmax(0, 1fr)"
  };

  return (
    <div style={style}>
      {onBack ? <IconButton aria-label="Go back" icon={<ArrowLeftIcon />} onClick={onBack} variant="standard" /> : null}
      <div style={{ borderBottomColor: semanticTokens.border.subtle.value, borderBottomStyle: "solid", borderBottomWidth: borderWidthPrimitives.border1.value, display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0, paddingBottom: spacingPrimitives.space3.value }}>
        <h2 style={{ color: semanticTokens.text.primary.value, fontFamily: typographyTokens.bodyLg.fontFamily, fontSize: typographyTokens.bodyLg.fontSize, fontWeight: typographyTokens.labelSm.fontWeight, letterSpacing: typographyTokens.bodyLg.letterSpacing, lineHeight: String(typographyTokens.bodyLg.lineHeight), margin: 0 }}>{title}</h2>
        <p style={{ color: semanticTokens.text.secondary.value, fontFamily: typographyTokens.bodyMd.fontFamily, fontSize: typographyTokens.bodyMd.fontSize, fontWeight: typographyTokens.bodyMd.fontWeight, letterSpacing: typographyTokens.bodyMd.letterSpacing, lineHeight: String(typographyTokens.bodyMd.lineHeight), margin: 0 }}>{subtitle}</p>
      </div>
    </div>
  );
}
