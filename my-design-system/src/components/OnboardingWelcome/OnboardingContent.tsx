import type { CSSProperties } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { Typography } from "../Typography/Typography.js";

export type OnboardingContentProps = {
  align?: CSSProperties["textAlign"];
  description: string;
  heading: string;
  title: string;
};

export function OnboardingContent({ align = "center", description, heading, title }: OnboardingContentProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    justifyItems: align === "center" ? "center" : "start",
    textAlign: align
  };

  return (
    <section style={style}>
      <Typography as="p" color={semanticTokens.text.secondary.value} variant="label">{heading}</Typography>
      <Typography as="h2" variant="headline">{title}</Typography>
      <Typography as="p" color={semanticTokens.text.secondary.value} variant="body">{description}</Typography>
    </section>
  );
}
