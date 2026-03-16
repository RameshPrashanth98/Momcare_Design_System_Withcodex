import { useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, fontFamilyPrimitives, fontSizePrimitives, lineHeightPrimitives, radiusPrimitives, shadowPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type BottomnavbarState = "default" | "hover" | "active" | "focus" | "disabled";
export type BottomnavbarSize = "compact" | "comfortable" | "spacious";
export type BottomnavbarVariant = "brand" | "subtle";
export type BottomnavbarLabelBehavior = "always" | "selected" | "none";

export type BottomnavbarDestination = {
  value: string;
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
  ariaLabel?: string;
  badge?: ReactNode;
  disabled?: boolean;
  state?: BottomnavbarState;
};

export type BottomnavbarProps = {
  ariaLabel?: string;
  className?: string;
  defaultValue?: string;
  destinations: BottomnavbarDestination[];
  id?: string;
  labelBehavior?: BottomnavbarLabelBehavior;
  onValueChange?: (value: string) => void;
  size?: BottomnavbarSize;
  value?: string;
  variant?: BottomnavbarVariant;
};

const sizeTokens = {
  compact: {
    iconFrame: spacingPrimitives.space5.value,
    itemGap: spacingPrimitives.space1.value,
    itemPaddingBlock: spacingPrimitives.space2.value,
    itemPaddingInline: spacingPrimitives.space2.value,
    labelStyle: typographyTokens.caption,
    navMinHeight: `calc(${spacingPrimitives.space12.value} + ${spacingPrimitives.space4.value})`,
    navPaddingBlock: spacingPrimitives.space2.value,
    navPaddingInline: spacingPrimitives.space3.value
  },
  comfortable: {
    iconFrame: spacingPrimitives.space6.value,
    itemGap: spacingPrimitives.space1.value,
    itemPaddingBlock: spacingPrimitives.space2.value,
    itemPaddingInline: spacingPrimitives.space3.value,
    labelStyle: typographyTokens.labelSm,
    navMinHeight: `calc(${spacingPrimitives.space12.value} + ${spacingPrimitives.space6.value})`,
    navPaddingBlock: spacingPrimitives.space2.value,
    navPaddingInline: spacingPrimitives.space4.value
  },
  spacious: {
    iconFrame: spacingPrimitives.space8.value,
    itemGap: spacingPrimitives.space2.value,
    itemPaddingBlock: spacingPrimitives.space3.value,
    itemPaddingInline: spacingPrimitives.space4.value,
    labelStyle: typographyTokens.labelSm,
    navMinHeight: `calc(${spacingPrimitives.space16.value} + ${spacingPrimitives.space4.value})`,
    navPaddingBlock: spacingPrimitives.space3.value,
    navPaddingInline: spacingPrimitives.space4.value
  }
} as const;

const variantTokens = {
  brand: {
    activeIndicator: colorPrimitives.roseMist.value,
    activeIndicatorPressed: colorPrimitives.rosePetal.value,
    activeText: semanticTokens.interactive.primaryHover.value,
    border: semanticTokens.border.subtle.value,
    disabledSurface: semanticTokens.surface.muted.value,
    disabledText: semanticTokens.text.muted.value,
    hoverSurface: semanticTokens.surface.subtle.value,
    inactiveText: semanticTokens.text.secondary.value,
    navShadow: shadowPrimitives.shadowSm.value,
    pressedSurface: colorPrimitives.creamSoft.value,
    surface: semanticTokens.surface.base.value
  },
  subtle: {
    activeIndicator: colorPrimitives.sageLight.value,
    activeIndicatorPressed: colorPrimitives.sageMid.value,
    activeText: colorPrimitives.sageDeep.value,
    border: semanticTokens.border.default.value,
    disabledSurface: semanticTokens.surface.muted.value,
    disabledText: semanticTokens.text.muted.value,
    hoverSurface: semanticTokens.surface.base.value,
    inactiveText: semanticTokens.text.secondary.value,
    navShadow: shadowPrimitives.shadowXs.value,
    pressedSurface: colorPrimitives.creamSoft.value,
    surface: semanticTokens.surface.subtle.value
  }
} as const;

const iconFontSize = {
  compact: fontSizePrimitives.textBase.value,
  comfortable: fontSizePrimitives.textLg.value,
  spacious: fontSizePrimitives.textXl.value
} as const;

function useControllableValue(
  controlledValue: string | undefined,
  defaultValue: string | undefined,
  fallbackValue: string | undefined
) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? fallbackValue);

  return {
    selectedValue: controlledValue ?? uncontrolledValue ?? fallbackValue,
    setSelectedValue: setUncontrolledValue
  };
}

export function Bottomnavbar({
  ariaLabel = "Bottom navigation",
  className,
  defaultValue,
  destinations,
  id,
  labelBehavior = "always",
  onValueChange,
  size = "comfortable",
  value,
  variant = "brand"
}: BottomnavbarProps) {
  const generatedId = useId();
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [pressedValue, setPressedValue] = useState<string | null>(null);
  const { selectedValue, setSelectedValue } = useControllableValue(value, defaultValue, destinations[0]?.value);

  const componentId = id ?? generatedId;
  const activeSize = sizeTokens[size];
  const activeVariant = variantTokens[variant];

  const enabledValues = destinations
    .filter((destination) => !(destination.disabled || destination.state === "disabled"))
    .map((destination) => destination.value);

  const moveFocus = (currentValue: string, direction: "next" | "previous" | "first" | "last") => {
    if (enabledValues.length === 0) {
      return;
    }

    const currentIndex = enabledValues.indexOf(currentValue);
    if (direction === "first") {
      buttonRefs.current[enabledValues[0]]?.focus();
      return;
    }

    if (direction === "last") {
      buttonRefs.current[enabledValues[enabledValues.length - 1]]?.focus();
      return;
    }

    const offset = direction === "next" ? 1 : -1;
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + offset + enabledValues.length) % enabledValues.length;
    buttonRefs.current[enabledValues[nextIndex]]?.focus();
  };

  const handleSelect = (nextValue: string, disabled?: boolean) => {
    if (disabled) {
      return;
    }

    setSelectedValue(nextValue);
    onValueChange?.(nextValue);
  };

  const navStyle: CSSProperties = {
    backgroundColor: activeVariant.surface,
    borderTopColor: activeVariant.border,
    borderTopStyle: "solid",
    borderTopWidth: borderWidthPrimitives.border1.value,
    boxShadow: activeVariant.navShadow,
    display: "block",
    minHeight: activeSize.navMinHeight,
    paddingBlock: activeSize.navPaddingBlock,
    paddingInline: activeSize.navPaddingInline,
    width: "100%"
  };

  const listStyle: CSSProperties = {
    alignItems: "stretch",
    display: "grid",
    gap: spacingPrimitives.space2.value,
    gridTemplateColumns: `repeat(${destinations.length}, minmax(0, 1fr))`,
    listStyle: "none",
    margin: "0",
    padding: "0"
  };

  return (
    <nav aria-label={ariaLabel} className={className} id={componentId} style={navStyle}>
      <ul style={listStyle}>
        {destinations.map((destination) => {
          const forcedState = destination.state ?? "default";
          const isDisabled = destination.disabled || forcedState === "disabled";
          const isSelected = destination.value === selectedValue;
          const isHovered = forcedState === "hover" || hoveredValue === destination.value;
          const isFocused = forcedState === "focus" || focusedValue === destination.value;
          const isPressed = forcedState === "active" || pressedValue === destination.value;
          const shouldShowLabel = labelBehavior === "always" || (labelBehavior === "selected" && isSelected);
          const itemBackground = isDisabled
            ? activeVariant.disabledSurface
            : isSelected
              ? (isPressed ? activeVariant.activeIndicatorPressed : activeVariant.activeIndicator)
              : (isPressed ? activeVariant.pressedSurface : (isHovered || isFocused ? activeVariant.hoverSurface : "transparent"));
          const itemColor = isDisabled
            ? activeVariant.disabledText
            : (isSelected || isPressed ? activeVariant.activeText : activeVariant.inactiveText);

          const buttonStyle: CSSProperties = {
            alignItems: "center",
            appearance: "none",
            backgroundColor: itemBackground,
            border: "none",
            borderRadius: radiusPrimitives.radius2xl.value,
            color: itemColor,
            cursor: isDisabled ? "not-allowed" : "pointer",
            display: "flex",
            flexDirection: "column",
            gap: activeSize.itemGap,
            justifyContent: "center",
            minHeight: `calc(${activeSize.iconFrame} + ${activeSize.itemPaddingBlock} + ${activeSize.itemPaddingBlock})`,
            outlineColor: isFocused ? componentAliases.focusRing.color.value : "transparent",
            outlineOffset: componentAliases.focusRing.offset.value,
            outlineStyle: "solid",
            outlineWidth: isFocused ? componentAliases.focusRing.width.value : borderWidthPrimitives.border0.value,
            paddingBlock: activeSize.itemPaddingBlock,
            paddingInline: activeSize.itemPaddingInline,
            position: "relative",
            textAlign: "center",
            width: "100%"
          };

          const iconWrapperStyle: CSSProperties = {
            alignItems: "center",
            display: "inline-flex",
            fontSize: iconFontSize[size],
            height: activeSize.iconFrame,
            justifyContent: "center",
            width: activeSize.iconFrame
          };

          const labelStyle: CSSProperties = {
            color: itemColor,
            fontFamily: activeSize.labelStyle.fontFamily,
            fontSize: activeSize.labelStyle.fontSize,
            fontWeight: String(activeSize.labelStyle.fontWeight),
            letterSpacing: activeSize.labelStyle.letterSpacing,
            lineHeight: String(activeSize.labelStyle.lineHeight),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          };

          const badgeStyle: CSSProperties = {
            backgroundColor: componentAliases.badge.background.value,
            borderRadius: componentAliases.badge.radius.value,
            color: componentAliases.badge.text.value,
            display: "inline-flex",
            fontFamily: fontFamilyPrimitives.body.value,
            fontSize: fontSizePrimitives.textXs.value,
            fontWeight: String(typographyTokens.eyebrow.fontWeight),
            justifyContent: "center",
            lineHeight: String(lineHeightPrimitives.normal.value),
            minWidth: spacingPrimitives.space5.value,
            paddingBlock: spacingPrimitives.space1.value,
            paddingInline: spacingPrimitives.space2.value
          };

          const iconNode = isSelected && destination.activeIcon ? destination.activeIcon : destination.icon;

          return (
            <li key={destination.value}>
              <button
                aria-current={isSelected ? "page" : undefined}
                aria-disabled={isDisabled || undefined}
                aria-label={destination.ariaLabel ?? destination.label}
                disabled={isDisabled}
                onBlur={() => setFocusedValue((currentValue) => (currentValue === destination.value ? null : currentValue))}
                onClick={() => handleSelect(destination.value, isDisabled)}
                onFocus={() => setFocusedValue(destination.value)}
                onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    moveFocus(destination.value, "next");
                  }

                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    moveFocus(destination.value, "previous");
                  }

                  if (event.key === "Home") {
                    event.preventDefault();
                    moveFocus(destination.value, "first");
                  }

                  if (event.key === "End") {
                    event.preventDefault();
                    moveFocus(destination.value, "last");
                  }

                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleSelect(destination.value, isDisabled);
                  }
                }}
                onMouseDown={() => setPressedValue(destination.value)}
                onMouseEnter={() => setHoveredValue(destination.value)}
                onMouseLeave={() => {
                  setHoveredValue((currentValue) => (currentValue === destination.value ? null : currentValue));
                  setPressedValue((currentValue) => (currentValue === destination.value ? null : currentValue));
                }}
                onMouseUp={() => setPressedValue((currentValue) => (currentValue === destination.value ? null : currentValue))}
                ref={(node) => {
                  buttonRefs.current[destination.value] = node;
                }}
                style={buttonStyle}
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                <span aria-hidden="true" style={iconWrapperStyle}>
                  {iconNode}
                </span>
                {shouldShowLabel ? <span style={labelStyle}>{destination.label}</span> : null}
                {destination.badge ? <span style={badgeStyle}>{destination.badge}</span> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
