import type { CSSProperties, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";

export type MotherCardProps = {
  assignedMidwife: string;
  avatar?: ReactNode;
  className?: string;
  name: string;
  nic: string;
  onRecordVisit?: () => void;
  onViewProfile?: () => void;
  onViewRecords?: () => void;
  riskStatus: StatusChipTone;
  showAlertIcon?: boolean;
  trimester: string;
};

export function MotherCard({
  assignedMidwife,
  avatar,
  className,
  name,
  nic,
  onRecordVisit,
  onViewProfile,
  onViewRecords,
  riskStatus,
  showAlertIcon = false,
  trimester
}: MotherCardProps) {
  const cardStyle: CSSProperties = {
    backgroundColor: componentAliases.card.background.value,
    borderColor: componentAliases.card.border.value,
    borderRadius: componentAliases.card.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: componentAliases.card.shadow.value,
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const topStyle: CSSProperties = {
    alignItems: "start",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "auto minmax(0, 1fr) auto"
  };

  const avatarStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: colorPrimitives.roseMist.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    height: spacingPrimitives.space12.value,
    justifyContent: "center",
    width: spacingPrimitives.space12.value
  };

  const actionsStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  };

  return (
    <article className={className} style={cardStyle}>
      <div style={topStyle}>
        <span aria-hidden="true" style={avatarStyle}>{avatar ?? name.slice(0, 2).toUpperCase()}</span>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: "0" }}>
          <Typography as="h3" variant="headline">{name}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">NIC: {nic}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">Trimester: {trimester}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">Midwife: {assignedMidwife}</Typography>
        </div>
        <div style={{ alignItems: "end", display: "grid", gap: spacingPrimitives.space2.value, justifyItems: "end" }}>
          <StatusChip label={riskStatus === "high-risk" ? "High Risk" : "Normal"} tone={riskStatus} />
          {showAlertIcon ? <span aria-label="Attention needed" style={{ color: semanticTokens.feedback.error.value }}>!</span> : null}
        </div>
      </div>
      <div style={actionsStyle}>
        <Button onClick={onViewProfile} size="compact" variant="text">View Profile</Button>
        <Button onClick={onRecordVisit} size="compact" variant="filled">Record Visit</Button>
        <Button onClick={onViewRecords} size="compact" variant="tonal">Records</Button>
      </div>
    </article>
  );
}
