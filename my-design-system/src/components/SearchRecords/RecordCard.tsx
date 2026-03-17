import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { ActionButtonGrid } from "./ActionButtonGrid.js";
import { StatusChip, type StatusChipTone } from "../StatusChip/StatusChip.js";
import { Typography } from "../Typography/Typography.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type RecordCardProps = {
  clinicNumber: string;
  midwife: string;
  name: string;
  nic: string;
  onLabReports?: () => void;
  onTimeline?: () => void;
  onVaccinationRecords?: () => void;
  onWeightAndHealthTracking?: () => void;
  status: StatusChipTone;
  trimester: string;
};

export function RecordCard({ clinicNumber, midwife, name, nic, onLabReports, onTimeline, onVaccinationRecords, onWeightAndHealthTracking, status, trimester }: RecordCardProps) {
  const style: CSSProperties = {
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

  return (
    <article style={style}>
      <div style={headerStyle}>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
          <Typography as="h3" variant="title">{name}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">NIC: {nic}</Typography>
        </div>
        <StatusChip label={status === "high-risk" ? "High Risk" : "Normal"} tone={status} />
      </div>
      <div style={{ display: "grid", gap: spacingPrimitives.space2.value }}>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Clinic No: {clinicNumber}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Trimester: {trimester}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Assigned Midwife: {midwife}</Typography>
      </div>
      <ActionButtonGrid
        actions={
          <>
            <Button fullWidth onClick={onVaccinationRecords} size="compact" variant="outlined">Vaccination Records</Button>
            <Button fullWidth onClick={onWeightAndHealthTracking} size="compact" variant="outlined">Weight & Health Tracking</Button>
            <Button fullWidth onClick={onLabReports} size="compact" variant="tonal">Lab Reports</Button>
            <Button fullWidth onClick={onTimeline} size="compact" variant="tonal">Timeline</Button>
          </>
        }
      />
    </article>
  );
}
