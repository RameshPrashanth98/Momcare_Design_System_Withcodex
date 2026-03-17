import { useState, type CSSProperties, type InputHTMLAttributes } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type SearchBarProps = {
  "aria-label"?: string;
  className?: string;
  disabled?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: string;
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "aria-label" | "children" | "disabled" | "onChange" | "placeholder" | "value">;

export function SearchBar({
  "aria-label": ariaLabel = "Search mothers",
  className,
  disabled = false,
  onBlur,
  onChange,
  onFocus,
  placeholder = "Search mothers",
  value,
  ...rest
}: SearchBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const fieldStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: disabled ? semanticTokens.surface.muted.value : componentAliases.input.background.value,
    borderColor: isFocused ? componentAliases.input.borderFocus.value : (isHovered ? semanticTokens.border.emphasis.value : componentAliases.input.border.value),
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: isFocused ? borderWidthPrimitives.border2.value : borderWidthPrimitives.border1.value,
    columnGap: spacingPrimitives.space3.value,
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    minHeight: spacingPrimitives.space12.value,
    paddingBlock: spacingPrimitives.space3.value,
    paddingInline: spacingPrimitives.space4.value,
    width: "100%"
  };

  const inputStyle: CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.text.primary.value,
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

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={fieldStyle}
    >
      <span aria-hidden="true" style={{ color: semanticTokens.text.secondary.value }}>?</span>
      <input
        aria-label={ariaLabel}
        disabled={disabled}
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
        style={inputStyle}
        value={value}
        {...rest}
      />
    </div>
  );
}
