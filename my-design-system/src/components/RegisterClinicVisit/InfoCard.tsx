import type { CSSProperties, ReactNode } from "react";

import { MetadataRow } from "../MetadataRow/MetadataRow.js";
import { BellIcon, CalendarIcon, UserCircleIcon, surfaceCardStyle } from "../MotherProfile/icons.js";
import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type InfoCardProps = {
  alert?: boolean;
  assignedMidwife: string;
  children?: ReactNode;
  date: string;
  identifier: string;
  name: string;
  riskLabel: string;
  status: StatusChipTone;
};

export function InfoCard({ alert = false, assignedMidwife, children, date, identifier, name, riskLabel, status }: InfoCardProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article style={style}>
      <div style={{ alignItems: "start", display: "flex", gap: spacingPrimitives.space3.value, justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space2.value }}>
            <Typography as="h3" variant="title">{name}</Typography>
            {alert ? <span aria-hidden="true" style={{ color: semanticTokens.feedback.warning.value, display: "inline-flex" }}><BellIcon /></span> : null}
          </div>
          <Typography color={semanticTokens.text.secondary.value} variant="body">NIC: {identifier}</Typography>
        </div>
        <StatusChip label={status === "active" ? "Active" : status} tone={status} />
      </div>
      <MetadataRow leadingIcon={<CalendarIcon />} label={date} trailingContent={<StatusChip label={riskLabel} tone="high-risk" />} />
      <MetadataRow leadingIcon={<UserCircleIcon />} label={`Assigned midwife: ${assignedMidwife}`} />
      {children}
    </article>
  );
}
