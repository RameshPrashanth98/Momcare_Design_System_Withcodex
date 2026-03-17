import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type UserProfileLayoutProps = {
  bottomNavigation: ReactNode;
  content: ReactNode;
  topBar: ReactNode;
};

export function UserProfileLayout({ bottomNavigation, content, topBar }: UserProfileLayoutProps) {
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
    padding: spacingPrimitives.space4.value
  };

  return (
    <div style={wrapperStyle}>
      {topBar}
      <main style={mainStyle}>{content}</main>
      {bottomNavigation}
    </div>
  );
}
