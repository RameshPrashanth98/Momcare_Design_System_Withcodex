import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

type TypographyVariant = "display" | "headline" | "title" | "body" | "label" | "caption";
type TypographyElement = "h1" | "h2" | "h3" | "p" | "span" | "div";

export type TypographyProps = {
  as?: TypographyElement;
  children: ReactNode;
  className?: string;
  color?: string;
  variant?: TypographyVariant;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "color">;

const variantMap = {
  display: typographyTokens.displaySection,
  headline: typographyTokens.bodyLg,
  title: typographyTokens.labelSm,
  body: typographyTokens.bodyMd,
  label: typographyTokens.labelSm,
  caption: typographyTokens.caption
} as const;

export function Typography({
  as = "div",
  children,
  className,
  color = semanticTokens.text.primary.value,
  variant = "body",
  ...rest
}: TypographyProps) {
  const Component = as;
  const token = variantMap[variant];

  const style: CSSProperties = {
    color,
    fontFamily: token.fontFamily,
    fontSize: token.fontSize,
    fontWeight: token.fontWeight,
    letterSpacing: token.letterSpacing,
    lineHeight: String(token.lineHeight),
    margin: "0"
  };

  return (
    <Component className={className} style={style} {...rest}>
      {children}
    </Component>
  );
}
