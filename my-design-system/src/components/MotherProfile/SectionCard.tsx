import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { sectionBodyTextStyle, sectionHeaderTextStyle, surfaceCardStyle } from "./icons.js";

export type SectionCardProps = {
  children?: ReactNode;
  className?: string;
  description?: string;
  title: string;
};

export function SectionCard({ children, className, description, title }: SectionCardProps) {
  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <section className={className} style={cardStyle}>
      <header style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
        <h2 style={sectionHeaderTextStyle()}>{title}</h2>
        {description ? <p style={sectionBodyTextStyle()}>{description}</p> : null}
      </header>
      <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>{children}</div>
    </section>
  );
}
