import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type PregnancyTimelineLayoutProps = {
  bottomNavigation: ReactNode;
  contextHeader: ReactNode;
  filterGroup: ReactNode;
  milestonesSection: ReactNode;
  summaryCard: ReactNode;
  timelineSection: ReactNode;
  topBar: ReactNode;
};

export function PregnancyTimelineLayout({ bottomNavigation, contextHeader, filterGroup, milestonesSection, summaryCard, timelineSection, topBar }: PregnancyTimelineLayoutProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    display: 'grid',
    gridTemplateRows: 'auto auto minmax(0, 1fr) auto',
    minHeight: '100vh',
    width: '100%'
  };

  const contentStyle: CSSProperties = {
    display: 'grid',
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <div style={wrapperStyle}>
      {topBar}
      <div style={{ paddingInline: spacingPrimitives.space4.value, paddingTop: spacingPrimitives.space4.value }}>{contextHeader}</div>
      <main style={contentStyle}>
        {summaryCard}
        {filterGroup}
        {timelineSection}
        {milestonesSection}
      </main>
      {bottomNavigation}
    </div>
  );
}
