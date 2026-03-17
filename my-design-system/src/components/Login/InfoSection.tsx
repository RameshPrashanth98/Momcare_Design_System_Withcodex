import type { CSSProperties, ReactNode } from "react";

import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

export type InfoSectionProps = {
  children: ReactNode;
};

export function InfoSection({ children }: InfoSectionProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value,
    textAlign: "center"
  };

  return <section style={style}>{children}</section>;
}
