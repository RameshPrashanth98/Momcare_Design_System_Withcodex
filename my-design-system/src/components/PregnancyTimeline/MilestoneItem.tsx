import type { CSSProperties, ReactNode } from "react";

import { Divider } from "../Divider/Divider.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { Typography } from "../Typography/Typography.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type MilestoneItemProps = {
  icon: ReactNode;
  showDivider?: boolean;
  supportingText: string;
  title: string;
};

export function MilestoneItem({ icon, showDivider = false, supportingText, title }: MilestoneItemProps) {
  const content = (
    <div style={{ alignItems: 'center', display: 'flex', gap: spacingPrimitives.space3.value }}>
      <span aria-hidden="true" style={{ color: semanticTokens.interactive.primaryHover.value, display: 'inline-flex', flexShrink: 0 }}>{icon}</span>
      <div style={{ display: 'grid', gap: spacingPrimitives.space1.value, minWidth: 0 }}>
        <Typography as="h3" variant="title">{title}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">{supportingText}</Typography>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'grid', gap: spacingPrimitives.space3.value }}>
      {content}
      {showDivider ? <Divider /> : null}
    </div>
  );
}
