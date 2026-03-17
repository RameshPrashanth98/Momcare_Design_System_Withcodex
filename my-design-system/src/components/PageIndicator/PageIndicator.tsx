import { useId, type CSSProperties } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type PageIndicatorProps = {
  "aria-label"?: string;
  className?: string;
  count?: number;
  current?: number;
  currentIndex?: number;
  onDotClick?: (index: number) => void;
  total?: number;
};

export function PageIndicator({
  "aria-label": ariaLabel,
  className,
  count,
  current,
  currentIndex,
  onDotClick,
  total
}: PageIndicatorProps) {
  const generatedId = useId();
  const resolvedCount = total ?? count ?? 0;
  const resolvedIndex = current ?? currentIndex ?? 0;
  const clampedCount = Math.max(0, resolvedCount);
  const activeIndex = Math.min(Math.max(resolvedIndex, 0), Math.max(clampedCount - 1, 0));
  const interactive = typeof onDotClick === "function";

  const listStyle: CSSProperties = {
    alignItems: "center",
    display: "flex",
    gap: spacingPrimitives.space2.value,
    justifyContent: "center",
    listStyle: "none",
    margin: "0",
    padding: "0"
  };

  return (
    <ol aria-label={ariaLabel ?? "Onboarding progress"} className={className} id={generatedId} style={listStyle}>
      {Array.from({ length: clampedCount }, (_, index) => {
        const isActive = index === activeIndex;
        const baseStyle: CSSProperties = {
          alignItems: "center",
          appearance: "none",
          backgroundColor: isActive ? semanticTokens.interactive.primaryHover.value : semanticTokens.border.default.value,
          border: "none",
          borderRadius: radiusPrimitives.radiusFull.value,
          cursor: interactive ? "pointer" : "default",
          display: "inline-flex",
          height: spacingPrimitives.space2.value,
          justifyContent: "center",
          minWidth: isActive ? spacingPrimitives.space6.value : spacingPrimitives.space2.value,
          outlineColor: semanticTokens.interactive.focus.value,
          outlineOffset: componentAliases.focusRing.offset.value,
          outlineStyle: "solid",
          outlineWidth: borderWidthPrimitives.border0.value,
          padding: "0",
          transition: "none"
        };

        const label = `Step ${index + 1} of ${clampedCount}`;

        return (
          <li key={index}>
            {interactive ? (
              <button
                aria-current={isActive ? "step" : undefined}
                aria-label={label}
                onBlur={(event) => {
                  event.currentTarget.style.outlineWidth = borderWidthPrimitives.border0.value;
                }}
                onClick={() => onDotClick?.(index)}
                onFocus={(event) => {
                  event.currentTarget.style.outlineWidth = componentAliases.focusRing.width.value;
                }}
                style={baseStyle}
                type="button"
              />
            ) : (
              <span aria-current={isActive ? "step" : undefined} aria-label={label} role="img" style={baseStyle} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
