import { useId, useState, type ChangeEventHandler, type CSSProperties, type FocusEventHandler, type InputHTMLAttributes, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, fontSizePrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type TextFieldProps = {
  "aria-describedby"?: string;
  "aria-label"?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  errorText?: ReactNode;
  id?: string;
  invalid?: boolean;
  label?: ReactNode;
  leadingIcon?: ReactNode;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  supportingText?: ReactNode;
  trailingIcon?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  value?: string;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "aria-describedby"
  | "aria-label"
  | "children"
  | "defaultValue"
  | "disabled"
  | "id"
  | "name"
  | "onBlur"
  | "onChange"
  | "onFocus"
  | "placeholder"
  | "readOnly"
  | "required"
  | "type"
  | "value"
>;

const fieldTokens = {
  background: componentAliases.input.background.value,
  backgroundDisabled: semanticTokens.surface.muted.value,
  borderDefault: componentAliases.input.border.value,
  borderError: semanticTokens.feedback.error.value,
  borderHover: semanticTokens.border.emphasis.value,
  borderFocus: componentAliases.input.borderFocus.value,
  errorColor: semanticTokens.feedback.error.value,
  iconColor: semanticTokens.text.secondary.value,
  inputColor: semanticTokens.text.primary.value,
  labelColor: semanticTokens.text.primary.value,
  supportingColor: semanticTokens.text.secondary.value
} as const;

function iconWrapperStyle(): CSSProperties {
  return {
    alignItems: "center",
    color: fieldTokens.iconColor,
    display: "inline-flex",
    flexShrink: 0,
    fontSize: fontSizePrimitives.textBase.value,
    justifyContent: "center",
    lineHeight: "1"
  };
}

export function TextField({
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  className,
  defaultValue,
  disabled = false,
  errorText,
  id,
  invalid = false,
  label,
  leadingIcon,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly = false,
  required = false,
  supportingText,
  trailingIcon,
  type = "text",
  value,
  ...rest
}: TextFieldProps) {
  const generatedId = useId();
  const supportId = useId();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id ?? generatedId;
  const message = errorText ?? supportingText;
  const isInvalid = invalid || Boolean(errorText);
  const describedBy = [ariaDescribedBy, message ? supportId : undefined].filter(Boolean).join(" ") || undefined;

  const borderColor = disabled
    ? semanticTokens.border.subtle.value
    : isInvalid
      ? fieldTokens.borderError
      : isFocused
        ? fieldTokens.borderFocus
        : isHovered
          ? fieldTokens.borderHover
          : fieldTokens.borderDefault;

  const wrapperStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space2.value,
    width: "100%"
  };

  const labelStyle: CSSProperties = {
    color: disabled ? semanticTokens.text.muted.value : fieldTokens.labelColor,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight)
  };

  const fieldStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: disabled ? fieldTokens.backgroundDisabled : fieldTokens.background,
    borderColor,
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: isFocused ? borderWidthPrimitives.border2.value : borderWidthPrimitives.border1.value,
    boxShadow: isFocused ? `0 0 0 ${componentAliases.focusRing.offset.value} ${colorPrimitives.roseMist.value}` : "none",
    columnGap: spacingPrimitives.space3.value,
    display: "grid",
    gridTemplateColumns: `${leadingIcon ? "auto " : ""}minmax(0, 1fr)${trailingIcon ? " auto" : ""}`,
    minHeight: spacingPrimitives.space12.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value,
    transitionDuration: spacingPrimitives.space1.value,
    transitionProperty: "border-color, box-shadow, background-color"
  };

  const inputStyle: CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    color: disabled ? semanticTokens.text.muted.value : fieldTokens.inputColor,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    minWidth: "0",
    outline: "none",
    padding: "0",
    width: "100%"
  };

  const supportingStyle: CSSProperties = {
    color: isInvalid ? fieldTokens.errorColor : fieldTokens.supportingColor,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: fontSizePrimitives.textSm.value,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    minHeight: spacingPrimitives.space5.value
  };

  return (
    <div className={className} style={wrapperStyle}>
      {label ? (
        <label htmlFor={inputId} style={labelStyle}>
          {label}
        </label>
      ) : null}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={fieldStyle}
      >
        {leadingIcon ? <span aria-hidden="true" style={iconWrapperStyle()}>{leadingIcon}</span> : null}
        <input
          aria-describedby={describedBy}
          aria-invalid={isInvalid || undefined}
          aria-label={ariaLabel}
          defaultValue={defaultValue}
          disabled={disabled}
          id={inputId}
          name={name}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onChange={onChange}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          style={inputStyle}
          type={type}
          value={value}
          {...rest}
        />
        {trailingIcon ? <span style={iconWrapperStyle()}>{trailingIcon}</span> : null}
      </div>
      {message ? (
        <div id={supportId} style={supportingStyle}>
          {message}
        </div>
      ) : null}
    </div>
  );
}
