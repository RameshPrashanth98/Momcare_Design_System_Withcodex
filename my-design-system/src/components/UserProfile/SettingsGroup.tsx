import type { CSSProperties, ReactNode } from "react";

import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { Typography } from "../Typography/Typography.js";

export type SettingsGroupProps = {
  children: ReactNode;
  title: string;
};

export function SettingsGroup({ children, title }: SettingsGroupProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <section style={style}>
      <Typography as="h2" variant="title">{title}</Typography>
      <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>{children}</div>
    </section>
  );
}
