import { useState, type ButtonHTMLAttributes, type CSSProperties } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type SwitchProps = {
  "aria-label"?: string;
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Switch({ "aria-label": ariaLabel, checked, className, defaultChecked = false, disabled = false, onChange }: SwitchProps) {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const isChecked = checked ?? uncontrolledChecked;

  const trackStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled
      ? semanticTokens.surface.muted.value
      : isChecked
        ? semanticTokens.interactive.primary.value
        : semanticTokens.border.default.value,
    borderColor: isChecked ? semanticTokens.interactive.primaryHover.value : semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    justifyContent: isChecked ? "flex-end" : "flex-start",
    minHeight: spacingPrimitives.space6.value,
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    paddingInline: spacingPrimitives.space1.value,
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "background-color, border-color, outline-color",
    width: spacingPrimitives.space12.value
  };

  const thumbStyle: CSSProperties = {
    backgroundColor: disabled ? semanticTokens.text.muted.value : semanticTokens.surface.base.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    boxShadow: `0 0 0 ${borderWidthPrimitives.border1.value} ${colorPrimitives.roseMist.value}`,
    display: "block",
    height: spacingPrimitives.space4.value,
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "transform, background-color",
    width: spacingPrimitives.space4.value
  };

  const toggle = () => {
    if (disabled) {
      return;
    }

    const nextValue = !isChecked;
    if (checked === undefined) {
      setUncontrolledChecked(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <button
      aria-checked={isChecked}
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      onBlur={() => setIsFocusVisible(false)}
      onClick={toggle}
      onFocus={() => setIsFocusVisible(true)}
      style={trackStyle}
      type="button"
      role="switch"
    >
      <span aria-hidden="true" style={thumbStyle} />
    </button>
  );
}
