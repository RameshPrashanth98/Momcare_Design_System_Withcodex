import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { Typography } from "../Typography/Typography.js";

export type FooterInfoProps = {
  logo: ReactNode;
  organization: string;
  version: string;
};

export function FooterInfo({ logo, organization, version }: FooterInfoProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    justifyItems: "center",
    textAlign: "center"
  };

  return (
    <footer style={style}>
      <div style={{ color: semanticTokens.interactive.primaryHover.value, display: "inline-flex" }}>{logo}</div>
      <Typography color={semanticTokens.text.secondary.value} variant="label">{organization}</Typography>
      <Typography color={semanticTokens.text.muted.value} variant="caption">{version}</Typography>
    </footer>
  );
}
