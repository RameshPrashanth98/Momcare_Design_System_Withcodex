import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";

export type InlineActionGroupProps = {
  actions: ReactNode[];
  align?: "start" | "center" | "end";
  separator?: ReactNode;
};

export function InlineActionGroup({ actions, align = "center", separator }: InlineActionGroupProps) {
  const justifyContent = align === "start" ? "flex-start" : align === "end" ? "flex-end" : "center";
  const style: CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: spacingPrimitives.space2.value,
    justifyContent
  };

  return (
    <div style={style}>
      {actions.map((action, index) => (
        <span key={`action-${index}`} style={{ alignItems: "center", display: "inline-flex", gap: spacingPrimitives.space2.value }}>
          {index > 0 && separator ? separator : null}
          {action}
        </span>
      ))}
    </div>
  );
}
