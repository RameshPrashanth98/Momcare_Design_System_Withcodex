import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type HomeDashboardLayoutProps = {
  bottomNavigation: ReactNode;
  className?: string;
  content: ReactNode;
  languageRow: ReactNode;
  statsGrid: ReactNode;
  topBar: ReactNode;
};

export function HomeDashboardLayout({ bottomNavigation, className, content, languageRow, statsGrid, topBar }: HomeDashboardLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
    width: "100%"
  };

  const mainStyle: CSSProperties = {
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
      <main style={mainStyle}>
        <div style={stackStyle}>
          {languageRow}
          {statsGrid}
          {content}
        </div>
      </main>
      <div>{bottomNavigation}</div>
    </div>
  );
}
