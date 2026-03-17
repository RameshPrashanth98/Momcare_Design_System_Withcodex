import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type SearchRecordsLayoutProps = {
  bottomNavigation: ReactNode;
  records: ReactNode;
  searchBar: ReactNode;
  sectionHeader: ReactNode;
  topBar: ReactNode;
};

export function SearchRecordsLayout({ bottomNavigation, records, searchBar, sectionHeader, topBar }: SearchRecordsLayoutProps) {
  const shellStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
    minHeight: "100vh",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const recordsStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    width: "100%"
  };

  return (
    <div style={shellStyle}>
      {topBar}
      <main style={contentStyle}>
        {searchBar}
        {sectionHeader}
        <section style={recordsStyle}>{records}</section>
      </main>
      {bottomNavigation}
    </div>
  );
}
