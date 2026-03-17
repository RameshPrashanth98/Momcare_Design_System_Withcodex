import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MothersLayoutProps = {
  bottomNavigation?: ReactNode;
  className?: string;
  fab?: ReactNode;
  filterBar?: ReactNode;
  list: ReactNode;
  searchBar?: ReactNode;
  topBar: ReactNode;
};

export function MothersLayout({ bottomNavigation, className, fab, filterBar, list, searchBar, topBar }: MothersLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
    position: "relative",
    width: "100%"
  };

  const mainStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value,
    alignContent: "start"
  };

  const listStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    overflowY: "auto",
    paddingBottom: spacingPrimitives.space8.value
  };

  const fabStyle: CSSProperties = {
    bottom: spacingPrimitives.space20.value,
    position: "fixed",
    right: spacingPrimitives.space4.value,
    zIndex: 1
  };

  return (
    <div className={className} style={wrapperStyle}>
      <header>{topBar}</header>
      <main style={mainStyle}>
        {searchBar ? <div>{searchBar}</div> : null}
        {filterBar ? <div>{filterBar}</div> : null}
        <section style={listStyle}>{list}</section>
      </main>
      {fab ? <div style={fabStyle}>{fab}</div> : null}
      {bottomNavigation ? <div>{bottomNavigation}</div> : null}
    </div>
  );
}
