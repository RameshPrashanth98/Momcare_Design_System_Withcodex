import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MotherProfileLayoutProps = {
  bottomNavigation: ReactNode;
  className?: string;
  sections: ReactNode;
  summary: ReactNode;
  topBar: ReactNode;
};

export function MotherProfileLayout({ bottomNavigation, className, sections, summary, topBar }: MotherProfileLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    paddingBottom: spacingPrimitives.space8.value
  };

  const stackStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    marginInline: "auto",
    maxWidth: semanticTokens.layout.maxWidth.value,
    width: "100%"
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div>{topBar}</div>
      <main style={contentStyle}>
        <div style={stackStyle}>
          {summary}
          <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>{sections}</div>
        </div>
      </main>
      <div>{bottomNavigation}</div>
    </div>
  );
}
