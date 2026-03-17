import type { CSSProperties, ReactNode } from "react";

import { Button } from "../Button/Button.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type NotificationCardType = "alert" | "appointment" | "vaccine" | "system";

export type NotificationCardProps = {
  "aria-label"?: string;
  actionLabel?: string;
  className?: string;
  leadingIcon?: ReactNode;
  onActionClick?: () => void;
  primaryText: string;
  read?: boolean;
  secondaryText: string;
  tertiaryText?: string;
  timestamp: string;
  title: string;
  type: NotificationCardType;
};

const typeTokens = {
  alert: {
    accent: semanticTokens.feedback.error.value,
    surface: colorPrimitives.roseMist.value
  },
  appointment: {
    accent: semanticTokens.interactive.primaryHover.value,
    surface: semanticTokens.surface.subtle.value
  },
  vaccine: {
    accent: colorPrimitives.sageDeep.value,
    surface: colorPrimitives.sageLight.value
  },
  system: {
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
  "aria-label": ariaLabel,
  actionLabel,
  className,
  leadingIcon,
  onActionClick,
  primaryText,
  read = false,
  secondaryText,
  tertiaryText,
  timestamp,
  title,
  type
}: NotificationCardProps) {
  const activeType = typeTokens[type];
  const actionVariant = getActionVariant(actionLabel);

  const wrapperStyle: CSSProperties = {
    backgroundColor: read ? componentAliases.card.background.value : activeType.surface,
    borderColor: read ? componentAliases.card.border.value : activeType.accent,
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

  const textStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };

  const tertiaryStyle: CSSProperties = {
    color: activeType.accent,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    margin: "0"
  };

  const timestampStyle: CSSProperties = {
    color: semanticTokens.text.muted.value,
    fontFamily: typographyTokens.caption.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.caption.fontWeight,
    letterSpacing: typographyTokens.caption.letterSpacing,
    lineHeight: String(typographyTokens.caption.lineHeight)
  };

  return (
    <article aria-label={ariaLabel ?? `${type} notification`} className={className} style={wrapperStyle}>
      <div style={bodyStyle}>
        {leadingIcon ? (
          <span aria-hidden="true" style={iconStyle}>
            {leadingIcon}
          </span>
        ) : null}
        <div style={{ display: "grid", gap: spacingPrimitives.space2.value, minWidth: "0" }}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={textStyle}>{primaryText}</p>
          <p style={textStyle}>{secondaryText}</p>
          {tertiaryText ? <p style={tertiaryStyle}>{tertiaryText}</p> : null}
        </div>
        {actionLabel && actionVariant ? (
          <div style={{ alignSelf: "center" }}>
            <Button aria-label={actionLabel} onClick={onActionClick} size="compact" variant={actionVariant}>
              {actionLabel}
            </Button>
          </div>
        ) : null}
      </div>
      <div style={timestampStyle}>{timestamp}</div>
    </article>
  );
}
