import type { CSSProperties, ButtonHTMLAttributes, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { Typography } from "../Typography/Typography.js";

export type TimelineItemProps = {
  actionLabel?: string;
  date: string;
  description: string;
  icon: ReactNode;
  onActionClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  showConnector?: boolean;
  title: string;
};

export function TimelineItem({ actionLabel, date, description, icon, onActionClick, showConnector = true, title }: TimelineItemProps) {
  const wrapperStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `auto minmax(0, 1fr)${actionLabel ? ' auto' : ''}`,
    width: "100%"
  };

  const railStyle: CSSProperties = {
    alignItems: "center",
    display: "grid",
    gridTemplateRows: `auto ${showConnector ? '1fr' : borderWidthPrimitives.border0.value}`,
    justifyItems: "center",
    minHeight: spacingPrimitives.space12.value,
    width: spacingPrimitives.space6.value
  };

  const markerStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.interactive.primary.value,
    borderRadius: '9999px',
    borderStyle: 'solid',
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: 'inline-flex',
    height: spacingPrimitives.space6.value,
    justifyContent: 'center',
    width: spacingPrimitives.space6.value
  };

  const connectorStyle: CSSProperties = {
    backgroundColor: semanticTokens.border.default.value,
    marginTop: spacingPrimitives.space2.value,
    width: borderWidthPrimitives.border1.value,
    height: '100%'
  };

  return (
    <div style={wrapperStyle}>
      <div aria-hidden="true" style={railStyle}>
        <span style={markerStyle}>{icon}</span>
        {showConnector ? <span style={connectorStyle} /> : null}
      </div>
      <div style={{ display: 'grid', gap: spacingPrimitives.space1.value, minWidth: 0, paddingBottom: spacingPrimitives.space4.value }}>
        <Typography color={semanticTokens.text.secondary.value} variant="caption">{date}</Typography>
        <Typography as="h3" variant="title">{title}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">{description}</Typography>
      </div>
      {actionLabel ? <div style={{ alignSelf: 'start' }}><Button onClick={onActionClick} size="compact" variant="text">{actionLabel}</Button></div> : null}
    </div>
  );
}
