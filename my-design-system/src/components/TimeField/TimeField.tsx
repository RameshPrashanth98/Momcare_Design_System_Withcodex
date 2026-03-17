import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { ChevronDownIcon, ClockIcon } from "../MotherProfile/icons.js";

export type TimeFieldProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  label: string;
  leadingIcon?: ReactNode;
  onChange?: (value: string) => void;
  onOpenTimePicker?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  placeholder?: string;
  supportingText?: ReactNode;
  trailingIcon?: ReactNode;
  value?: string;
};

export function TimeField({
  className,
  disabled = false,
  error = false,
  label,
  leadingIcon,
  onOpenTimePicker,
  placeholder,
  supportingText,
  trailingIcon,
  value
}: TimeFieldProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const displayValue = value || placeholder;
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

  const buttonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: disabled
      ? semanticTokens.surface.muted.value
      : isPressed
        ? colorPrimitives.roseMist.value
        : componentAliases.input.background.value,
    borderColor,
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: isFocusVisible ? borderWidthPrimitives.border2.value : borderWidthPrimitives.border1.value,
    boxShadow: isFocusVisible ? `0 0 0 ${componentAliases.focusRing.offset.value} ${colorPrimitives.roseMist.value}` : "none",
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    minHeight: spacingPrimitives.space12.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value,
    textAlign: "left",
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "border-color, box-shadow, background-color",
    width: "100%"
  };

  const valueStyle: CSSProperties = {
    color: value ? (disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value) : semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    minWidth: "0"
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

  return (
    <div className={className} style={wrapperStyle}>
      <span style={labelStyle}>{label}</span>
      <button
        aria-haspopup="dialog"
        aria-invalid={error || undefined}
        disabled={disabled}
        onBlur={() => setIsFocusVisible(false)}
        onClick={onOpenTimePicker}
        onFocus={() => setIsFocusVisible(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setIsPressed(true);
          }
        }}
        onKeyUp={() => setIsPressed(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseUp={() => setIsPressed(false)}
        style={buttonStyle}
        type="button"
      >
        <span aria-hidden="true" style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "inline-flex", fontSize: spacingPrimitives.space4.value, justifyContent: "center", lineHeight: "1" }}>
          {leadingIcon ?? <ClockIcon />}
        </span>
        <span style={valueStyle}>{displayValue}</span>
        <span aria-hidden="true" style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "inline-flex", fontSize: spacingPrimitives.space4.value, justifyContent: "center", lineHeight: "1" }}>
          {trailingIcon ?? <ChevronDownIcon />}
        </span>
      </button>
      {supportingText ? <span style={supportStyle}>{supportingText}</span> : null}
    </div>
  );
}
