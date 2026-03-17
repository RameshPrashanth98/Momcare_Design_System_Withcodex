import type { CSSProperties, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type LabReportCardProps = {
  date: string;
  leadingIcon?: ReactNode;
  onViewReport?: () => void;
  title: string;
  uploadedBy: string;
};

export function LabReportCard({ date, leadingIcon, onViewReport, title, uploadedBy }: LabReportCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    alignItems: "center",
    display: "flex",
    gap: spacingPrimitives.space3.value,
    justifyContent: "space-between",
    padding: spacingPrimitives.space4.value
  };

  return (
    <article style={cardStyle}>
      <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space3.value, minWidth: 0 }}>
        {leadingIcon ? <span aria-hidden="true" style={{ color: semanticTokens.interactive.primaryHover.value, display: "inline-flex", flexShrink: 0 }}>{leadingIcon}</span> : null}
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0 }}>
          <Typography as="h3" variant="title">{title}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">{date}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">Uploaded by {uploadedBy}</Typography>
        </div>
      </div>
      <Button onClick={onViewReport} size="compact" variant="outlined">View Report</Button>
    </article>
  );
}
