import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type OnboardingWelcomeLayoutProps = {
  action: ReactNode;
  brand: ReactNode;
  content: ReactNode;
  header: ReactNode;
  illustration: ReactNode;
  progress: ReactNode;
};

export function OnboardingWelcomeLayout({ action, brand, content, header, illustration, progress }: OnboardingWelcomeLayoutProps) {
  const shellStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: spacingPrimitives.space6.value,
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space6.value,
    justifyItems: "center",
    marginInline: "auto",
    maxWidth: `calc(${spacingPrimitives.space48.value} + ${spacingPrimitives.space32.value})`,
    width: "100%"
  };

  const actionStyle: CSSProperties = {
    width: "100%"
  };

  return (
    <main style={shellStyle}>
      <div style={contentStyle}>
        {brand}
        {header}
        {illustration}
        {content}
        <div style={actionStyle}>{action}</div>
        {progress}
      </div>
    </main>
  );
}
