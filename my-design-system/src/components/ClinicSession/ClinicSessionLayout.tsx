import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type ClinicSessionLayoutProps = {
  bottomActionBar: ReactNode;
  bottomNavigation: ReactNode;
  overviewHeader: ReactNode;
  registeredMothers: ReactNode;
  summaryCard: ReactNode;
  topBar: ReactNode;
};

export function ClinicSessionLayout({ bottomActionBar, bottomNavigation, overviewHeader, registeredMothers, summaryCard, topBar }: ClinicSessionLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto auto",
    minHeight: "100vh",
    width: "100%"
  };

  const mainStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <div style={wrapperStyle}>
      <div>{topBar}</div>
      <main style={mainStyle}>
        <section>{overviewHeader}</section>
        <section>{summaryCard}</section>
        <section>{registeredMothers}</section>
      </main>
      {bottomActionBar}
      {bottomNavigation}
    </div>
  );
}
