import type { CSSProperties } from "react";

import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { TimelineItem, type TimelineItemProps } from "./TimelineItem.js";

export type PregnancyTimelineCardProps = {
  ariaLabel: string;
  items: TimelineItemProps[];
};

export function PregnancyTimelineCard({ ariaLabel, items }: PregnancyTimelineCardProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space1.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article aria-label={ariaLabel} style={style}>
      {items.map((item, index) => (
        <TimelineItem
          actionLabel={item.actionLabel}
          date={item.date}
          description={item.description}
          icon={item.icon}
          key={`${item.date}-${item.title}`}
          onActionClick={item.onActionClick}
          showConnector={index < items.length - 1}
          title={item.title}
        />
      ))}
    </article>
  );
}
