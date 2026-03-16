import { useState, type CSSProperties } from "react";

import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import type { TextFieldProps } from "../TextField/TextField.js";
import { TextField } from "../TextField/TextField.js";

export type PasswordFieldProps = Omit<TextFieldProps, "leadingIcon" | "trailingIcon" | "type"> & {
  defaultVisible?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
};

const toggleStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  color: semanticTokens.text.secondary.value,
  cursor: "pointer",
  fontFamily: typographyTokens.labelSm.fontFamily,
  fontSize: typographyTokens.labelSm.fontSize,
  fontWeight: typographyTokens.labelSm.fontWeight,
  letterSpacing: typographyTokens.labelSm.letterSpacing,
  lineHeight: String(typographyTokens.labelSm.lineHeight),
  outline: "none",
  outlineColor: "transparent",
  outlineStyle: "solid",
  outlineWidth: borderWidthPrimitives.border0.value,
  padding: spacingPrimitives.space1.value
};

function PasswordIcon() {
  return <span aria-hidden="true">*</span>;
}

export function PasswordField({
  "aria-label": ariaLabel,
  defaultVisible = false,
  disabled = false,
  onVisibilityChange,
  ...rest
}: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  return (
    <TextField
      {...rest}
      aria-label={ariaLabel}
      disabled={disabled}
      leadingIcon={<PasswordIcon />}
      trailingIcon={
        <button
          aria-label={isVisible ? "Hide password" : "Show password"}
          disabled={disabled}
          onClick={() => {
            const nextVisible = !isVisible;
            setIsVisible(nextVisible);
            onVisibilityChange?.(nextVisible);
          }}
          onMouseDown={(event) => event.preventDefault()}
          style={{
            ...toggleStyle,
            color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.secondary.value,
            cursor: disabled ? "not-allowed" : "pointer"
          }}
          type="button"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}
