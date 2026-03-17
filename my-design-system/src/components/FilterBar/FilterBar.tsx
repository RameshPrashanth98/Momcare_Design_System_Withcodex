import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import type { FilterSelectProps } from "../FilterSelect/FilterSelect.js";
import { FilterSelect } from "../FilterSelect/FilterSelect.js";

export type FilterBarProps = {
  className?: string;
  filters: FilterSelectProps[];
};

export function FilterBar({ className, filters }: FilterBarProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    width: "100%"
  };

  return (
    <div className={className} style={style}>
      {filters.map((filter) => (
        <FilterSelect key={`${filter.label}-${filter.value ?? "all"}`} {...filter} />
      ))}
    </div>
  );
}
