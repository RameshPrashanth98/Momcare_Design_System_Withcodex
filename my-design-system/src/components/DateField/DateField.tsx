import { useState, type ButtonHTMLAttributes, type ChangeEventHandler, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { CalendarIcon } from "../MotherProfile/icons.js";
import { TextField } from "../TextField/TextField.js";

export type DateFieldProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onOpenDatePicker?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  placeholder?: string;
  supportingText?: ReactNode;
  trailingIcon?: ReactNode;
  value?: string;
};

export function DateField({
  className,
  disabled = false,
  error = false,
  id,
  label,
  onChange,
  onOpenDatePicker,
  placeholder,
  supportingText,
  trailingIcon,
  value
}: DateFieldProps) {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const iconButtonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: componentAliases.button.radius.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.secondary.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    justifyContent: "center",
    outlineColor: isFocusVisible ? componentAliases.focusRing.color.value : "transparent",
    outlineOffset: componentAliases.focusRing.offset.value,
    outlineStyle: "solid",
    outlineWidth: isFocusVisible ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
    padding: spacingPrimitives.space1.value,
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "color, outline-color, background-color"
  };

  const iconNode = trailingIcon ?? <CalendarIcon />;

  return (
    <TextField
      className={className}
      disabled={disabled}
      error={error}
      id={id}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      supportingText={supportingText}
      trailingIcon={
        <button
          aria-label={`Open ${label} picker`}
          disabled={disabled}
          onBlur={() => setIsFocusVisible(false)}
          onClick={onOpenDatePicker}
          onFocus={() => setIsFocusVisible(true)}
          style={iconButtonStyle}
          type="button"
        >
          <span aria-hidden="true" style={{ color: "currentColor", display: "inline-flex", fontSize: spacingPrimitives.space4.value, lineHeight: "1" }}>
            {iconNode}
          </span>
        </button>
      }
      value={value}
    />
  );
}
