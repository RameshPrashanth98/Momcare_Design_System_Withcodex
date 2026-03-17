import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";

export type IconProps = {
  children: ReactNode;
};

export function Icon({ children }: IconProps) {
  const style: CSSProperties = {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1"
  };

  return <span aria-hidden="true" style={style}>{children}</span>;
}
