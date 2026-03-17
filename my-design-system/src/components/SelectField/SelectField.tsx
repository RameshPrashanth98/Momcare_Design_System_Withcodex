import { useEffect, useId, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { ChevronDownIcon } from "../MotherProfile/icons.js";

export type SelectFieldOption = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  label: string;
  onChange?: (value: string) => void;
  options: SelectFieldOption[];
  placeholder?: string;
  supportingText?: string;
  value?: string;
};

export function SelectField({
  className,
  disabled = false,
  error = false,
  label,
  onChange,
  options,
  placeholder = "Select an option",
  supportingText,
  value
}: SelectFieldProps) {
  const fieldId = useId();
  const listboxId = useId();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value]);
  const selectedIndex = Math.max(options.findIndex((option) => option.value === value), 0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    return () => window.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTarget = options[selectedIndex] ?? options[0];
    optionRefs.current[focusTarget?.value]?.focus();
  }, [isOpen, options, selectedIndex]);

  const borderColor = disabled
    ? semanticTokens.border.subtle.value
    : error
      ? semanticTokens.feedback.error.value
      : isFocusVisible
        ? componentAliases.input.borderFocus.value
        : isHovered
          ? semanticTokens.border.emphasis.value
          : componentAliases.input.border.value;

  const wrapperStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    position: "relative",
    width: "100%"
  };

  const labelStyle: CSSProperties = {
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight)
  };

  const triggerStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled ? semanticTokens.surface.muted.value : componentAliases.input.background.value,
    borderColor,
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: isFocusVisible ? borderWidthPrimitives.border2.value : borderWidthPrimitives.border1.value,
    boxShadow: isFocusVisible ? `0 0 0 ${componentAliases.focusRing.offset.value} ${colorPrimitives.roseMist.value}` : "none",
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "minmax(0, 1fr) auto",
    minHeight: spacingPrimitives.space12.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value,
    textAlign: "left",
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "border-color, box-shadow, background-color",
    width: "100%"
  };

  const listboxStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: shadowPrimitives.shadowMd.value,
    display: "grid",
    gap: spacingPrimitives.space1.value,
    left: borderWidthPrimitives.border0.value,
    listStyle: "none",
    margin: "0",
    padding: spacingPrimitives.space2.value,
    position: "absolute",
    right: borderWidthPrimitives.border0.value,
    top: `calc(100% + ${spacingPrimitives.space2.value})`,
    zIndex: 1
  };

  const supportStyle: CSSProperties = {
    color: error ? semanticTokens.feedback.error.value : semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.caption.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    minHeight: spacingPrimitives.space5.value
  };

  const focusOption = (index: number) => {
    const normalizedIndex = (index + options.length) % options.length;
    optionRefs.current[options[normalizedIndex]?.value]?.focus();
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div className={className} ref={wrapperRef} style={wrapperStyle}>
      <label htmlFor={fieldId} style={labelStyle}>{label}</label>
      <button
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-invalid={error || undefined}
        disabled={disabled}
        id={fieldId}
        onBlur={() => setIsFocusVisible(false)}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        onFocus={() => setIsFocusVisible(true)}
        onKeyDown={handleTriggerKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={triggerStyle}
        type="button"
      >
        <span style={{ color: selectedOption ? semanticTokens.text.primary.value : semanticTokens.text.secondary.value, fontFamily: typographyTokens.bodyMd.fontFamily, fontSize: typographyTokens.bodyMd.fontSize, fontWeight: typographyTokens.bodyMd.fontWeight, letterSpacing: typographyTokens.bodyMd.letterSpacing, lineHeight: String(typographyTokens.bodyMd.lineHeight), minWidth: "0" }}>
          {selectedOption?.label ?? placeholder}
        </span>
        <span aria-hidden="true" style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "inline-flex", fontSize: spacingPrimitives.space4.value, justifyContent: "center", lineHeight: "1" }}>
          <ChevronDownIcon />
        </span>
      </button>
      {isOpen ? (
        <div aria-labelledby={fieldId} id={listboxId} role="listbox" style={listboxStyle}>
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const optionStyle: CSSProperties = {
              appearance: "none",
              backgroundColor: isSelected ? colorPrimitives.roseMist.value : "transparent",
              border: "none",
              borderRadius: componentAliases.button.radius.value,
              color: semanticTokens.text.primary.value,
              cursor: "pointer",
              fontFamily: typographyTokens.bodyMd.fontFamily,
              fontSize: typographyTokens.bodyMd.fontSize,
              fontWeight: isSelected ? typographyTokens.labelSm.fontWeight : typographyTokens.bodyMd.fontWeight,
              letterSpacing: typographyTokens.bodyMd.letterSpacing,
              lineHeight: String(typographyTokens.bodyMd.lineHeight),
              outlineColor: componentAliases.focusRing.color.value,
              outlineOffset: componentAliases.focusRing.offset.value,
              outlineStyle: "solid",
              outlineWidth: borderWidthPrimitives.border0.value,
              paddingBlock: spacingPrimitives.space3.value,
              paddingInline: spacingPrimitives.space4.value,
              textAlign: "left",
              width: "100%"
            };

            return (
              <button
                aria-selected={isSelected}
                key={option.value}
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    focusOption(index + 1);
                  }

                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    focusOption(index - 1);
                  }

                  if (event.key === "Escape") {
                    event.preventDefault();
                    setIsOpen(false);
                  }
                }}
                ref={(node) => {
                  optionRefs.current[option.value] = node;
                }}
                role="option"
                style={optionStyle}
                type="button"
              >
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}
      {supportingText ? <span style={supportStyle}>{supportingText}</span> : null}
    </div>
  );
}
