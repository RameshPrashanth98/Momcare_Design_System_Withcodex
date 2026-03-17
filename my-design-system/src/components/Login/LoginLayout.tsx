import type { CSSProperties, ReactNode } from "react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

export type LoginLayoutProps = {
  footer: ReactNode;
  form: ReactNode;
  header: ReactNode;
  info: ReactNode;
  languageSwitcher: ReactNode;
};

export function LoginLayout({ footer, form, header, info, languageSwitcher }: LoginLayoutProps) {
  const shellStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.subtle.value,
    minHeight: "100vh",
    padding: spacingPrimitives.space6.value,
    width: "100%"
  };

  const contentStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space6.value,
    justifyItems: "center",
    marginInline: "auto",
    maxWidth: `calc(${spacingPrimitives.space48.value} + ${spacingPrimitives.space32.value})`
  };

  const languageStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  };

  const formStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    width: "100%"
  };

  return (
    <main style={shellStyle}>
      <div style={contentStyle}>
        <div style={languageStyle}>{languageSwitcher}</div>
        {header}
        <div style={formStyle}>{form}</div>
        {info}
        {footer}
      </div>
    </main>
  );
}
