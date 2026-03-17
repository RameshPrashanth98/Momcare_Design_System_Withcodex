import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type SegmentedButtonOption = {
  label: string;
  value: string;
};

export type SegmentedButtonProps = {
  "aria-label"?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  options: SegmentedButtonOption[];
  value?: string;
};

function useControllableValue(controlledValue: string | undefined, defaultValue: string | undefined, fallbackValue: string | undefined) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? fallbackValue);

  return {
    selectedValue: controlledValue ?? uncontrolledValue ?? fallbackValue,
    setSelectedValue: setUncontrolledValue
  };
}

export function SegmentedButton({
  "aria-label": ariaLabel = "Choose an option",
  className,
  defaultValue,
  disabled = false,
  onChange,
  options,
  value
}: SegmentedButtonProps) {
  const generatedId = useId();
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [pressedValue, setPressedValue] = useState<string | null>(null);
  const { selectedValue, setSelectedValue } = useControllableValue(value, defaultValue, options[0]?.value);

  const moveFocus = (currentValue: string, direction: "next" | "previous") => {
    if (options.length === 0) {
      return;
    }

    const currentIndex = options.findIndex((option) => option.value === currentValue);
    const offset = direction === "next" ? 1 : -1;
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + offset + options.length) % options.length;
    buttonRefs.current[options[nextIndex]?.value]?.focus();
  };

  const wrapperStyle: CSSProperties = {
    alignItems: "stretch",
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    display: "inline-grid",
    gap: spacingPrimitives.space1.value,
    gridAutoColumns: "1fr",
    gridAutoFlow: "column",
    padding: spacingPrimitives.space1.value,
    width: "100%"
  };

  const buttonStyle = (buttonValue: string, isSelected: boolean): CSSProperties => {
    const isFocused = focusedValue === buttonValue;
    const isHovered = hoveredValue === buttonValue;
    const isPressed = pressedValue === buttonValue;

    const backgroundColor = disabled
      ? semanticTokens.surface.muted.value
      : isSelected
        ? colorPrimitives.roseBlush.value
        : isPressed
          ? colorPrimitives.creamSoft.value
          : isHovered
            ? colorPrimitives.roseMist.value
            : "transparent";

    return {
      appearance: "none",
      backgroundColor,
      border: "none",
      borderRadius: radiusPrimitives.radiusFull.value,
      color: disabled
        ? semanticTokens.text.muted.value
        : isSelected
          ? semanticTokens.text.primary.value
          : semanticTokens.text.secondary.value,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: typographyTokens.labelSm.fontFamily,
      fontSize: typographyTokens.labelSm.fontSize,
      fontWeight: typographyTokens.labelSm.fontWeight,
      letterSpacing: typographyTokens.labelSm.letterSpacing,
      lineHeight: String(typographyTokens.labelSm.lineHeight),
      minHeight: spacingPrimitives.space10.value,
      outlineColor: isFocused ? componentAliases.focusRing.color.value : "transparent",
      outlineOffset: componentAliases.focusRing.offset.value,
      outlineStyle: "solid",
      outlineWidth: isFocused ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
      paddingBlock: spacingPrimitives.space2.value,
      paddingInline: spacingPrimitives.space4.value,
      transitionDuration: spacingPrimitives.space1.value,
      transitionProperty: "background-color, color, outline-color",
      width: "100%"
    };
  };

  return (
    <div aria-label={ariaLabel} className={className} id={generatedId} role="group" style={wrapperStyle}>
      {options.map((option) => {
        const isSelected = option.value === selectedValue;

        return (
          <button
            aria-pressed={isSelected}
            disabled={disabled}
            key={option.value}
            onBlur={() => setFocusedValue((currentValue) => (currentValue === option.value ? null : currentValue))}
            onClick={() => {
              setSelectedValue(option.value);
              onChange?.(option.value);
            }}
            onFocus={() => setFocusedValue(option.value)}
            onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                moveFocus(option.value, "next");
              }

              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                moveFocus(option.value, "previous");
              }

              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedValue(option.value);
                onChange?.(option.value);
              }
            }}
            onMouseDown={() => setPressedValue(option.value)}
            onMouseEnter={() => setHoveredValue(option.value)}
            onMouseLeave={() => {
              setHoveredValue((currentValue) => (currentValue === option.value ? null : currentValue));
              setPressedValue((currentValue) => (currentValue === option.value ? null : currentValue));
            }}
            onMouseUp={() => setPressedValue((currentValue) => (currentValue === option.value ? null : currentValue))}
            ref={(node) => {
              buttonRefs.current[option.value] = node;
            }}
            style={buttonStyle(option.value, isSelected)}
            tabIndex={isSelected ? 0 : -1}
            type="button"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
