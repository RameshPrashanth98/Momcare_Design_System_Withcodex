import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type LabReportsLayoutProps = {
  bottomNavigation: ReactNode;
  contextHeader: ReactNode;
  fab: ReactNode;
  filterGroup: ReactNode;
  reportsSection: ReactNode;
  summaryCard: ReactNode;
  topBar: ReactNode;
};

export function LabReportsLayout({ bottomNavigation, contextHeader, fab, filterGroup, reportsSection, summaryCard, topBar }: LabReportsLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto auto minmax(0, 1fr) auto",
    minHeight: "100vh",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    position: "relative"
  };

  const fabStyle: CSSProperties = {
    bottom: spacingPrimitives.space4.value,
    justifySelf: "end",
    position: "sticky"
  };

  return (
    <div style={wrapperStyle}>
      {topBar}
      <div style={{ paddingInline: spacingPrimitives.space4.value, paddingTop: spacingPrimitives.space4.value }}>{contextHeader}</div>
      <main style={contentStyle}>
        {summaryCard}
        {filterGroup}
        {reportsSection}
        <div style={fabStyle}>{fab}</div>
      </main>
      {bottomNavigation}
    </div>
  );
}
