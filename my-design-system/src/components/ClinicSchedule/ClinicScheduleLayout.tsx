import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type ClinicScheduleLayoutProps = {
  bottomNavigation: ReactNode;
  dateSelector: ReactNode;
  fab: ReactNode;
  scheduleCards: ReactNode;
  sectionHeader: ReactNode;
  topBar: ReactNode;
};

export function ClinicScheduleLayout({ bottomNavigation, dateSelector, fab, scheduleCards, sectionHeader, topBar }: ClinicScheduleLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
    minHeight: "100vh",
    width: "100%"
  };

  const mainStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    position: "relative"
  };

  const fabStyle: CSSProperties = {
    bottom: spacingPrimitives.space4.value,
    position: "sticky",
    justifySelf: "end"
  };

  const cardsStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    paddingBottom: spacingPrimitives.space16.value
  };

  return (
    <div style={wrapperStyle}>
      <div>{topBar}</div>
      <main style={mainStyle}>
        {sectionHeader}
        {dateSelector}
        <section style={cardsStyle}>{scheduleCards}</section>
        <div style={fabStyle}>{fab}</div>
      </main>
      {bottomNavigation}
    </div>
  );
}
