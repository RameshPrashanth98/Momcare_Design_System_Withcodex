import type { CSSProperties } from "react";

import { NotificationCard, type NotificationCardProps } from "../NotificationCard/NotificationCard.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type NotificationsListProps = {
  className?: string;
  emptyState?: string;
  items: NotificationCardProps[];
  onItemAction?: (item: NotificationCardProps) => void;
};

export function NotificationsList({ className, emptyState = "No notifications available.", items, onItemAction }: NotificationsListProps) {
  if (items.length === 0) {
    const emptyStyle: CSSProperties = {
      color: semanticTokens.text.secondary.value,
      fontFamily: typographyTokens.bodyMd.fontFamily,
      fontSize: typographyTokens.bodyMd.fontSize,
      fontWeight: typographyTokens.bodyMd.fontWeight,
      letterSpacing: typographyTokens.bodyMd.letterSpacing,
      lineHeight: String(typographyTokens.bodyMd.lineHeight),
      margin: "0",
      padding: spacingPrimitives.space4.value,
      textAlign: "center"
    };

    return <p className={className} style={emptyStyle}>{emptyState}</p>;
  }

  return (
    <div className={className} style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      {items.map((item, index) => (
        <NotificationCard key={`${item.type}-${item.title}-${index}`} {...item} onActionClick={() => onItemAction?.(item)} />
      ))}
    </div>
  );
}
