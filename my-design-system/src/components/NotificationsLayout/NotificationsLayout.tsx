import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type NotificationsLayoutProps = {
  className?: string;
  filterBar?: ReactNode;
  list: ReactNode;
  sectionHeader?: ReactNode;
  stickyTopBar?: boolean;
  topBar: ReactNode;
};

export function NotificationsLayout({
  className,
  filterBar,
  list,
  sectionHeader,
  stickyTopBar = true,
  topBar
}: NotificationsLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto 1fr",
    minHeight: "100vh",
    width: "100%"
  };

  const topBarStyle: CSSProperties = {
    position: stickyTopBar ? "sticky" : "relative",
    top: stickyTopBar ? "0" : undefined,
    zIndex: 1
  } as CSSProperties;

  const mainStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const listStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    overflowY: "auto",
    paddingBottom: spacingPrimitives.space4.value
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div style={topBarStyle}>{topBar}</div>
      <main style={mainStyle}>
        {filterBar ? <div>{filterBar}</div> : null}
        {sectionHeader ? <div>{sectionHeader}</div> : null}
        <section style={listStyle}>{list}</section>
      </main>
    </div>
  );
}

