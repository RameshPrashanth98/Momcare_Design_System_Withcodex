import { useId, type CSSProperties, type ReactNode } from "react";

import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, gridPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export type OnboardingLayoutProps = {
  className?: string;
  description?: ReactNode;
  illustration?: ReactNode;
  logo?: ReactNode;
  pageIndicator?: ReactNode;
  primaryAction?: ReactNode;
  secondaryNavigation?: ReactNode;
  title?: ReactNode;
};

export function OnboardingLayout({
  className,
  description,
  illustration,
  logo,
  pageIndicator,
  primaryAction,
  secondaryNavigation,
  title
}: OnboardingLayoutProps) {
  const headingId = useId();
  const descriptionId = useId();

  const shellStyle: CSSProperties = {
    alignItems: "stretch",
    backgroundColor: semanticTokens.surface.subtle.value,
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: spacingPrimitives.space6.value,
    width: "100%"
  };

  const panelStyle: CSSProperties = {
    backgroundColor: componentAliases.card.background.value,
    borderColor: componentAliases.card.border.value,
    borderRadius: componentAliases.card.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: componentAliases.card.shadow.value,
    display: "grid",
    gap: spacingPrimitives.space6.value,
    marginInline: "auto",
    maxWidth: `min(100%, calc(${spacingPrimitives.space48.value} + ${spacingPrimitives.space32.value} + ${spacingPrimitives.space8.value}))`,
    padding: spacingPrimitives.space8.value,
    width: "100%"
  };

  const titleStyle: CSSProperties = {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.displaySection.fontFamily,
    fontSize: typographyTokens.displaySection.fontSize,
    fontWeight: typographyTokens.displaySection.fontWeight,
    letterSpacing: typographyTokens.displaySection.letterSpacing,
    lineHeight: String(typographyTokens.displaySection.lineHeight),
    margin: "0",
    textAlign: "center"
  };

  const descriptionStyle: CSSProperties = {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyLg.fontFamily,
    fontSize: typographyTokens.bodyLg.fontSize,
    fontWeight: typographyTokens.bodyLg.fontWeight,
    letterSpacing: typographyTokens.bodyLg.letterSpacing,
    lineHeight: String(typographyTokens.bodyLg.lineHeight),
    margin: "0",
    textAlign: "center"
  };

  const illustrationFrameStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: componentAliases.card.radius.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    display: "flex",
    justifyContent: "center",
    minHeight: `calc(${spacingPrimitives.space48.value} + ${spacingPrimitives.space20.value})`,
    overflow: "hidden",
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const footerStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value
  };

  return (
    <main aria-describedby={description ? descriptionId : undefined} aria-labelledby={title ? headingId : undefined} className={className} style={shellStyle}>
      <section style={panelStyle}>
        {logo ? <div style={{ display: "flex", justifyContent: "center" }}>{logo}</div> : null}
        <header style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          {title ? <div id={headingId} style={titleStyle}>{title}</div> : null}
          {description ? <div id={descriptionId} style={descriptionStyle}>{description}</div> : null}
        </header>
        {illustration ? <div style={illustrationFrameStyle}>{illustration}</div> : null}
        <footer style={footerStyle}>
          {primaryAction}
          {secondaryNavigation}
          {pageIndicator ? <div style={{ display: "flex", justifyContent: "center", paddingTop: spacingPrimitives.space2.value }}>{pageIndicator}</div> : null}
        </footer>
      </section>
    </main>
  );
}
