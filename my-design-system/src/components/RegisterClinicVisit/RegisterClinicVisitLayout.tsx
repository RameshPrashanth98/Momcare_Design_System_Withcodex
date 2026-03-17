import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type RegisterClinicVisitLayoutProps = {
  actions: ReactNode;
  bottomNavigation: ReactNode;
  children: ReactNode;
  contextHeader: ReactNode;
  topBar: ReactNode;
};

export function RegisterClinicVisitLayout({ actions, bottomNavigation, children, contextHeader, topBar }: RegisterClinicVisitLayoutProps) {
  const shellStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto auto minmax(0, 1fr) auto auto",
    minHeight: "100vh",
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const actionStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.base.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    paddingBlock: spacingPrimitives.space4.value,
    paddingInline: spacingPrimitives.space4.value
  };

  return (
    <div style={shellStyle}>
      {topBar}
      <div style={{ paddingInline: spacingPrimitives.space4.value, paddingTop: spacingPrimitives.space4.value }}>{contextHeader}</div>
      <main style={contentStyle}>{children}</main>
      <div style={actionStyle}>{actions}</div>
      {bottomNavigation}
    </div>
  );
}
