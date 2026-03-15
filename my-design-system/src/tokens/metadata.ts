import type { TokenSourceRef, TokenSourceSection } from "./types.js";

export const sourceSections: Record<TokenSourceSection, string> = {
  "root-colors": "HTML :root color declarations",
  typography: "HTML typography section and token table",
  spacing: "HTML spacing section",
  elevation: "HTML elevation section",
  grid: "HTML grid section",
  border: "HTML border section",
  radius: "HTML radius section",
  iconography: "HTML iconography section"
};

export function createSourceRef(
  sourceToken: string,
  sourceSection: TokenSourceSection,
  provisional = false,
  notes?: string
): TokenSourceRef {
  return {
    sourceToken,
    sourceSection,
    provisional,
    notes
  };
}
