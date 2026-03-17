import type { CSSProperties, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type NotificationCardType = "high-risk-alert" | "appointment-reminder" | "vaccine-reminder" | "system-alert";

export type NotificationCardProps = {
  actionLabel?: string;
  className?: string;
  details: string;
  leadingIcon?: ReactNode;
  onActionClick?: () => void;
  read?: boolean;
  timestamp: string;
  title: string;
  type: NotificationCardType;
  urgent?: boolean;
};

const typeTokens = {
  "high-risk-alert": {
    accent: semanticTokens.feedback.error.value,
    surface: colorPrimitives.roseMist.value
  },
  "appointment-reminder": {
    accent: semanticTokens.interactive.primaryHover.value,
    surface: semanticTokens.surface.subtle.value
  },
  "vaccine-reminder": {
    accent: colorPrimitives.sageDeep.value,
    surface: colorPrimitives.sageLight.value
  },
  "system-alert": {
    accent: semanticTokens.feedback.info.value,
    surface: semanticTokens.surface.muted.value
  }
} as const;

function getActionVariant(actionLabel: string | undefined) {
  if (!actionLabel) {
    return undefined;
  }

  return actionLabel.toLowerCase().includes("mark") ? "tonal" : "filled";
}

export function NotificationCard({
  actionLabel,
  className,
  details,
  leadingIcon,
  onActionClick,
  read = false,
  timestamp,
  title,
  type,
  urgent = false
}: NotificationCardProps) {
  const activeType = typeTokens[type];
  const actionVariant = getActionVariant(actionLabel);

  const wrapperStyle: CSSProperties = {
    backgroundColor: read ? componentAliases.card.background.value : activeType.surface,
    borderColor: urgent ? activeType.accent : componentAliases.card.border.value,
    borderRadius: componentAliases.card.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: read ? shadowPrimitives.shadowSm.value : componentAliases.card.shadow.value,
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const bodyStyle: CSSProperties = {
    alignItems: "start",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `${leadingIcon ? "auto " : ""}minmax(0, 1fr)${actionLabel ? " auto" : ""}`
  };

  const iconStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: componentAliases.card.background.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    color: activeType.accent,
    display: "inline-flex",
    height: spacingPrimitives.space10.value,
    justifyContent: "center",
    width: spacingPrimitives.space10.value
  };

  const titleStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const detailsStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const timestampStyle: CSSProperties = {
    color: semanticTokens.text.muted.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight),
    margin: "0"
  };

  return (
    <article className={className} style={wrapperStyle}>
      <div style={bodyStyle}>
        {leadingIcon ? <span aria-hidden="true" style={iconStyle}>{leadingIcon}</span> : null}
        <div style={{ display: "grid", gap: spacingPrimitives.space2.value, minWidth: "0" }}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={detailsStyle}>{details}</p>
          <p style={timestampStyle}>{timestamp}</p>
        </div>
        {actionLabel && actionVariant ? (
          <div style={{ alignSelf: "center", justifySelf: "end" }}>
            <Button aria-label={actionLabel} onClick={onActionClick} size="compact" variant={actionVariant}>{actionLabel}</Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
