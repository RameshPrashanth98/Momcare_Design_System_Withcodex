import type { CSSProperties } from "react";

import { StatusChip } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type BloodPressureRecordItemProps = {
  date: string;
  status: "Normal" | "High";
  value: string;
};

export function BloodPressureRecordItem({ date, status, value }: BloodPressureRecordItemProps) {
  const tone = status === "High" ? "high-risk" : "normal";

  const itemStyle: CSSProperties = {
    alignItems: "center",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between"
  };

  return (
    <div style={itemStyle}>
      <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
        <Typography as="h3" variant="title">{value}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">{date}</Typography>
      </div>
      <StatusChip label={status} tone={tone} />
    </div>
  );
}
