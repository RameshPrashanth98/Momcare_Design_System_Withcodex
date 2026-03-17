import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { Typography } from "../Typography/Typography.js";

export type SettingsRowProps = {
  disabled?: boolean;
  label: string;
  leadingIcon?: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  supportingText?: string;
  trailingContent?: ReactNode;
  trailingIcon?: ReactNode;
  value?: string;
};

export function SettingsRow({ disabled = false, label, leadingIcon, onClick, supportingText, trailingContent, trailingIcon, value }: SettingsRowProps) {
  const style: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: borderWidthPrimitives.border0.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
    cursor: onClick && !disabled ? "pointer" : "default",
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: `${leadingIcon ? 'auto ' : ''}minmax(0, 1fr) auto`,
    padding: 0,
    textAlign: "left",
    width: "100%"
  };

  const content = (
    <>
      {leadingIcon ? <span aria-hidden="true" style={{ color: semanticTokens.text.secondary.value, display: "inline-flex" }}>{leadingIcon}</span> : null}
      <span style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0 }}>
        <Typography variant="body">{label}</Typography>
        {value ? <Typography color={semanticTokens.text.secondary.value} variant="label">{value}</Typography> : null}
        {supportingText ? <Typography color={semanticTokens.text.secondary.value} variant="caption">{supportingText}</Typography> : null}
      </span>
      <span style={{ alignItems: "center", display: "inline-flex", gap: spacingPrimitives.space2.value }}>
        {trailingContent}
        {trailingIcon ? <span aria-hidden="true" style={{ color: semanticTokens.text.secondary.value, display: "inline-flex" }}>{trailingIcon}</span> : null}
      </span>
    </>
  );

  if (onClick) {
    return <button disabled={disabled} onClick={onClick} style={style} type="button">{content}</button>;
  }

  return <div style={style}>{content}</div>;
}
