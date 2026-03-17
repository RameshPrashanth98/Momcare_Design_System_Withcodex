import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { MetadataRow } from "../MetadataRow/MetadataRow.js";
import { CalendarIcon, ClockIcon, ClinicIcon, UserCircleIcon, surfaceCardStyle } from "../MotherProfile/icons.js";
import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type ClinicSessionCardProps = {
  clinicType: string;
  date: string;
  disabledActions?: boolean;
  expectedMothers: string;
  location: string;
  midwife: string;
  onStartClinic?: () => void;
  onViewMothers?: () => void;
  onViewSession?: () => void;
  status: StatusChipTone;
  time: string;
  title: string;
};

export function ClinicSessionCard({ clinicType, date, disabledActions = false, expectedMothers, location, midwife, onStartClinic, onViewMothers, onViewSession, status, time, title }: ClinicSessionCardProps) {
  const wrapperStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const headerStyle: CSSProperties = {
    alignItems: "start",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between"
  };

  const actionStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  };

  const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <article style={wrapperStyle}>
      <div style={headerStyle}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <Typography as="h3" variant="title">{title}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">{location}</Typography>
        </div>
        <StatusChip label={statusLabel} tone={status} />
      </div>
      <MetadataRow leadingIcon={<ClinicIcon />} label={clinicType} trailingContent={expectedMothers} />
      <MetadataRow leadingIcon={<CalendarIcon />} label={date} />
      <MetadataRow leadingIcon={<ClockIcon />} label={time} />
      <MetadataRow leadingIcon={<UserCircleIcon />} label={`Midwife: ${midwife}`} />
      <div style={actionStyle}>
        <Button disabled={disabledActions} fullWidth onClick={onViewSession} size="compact" variant="outlined">View Session</Button>
        <Button disabled={disabledActions || status === "completed"} fullWidth onClick={onStartClinic} size="compact" variant="filled">Start Clinic</Button>
        <Button disabled={disabledActions} fullWidth onClick={onViewMothers} size="compact" variant="tonal">Mothers List</Button>
      </div>
    </article>
  );
}
