import type { CSSProperties } from "react";

import { IconButton } from "../IconButton/IconButton.js";
import { CalendarIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { DateSelectorItem, type DateSelectorItemProps } from "./DateSelectorItem.js";

export type DateSelectorProps = {
  items: Array<DateSelectorItemProps & { value: string }>;
  onChange?: (value: string) => void;
  onOpenCalendar?: () => void;
  selectedValue: string;
};

export function DateSelector({ items, onChange, onOpenCalendar, selectedValue }: DateSelectorProps) {
  const style: CSSProperties = {
    alignItems: "stretch",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr)) auto`
  };

  return (
    <div style={style}>
      {items.map((item) => (
        <DateSelectorItem
          dateLabel={item.dateLabel}
          dayLabel={item.dayLabel}
          disabled={item.disabled}
          key={item.value}
          onClick={() => onChange?.(item.value)}
          selected={item.value === selectedValue}
        />
      ))}
      <IconButton aria-label="Open calendar" icon={<CalendarIcon />} onClick={onOpenCalendar} variant="tonal" />
    </div>
  );
}
