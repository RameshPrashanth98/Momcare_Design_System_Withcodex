import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { FilterChip } from "./FilterChip.js";

export type FilterChipGroupOption = {
  label: string;
  value: string;
};

export type FilterChipGroupProps = {
  ariaLabel: string;
  onChange?: (value: string) => void;
  options: FilterChipGroupOption[];
  selectedValue: string;
};

export function FilterChipGroup({ ariaLabel, onChange, options, selectedValue }: FilterChipGroupProps) {
  const style: CSSProperties = {
    display: "flex",
    gap: spacingPrimitives.space2.value,
    overflowX: "auto",
    paddingBottom: spacingPrimitives.space1.value,
    width: "100%"
  };

  return (
    <div aria-label={ariaLabel} role="group" style={style}>
      {options.map((option) => (
        <FilterChip key={option.value} label={option.label} onClick={() => onChange?.(option.value)} selected={option.value === selectedValue} />
      ))}
    </div>
  );
}
