import { useEffect, useId, useRef, useState, type ChangeEventHandler, type CSSProperties, type InputHTMLAttributes, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type CheckboxProps = {
  "aria-describedby"?: string;
  "aria-label"?: string;
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  indeterminate?: boolean;
  label?: ReactNode;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "aria-describedby" | "aria-label" | "checked" | "defaultChecked" | "disabled" | "id" | "name" | "onChange" | "required" | "type"
>;

export function Checkbox({
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  checked,
  className,
  defaultChecked,
  disabled = false,
  id,
  indeterminate = false,
  label,
  name,
  onChange,
  required = false,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked ?? false);
  const resolvedChecked = checked ?? uncontrolledChecked;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const controlStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: disabled
      ? semanticTokens.surface.muted.value
      : resolvedChecked || indeterminate
        ? semanticTokens.interactive.primary.value
        : semanticTokens.surface.base.value,
    borderColor: disabled
      ? semanticTokens.border.subtle.value
      : isFocused
        ? componentAliases.focusRing.color.value
        : isHovered
          ? semanticTokens.border.emphasis.value
          : semanticTokens.border.default.value,
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.text.inverse.value,
    display: "inline-flex",
    flexShrink: 0,
    height: spacingPrimitives.space5.value,
    justifyContent: "center",
    outlineColor: isFocused ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocused ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    width: spacingPrimitives.space5.value
  };

  const labelStyle: CSSProperties = {
    alignItems: "center",
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    columnGap: spacingPrimitives.space3.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    position: "relative"
  };

  return (
    <label
      className={className}
      htmlFor={inputId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={labelStyle}
    >
      <span style={controlStyle}>
        <input
          aria-describedby={ariaDescribedBy}
          aria-label={ariaLabel}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={inputId}
          name={name}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => {
            if (checked === undefined) {
              setUncontrolledChecked(event.currentTarget.checked);
            }
            onChange?.(event);
          }}
          onFocus={() => setIsFocused(true)}
          ref={inputRef}
          required={required}
          style={{
            height: "1px",
            margin: "0",
            opacity: 0,
            position: "absolute",
            width: "1px"
          }}
          type="checkbox"
          {...rest}
        />
        <span aria-hidden="true">{indeterminate ? "-" : resolvedChecked ? "x" : ""}</span>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
