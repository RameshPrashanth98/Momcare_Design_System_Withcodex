import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";

export type ActionRowProps = {
  actions: ReactNode[];
  className?: string;
};

export function ActionRow({ actions, className }: ActionRowProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    width: "100%"
  };

  return (
    <div className={className} style={style}>
      {actions.map((action, index) => <div key={`action-${index}`}>{action}</div>)}
    </div>
  );
}
