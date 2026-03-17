import { useState, type CSSProperties, type InputHTMLAttributes, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { SearchIcon } from "../MotherProfile/icons.js";

export type SearchBarProps = {
  "aria-label"?: string;
  className?: string;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onSearch?: () => void;
  placeholder?: string;
  trailingIcon?: ReactNode;
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "aria-label" | "children" | "disabled" | "onChange" | "placeholder" | "value">;

export function SearchBar({
  "aria-label": ariaLabel = "Search mothers",
  className,
  disabled = false,
  leadingIcon,
  onBlur,
  onChange,
  onFocus,
  onSearch,
  placeholder = "Search mothers",
  trailingIcon,
  value,
  ...rest
}: SearchBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActionFocused, setIsActionFocused] = useState(false);

  const fieldStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: disabled ? semanticTokens.surface.muted.value : componentAliases.input.background.value,
    borderColor: isFocused || isActionFocused
      ? componentAliases.input.borderFocus.value
      : (isHovered ? semanticTokens.border.emphasis.value : componentAliases.input.border.value),
    borderRadius: componentAliases.input.radius.value,
    borderStyle: "solid",
    borderWidth: isFocused || isActionFocused ? borderWidthPrimitives.border2.value : borderWidthPrimitives.border1.value,
    boxShadow: isFocused || isActionFocused ? `0 0 0 ${componentAliases.focusRing.offset.value} ${colorPrimitives.roseMist.value}` : "none",
    columnGap: spacingPrimitives.space3.value,
    display: "grid",
    gridTemplateColumns: `auto minmax(0, 1fr) auto`,
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

  const actionButtonStyle: CSSProperties = {
    alignItems: "center",
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: componentAliases.button.radius.value,
    color: disabled ? semanticTokens.text.muted.value : semanticTokens.interactive.primaryHover.value,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    justifyContent: "center",
    padding: spacingPrimitives.space1.value
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={fieldStyle}
    >
      <span aria-hidden="true" style={{ color: semanticTokens.text.secondary.value, display: "inline-flex", lineHeight: "1" }}>
        {leadingIcon ?? <SearchIcon />}
      </span>
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
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch?.();
          }
        }}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        {...rest}
      />
      <button
        aria-label="Run search"
        disabled={disabled}
        onBlur={() => setIsActionFocused(false)}
        onClick={onSearch}
        onFocus={() => setIsActionFocused(true)}
        style={actionButtonStyle}
        type="button"
      >
        <span aria-hidden="true" style={{ display: "inline-flex", lineHeight: "1" }}>
          {trailingIcon ?? <SearchIcon />}
        </span>
      </button>
    </div>
  );
}
