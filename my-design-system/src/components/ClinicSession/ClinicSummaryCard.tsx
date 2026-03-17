import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { MetadataRow } from "../MetadataRow/MetadataRow.js";
import { CalendarIcon, ClinicIcon, ClockIcon, UserCircleIcon, surfaceCardStyle } from "../MotherProfile/icons.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { StatusChip, type StatusChipStatus } from "../StatusChip/StatusChip.js";
import { Switch } from "../Switch/Switch.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

export type ClinicSummaryCardProps = {
  assignedMidwife: string;
  date: string;
  isActive: boolean;
  location: string;
  onToggleActive?: (checked: boolean) => void;
  onViewClinic?: () => void;
  onViewMothers?: () => void;
  onViewProfile?: () => void;
  status: StatusChipStatus;
  time: string;
  title: string;
};

export function ClinicSummaryCard({
  assignedMidwife,
  date,
  isActive,
  location,
  onToggleActive,
  onViewClinic,
  onViewMothers,
  onViewProfile,
  status,
  time,
  title
}: ClinicSummaryCardProps) {
  const wrapperStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const topRowStyle: CSSProperties = {
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
      <div style={topRowStyle}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <Typography as="h3" variant="title">{title}</Typography>
          <Typography color="inherit" variant="body">{location}</Typography>
        </div>
        <StatusChip label={status === "active" ? "Active" : status === "waiting" ? "Waiting" : title} status={status} />
      </div>

      <MetadataRow leadingIcon={<ClinicIcon />} label={location} />
      <MetadataRow leadingIcon={<CalendarIcon />} label={date} trailingContent={<MetadataRow leadingIcon={<ClockIcon />} label={time} />} />
      <MetadataRow leadingIcon={<UserCircleIcon />} label={`Assigned midwife: ${assignedMidwife}`} />

      <SectionHeader
        subtitle={isActive ? "Clinic session is live for registered mothers." : "Activate the clinic session when staff are ready."}
        title="Clinic Session"
        trailingAction={<Switch aria-label="Toggle clinic active status" checked={isActive} onChange={onToggleActive} />}
      />

      <div style={actionRowStyle}>
        <Button fullWidth onClick={onViewClinic} size="compact" variant="outlined">View Clinic</Button>
        <Button fullWidth onClick={onViewProfile} size="compact" variant="tonal">View Profile</Button>
        <Button fullWidth onClick={onViewMothers} size="compact" variant="filled">View Mothers</Button>
      </div>
    </article>
  );
}
