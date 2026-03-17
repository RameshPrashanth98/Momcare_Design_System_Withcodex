import type { CSSProperties } from "react";

import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { MilestoneItem, type MilestoneItemProps } from "./MilestoneItem.js";

export type MilestoneListCardProps = {
  ariaLabel: string;
  items: MilestoneItemProps[];
};

export function MilestoneListCard({ ariaLabel, items }: MilestoneListCardProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: 'grid',
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article aria-label={ariaLabel} style={style}>
      {items.map((item, index) => (
        <MilestoneItem icon={item.icon} key={`${item.title}-${index}`} showDivider={index < items.length - 1} supportingText={item.supportingText} title={item.title} />
      ))}
    </article>
  );
}
