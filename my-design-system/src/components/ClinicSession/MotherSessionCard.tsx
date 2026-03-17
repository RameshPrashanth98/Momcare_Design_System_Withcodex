import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { MetadataRow } from "../MetadataRow/MetadataRow.js";
import { BellIcon, CalendarIcon, ClockIcon, UserCircleIcon, surfaceCardStyle } from "../MotherProfile/icons.js";
import { StatusChip, type StatusChipStatus } from "../StatusChip/StatusChip.js";
import { Switch } from "../Switch/Switch.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

export type MotherSessionCardProps = {
  assignedStaff: string;
  attendanceMeta: string;
  date: string;
  hasToggle?: boolean;
  identifier: string;
  name: string;
  onRecordVisit?: () => void;
  onThirdAction?: () => void;
  onToggle?: (checked: boolean) => void;
  onViewProfile?: () => void;
  showAlert?: boolean;
  status: StatusChipStatus;
  thirdActionLabel: string;
  timeRange: string;
  toggled?: boolean;
};

export function MotherSessionCard({
  assignedStaff,
  attendanceMeta,
  date,
  hasToggle = false,
  identifier,
  name,
  onRecordVisit,
  onThirdAction,
  onToggle,
  onViewProfile,
  showAlert = false,
  status,
  thirdActionLabel,
  timeRange,
  toggled = false
}: MotherSessionCardProps) {
  const wrapperStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const headerStyle: CSSProperties = {
    alignItems: "center",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between"
  };

  const actionRowStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  };

  return (
    <article style={wrapperStyle}>
      <div style={headerStyle}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space2.value }}>
            <Typography as="h3" variant="title">{name}</Typography>
            {showAlert ? <span aria-hidden="true" style={{ display: "inline-flex" }}><BellIcon /></span> : null}
          </div>
          <Typography color="inherit" variant="body">{identifier}</Typography>
        </div>
        <StatusChip label={status === "active" ? "Active" : status === "waiting" ? "Waiting" : status} status={status} />
      </div>

      <MetadataRow leadingIcon={<CalendarIcon />} label={date} />
      <MetadataRow leadingIcon={<ClockIcon />} label={timeRange} />
      <MetadataRow leadingIcon={<UserCircleIcon />} label={`Assigned staff: ${assignedStaff}`} trailingContent={attendanceMeta} />

      {hasToggle ? (
        <MetadataRow label="Ready for consultation" trailingContent={<Switch aria-label={`Toggle ${name} readiness`} checked={toggled} onChange={onToggle} />} />
      ) : null}

      <div style={actionRowStyle}>
        <Button fullWidth onClick={onRecordVisit} size="compact" variant="filled">Record Visit</Button>
        <Button fullWidth onClick={onViewProfile} size="compact" variant="outlined">View Profile</Button>
        <Button fullWidth onClick={onThirdAction} size="compact" variant="tonal">{thirdActionLabel}</Button>
      </div>
    </article>
  );
}
