import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";

export type StatsGridProps = {
  children: ReactNode;
  className?: string;
};

export function StatsGrid({ children, className }: StatsGridProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    width: "100%"
  };

  return <div className={className} style={style}>{children}</div>;
}
