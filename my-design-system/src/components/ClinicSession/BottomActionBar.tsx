import type { CSSProperties } from "react";

import { Button } from "../Button/Button.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type BottomActionBarProps = {
  addDisabled?: boolean;
  className?: string;
  endDisabled?: boolean;
  onAddWalkInMother?: () => void;
  onEndClinic?: () => void;
  onStartClinic?: () => void;
  startDisabled?: boolean;
};

export function BottomActionBar({ addDisabled = false, className, endDisabled = false, onAddWalkInMother, onEndClinic, onStartClinic, startDisabled = false }: BottomActionBarProps) {
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
      <Button disabled={startDisabled} fullWidth onClick={onStartClinic} size="compact" variant="filled">Start Clinic</Button>
      <Button disabled={endDisabled} fullWidth onClick={onEndClinic} size="compact" variant="outlined">End Clinic</Button>
      <Button disabled={addDisabled} fullWidth onClick={onAddWalkInMother} size="compact" variant="tonal">Add Walk-in Mother</Button>
    </div>
  );
}
