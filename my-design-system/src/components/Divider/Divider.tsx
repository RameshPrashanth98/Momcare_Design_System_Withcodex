import type { CSSProperties } from "react";

import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type DividerProps = {
  inset?: boolean;
  orientation?: "horizontal";
};

export function Divider({ inset = false, orientation = "horizontal" }: DividerProps) {
  const style: CSSProperties = {
    alignSelf: "stretch",
    backgroundColor: semanticTokens.border.subtle.value,
    border: "none",
    height: orientation === "horizontal" ? borderWidthPrimitives.border1.value : "100%",
    margin: 0,
    width: inset ? `calc(100% - (${spacingPrimitives.space4.value} * 2))` : "100%"
  };

  return <hr aria-hidden="true" style={style} />;
}
