import type { CSSProperties, ReactNode } from "react";

import { surfaceCardStyle } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { Typography } from "../Typography/Typography.js";

export type FormSectionProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

export function FormSection({ children, className, title }: FormSectionProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <section className={className} style={style}>
      <Typography as="h2" variant="title">{title}</Typography>
      <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>{children}</div>
    </section>
  );
}
