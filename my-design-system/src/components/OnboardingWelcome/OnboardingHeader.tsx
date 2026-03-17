import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { Typography } from "../Typography/Typography.js";

export type OnboardingHeaderProps = {
  align?: CSSProperties["textAlign"];
  subtitle: string;
  title: string;
};

export function OnboardingHeader({ align = "center", subtitle, title }: OnboardingHeaderProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    justifyItems: align === "center" ? "center" : "start",
    textAlign: align
  };

  return (
    <header style={style}>
      <Typography as="h1" variant="display">{title}</Typography>
      <Typography as="p" variant="headline">{subtitle}</Typography>
    </header>
  );
}
