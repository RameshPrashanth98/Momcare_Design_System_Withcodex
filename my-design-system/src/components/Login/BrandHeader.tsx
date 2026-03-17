import type { CSSProperties, ReactNode } from "react";

import { semanticTokens } from "../../tokens/semantic.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { Typography } from "../Typography/Typography.js";

export type BrandHeaderProps = {
  logo: ReactNode;
  subtitle: string;
  title: string;
};

export function BrandHeader({ logo, subtitle, title }: BrandHeaderProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    justifyItems: "center",
    textAlign: "center"
  };

  return (
    <header style={style}>
      <div style={{ color: semanticTokens.interactive.primaryHover.value, display: "inline-flex" }}>{logo}</div>
      <Typography as="h1" variant="headline">{title}</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="body">{subtitle}</Typography>
    </header>
  );
}
