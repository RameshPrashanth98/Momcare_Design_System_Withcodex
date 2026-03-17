import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type ActionBarProps = {
  className?: string;
  onAddComplication?: () => void;
  onAddMedicalNote?: () => void;
  onUploadReport?: () => void;
};

export function ActionBar({ className, onAddComplication, onAddMedicalNote, onUploadReport }: ActionBarProps) {
  const wrapperStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.base.value,
    borderTopColor: semanticTokens.border.subtle.value,
    borderTopStyle: "solid",
    borderTopWidth: borderWidthPrimitives.border1.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  return (
    <div className={className} style={wrapperStyle}>
      <Button fullWidth onClick={onAddMedicalNote} size="compact" variant="tonal">Add Medical Note</Button>
      <Button fullWidth onClick={onAddComplication} size="compact" variant="filled">Add Complication</Button>
      <Button fullWidth onClick={onUploadReport} size="compact" variant="text">Upload Report</Button>
    </div>
  );
}
