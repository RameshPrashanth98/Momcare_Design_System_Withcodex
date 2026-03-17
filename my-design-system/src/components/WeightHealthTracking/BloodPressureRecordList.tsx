import type { CSSProperties } from "react";

import { Divider } from "../Divider/Divider.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { BloodPressureRecordItem, type BloodPressureRecordItemProps } from "./BloodPressureRecordItem.js";

export type BloodPressureRecordListProps = {
  items: BloodPressureRecordItemProps[];
};

export function BloodPressureRecordList({ items }: BloodPressureRecordListProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article style={cardStyle}>
      <Typography as="h3" variant="title">Blood Pressure Records</Typography>
      {items.map((item, index) => (
        <div key={`${item.date}-${item.value}`} style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <BloodPressureRecordItem date={item.date} status={item.status} value={item.value} />
          {index < items.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </article>
  );
}
