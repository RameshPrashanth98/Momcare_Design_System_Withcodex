import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MedicalHistoryLayoutProps = {
  actionBar: ReactNode;
  bottomNavigation: ReactNode;
  className?: string;
  sections: ReactNode;
  summaryCard: ReactNode;
  topBar: ReactNode;
};

export function MedicalHistoryLayout({ actionBar, bottomNavigation, className, sections, summaryCard, topBar }: MedicalHistoryLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto 1fr auto auto",
    minHeight: "100vh",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    paddingBottom: spacingPrimitives.space8.value
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div>{topBar}</div>
      <main style={contentStyle}>
        <div style={{ display: "grid", gap: spacingPrimitives.space4.value, marginInline: "auto", maxWidth: semanticTokens.layout.maxWidth.value, width: "100%" }}>
          {summaryCard}
          <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>{sections}</div>
        </div>
      </main>
      <div>{actionBar}</div>
      <div>{bottomNavigation}</div>
    </div>
  );
}
