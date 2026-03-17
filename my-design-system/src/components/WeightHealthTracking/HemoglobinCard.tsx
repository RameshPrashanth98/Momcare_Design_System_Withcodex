import type { CSSProperties } from "react";

import { StatusChip } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type HemoglobinCardProps = {
  date: string;
  status: string;
  title: string;
  value: string;
};

export function HemoglobinCard({ date, status, title, value }: HemoglobinCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article style={cardStyle}>
      <div style={{ alignItems: "start", display: "flex", gap: spacingPrimitives.space3.value, justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <Typography as="h3" variant="title">{title}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">{date}</Typography>
        </div>
        <StatusChip label={status} tone="normal" />
      </div>
      <Typography as="p" variant="headline">{value}</Typography>
    </article>
  );
}
