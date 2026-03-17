import type { ButtonHTMLAttributes, CSSProperties } from "react";

import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type VaccinationRecordCardProps = {
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  status: string;
  subtitle: string;
  supportingText: string;
  title: string;
  tone: StatusChipTone;
};

export function VaccinationRecordCard({ onClick, status, subtitle, supportingText, title, tone }: VaccinationRecordCardProps) {
  const buttonStyle: CSSProperties = {
    ...surfaceCardStyle(),
    appearance: "none",
    cursor: onClick ? "pointer" : "default",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    outlineColor: componentAliases.focusRing.color.value,
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space4.value,
    textAlign: "left",
    width: "100%"
  };

  return (
    <button onClick={onClick} style={buttonStyle} type="button">
      <div style={{ alignItems: "start", display: "flex", gap: spacingPrimitives.space3.value, justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0 }}>
          <Typography as="h3" variant="title">{title}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">{subtitle}</Typography>
        </div>
        <StatusChip label={status} tone={tone} />
      </div>
      <Typography color={semanticTokens.text.secondary.value} variant="body">{supportingText}</Typography>
    </button>
  );
}
