import type { CSSProperties, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { avatarShell, UserCircleIcon, surfaceCardStyle } from "./icons.js";

export type SummaryCardProps = {
  assignedMidwife: string;
  avatar?: ReactNode;
  className?: string;
  name: string;
  nic: string;
  onRecordVisit?: () => void;
  onViewProfile?: () => void;
  onViewRecords?: () => void;
  riskStatus: StatusChipTone;
  trimester: string;
};

export function SummaryCard({
  assignedMidwife,
  avatar,
  className,
  name,
  nic,
  onRecordVisit,
  onViewProfile,
  onViewRecords,
  riskStatus,
  trimester
}: SummaryCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const topStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    gridTemplateColumns: "auto minmax(0, 1fr)"
  };

  const metaLabelStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight),
    margin: "0"
  };

  const metaValueStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const infoPillStyle: CSSProperties = {
    alignItems: "center",
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
      <div style={topStyle}>
        {avatarShell(avatar ?? <UserCircleIcon />)}
        <div style={{ display: "grid", gap: spacingPrimitives.space3.value, minWidth: "0" }}>
          <div style={{ display: "grid", gap: spacingPrimitives.space2.value }}>
            <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space2.value, justifyContent: "space-between" }}>
              <Typography as="h2" variant="headline">{name}</Typography>
              <StatusChip label={riskStatus === "high-risk" ? "High Risk" : "Normal"} tone={riskStatus} />
            </div>
            <Typography color={semanticTokens.text.secondary.value} variant="body">NIC: {nic}</Typography>
          </div>
          <div style={{ display: "grid", gap: spacingPrimitives.space3.value, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div style={infoPillStyle}>
              <p style={metaLabelStyle}>Trimester</p>
              <p style={metaValueStyle}>{trimester}</p>
            </div>
            <div style={infoPillStyle}>
              <p style={metaLabelStyle}>Assigned Midwife</p>
              <p style={metaValueStyle}>{assignedMidwife}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gap: spacingPrimitives.space3.value, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <Button fullWidth onClick={onViewProfile} size="compact" variant="text">View Profile</Button>
        <Button fullWidth onClick={onRecordVisit} size="compact" variant="filled">Record Visit</Button>
        <Button fullWidth onClick={onViewRecords} size="compact" variant="tonal">Records</Button>
      </div>
    </article>
  );
}
