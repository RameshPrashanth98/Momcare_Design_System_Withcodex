import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";

export type ActionButtonGridAction = {
  label: string;
  onClick?: () => void;
  variant?: "filled" | "outlined" | "text" | "tonal";
};

export type ActionButtonGridProps = {
  actions: ReactNode;
};

export function ActionButtonGrid({ actions }: ActionButtonGridProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  };

  return <div style={style}>{actions}</div>;
}
