import type { ChangeEventHandler, ReactNode } from "react";

import { IconButton } from "../IconButton/IconButton.js";
import { TextField } from "../TextField/TextField.js";

export type PasswordFieldProps = {
  disabled?: boolean;
  error?: boolean;
  isVisible?: boolean;
  label?: ReactNode;
  leadingIcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onToggleVisibility?: () => void;
  placeholder?: string;
  supportingText?: ReactNode;
  value?: string;
};

export function PasswordField({
  disabled = false,
  error = false,
  isVisible = false,
  label,
  leadingIcon,
  onChange,
  onToggleVisibility,
  placeholder,
  supportingText,
  value
}: PasswordFieldProps) {
  return (
    <TextField
      disabled={disabled}
      error={error}
      label={label}
      leadingIcon={leadingIcon}
      onChange={onChange}
      placeholder={placeholder}
      supportingText={supportingText}
      trailingIcon={<IconButton aria-label={isVisible ? "Hide password" : "Show password"} disabled={disabled} icon={<span>{isVisible ? "Hide" : "Show"}</span>} onClick={onToggleVisibility} variant="standard" />}
      type={isVisible ? "text" : "password"}
      value={value}
    />
  );
}
