import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { CalendarIcon, ShieldIcon, UserCircleIcon, avatarShell, surfaceCardStyle } from "../MotherProfile/icons.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MotherSummaryCardProps = {
  avatar?: ReactNode;
  edd?: string;
  midwife: string;
  name: string;
  nic: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  riskLabel?: string;
  status: StatusChipTone;
  trimester: string;
};

export function MotherSummaryCard({ avatar, edd, midwife, name, nic, onClick, riskLabel, status, trimester }: MotherSummaryCardProps) {
  const contentStyle: CSSProperties = {
    ...surfaceCardStyle(),
    alignItems: "start",
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    textAlign: "left"
  };

  const interactiveStyle: CSSProperties = {
    appearance: "none",
    backgroundColor: contentStyle.backgroundColor,
    borderColor: contentStyle.borderColor,
    borderRadius: contentStyle.borderRadius,
    borderStyle: contentStyle.borderStyle,
    borderWidth: contentStyle.borderWidth,
    boxShadow: contentStyle.boxShadow,
    cursor: onClick ? "pointer" : "default",
    outlineColor: componentAliases.focusRing.color.value,
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: borderWidthPrimitives.border0.value,
    padding: contentStyle.padding,
    width: "100%"
  };

  const avatarNode = avatar ?? avatarShell(<UserCircleIcon />);

  return (
    <button onClick={onClick} style={interactiveStyle} type="button">
      <div style={{ alignItems: "start", display: "flex", gap: spacingPrimitives.space3.value, justifyContent: "space-between" }}>
        <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space3.value, minWidth: 0 }}>
          <span style={{ display: "inline-flex", flexShrink: 0 }}>{avatarNode}</span>
          <div style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0 }}>
            <Typography as="h3" variant="title">{name}</Typography>
            <Typography color={semanticTokens.text.secondary.value} variant="body">NIC: {nic}</Typography>
            <Typography color={semanticTokens.text.secondary.value} variant="body">Trimester: {trimester}</Typography>
          </div>
        </div>
        <StatusChip label={status === "high-risk" ? "High Risk" : status} tone={status} />
      </div>
      <div style={{ display: "grid", gap: spacingPrimitives.space2.value }}>
        {riskLabel ? (
          <div style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "flex", gap: spacingPrimitives.space2.value }}>
            <span aria-hidden="true" style={{ display: "inline-flex" }}><ShieldIcon /></span>
            <Typography color={semanticTokens.text.secondary.value} variant="body">Risk: {riskLabel}</Typography>
          </div>
        ) : null}
        {edd ? (
          <div style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "flex", gap: spacingPrimitives.space2.value }}>
            <span aria-hidden="true" style={{ display: "inline-flex" }}><CalendarIcon /></span>
            <Typography color={semanticTokens.text.secondary.value} variant="body">EDD: {edd}</Typography>
          </div>
        ) : null}
        <div style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "flex", gap: spacingPrimitives.space2.value }}>
          <span aria-hidden="true" style={{ display: "inline-flex" }}><UserCircleIcon /></span>
          <Typography color={semanticTokens.text.secondary.value} variant="body">Assigned Midwife: {midwife}</Typography>
        </div>
      </div>
    </button>
  );
}
