export type TokenSourceSection =
  | "root-colors"
  | "typography"
  | "spacing"
  | "elevation"
  | "grid"
  | "border"
  | "radius"
  | "iconography";

export interface TokenSourceRef {
  sourceToken: string;
  sourceSection: TokenSourceSection;
  provisional: boolean;
  notes?: string;
}

export interface PrimitiveToken<TValue = string | number> {
  value: TValue;
  source: TokenSourceRef;
}

export interface SemanticToken<TValue = string> {
  value: TValue;
  source: TokenSourceRef;
  description: string;
}

export interface ComponentAliasToken<TValue = string> {
  value: TValue;
  source: TokenSourceRef;
  description: string;
}

export interface TypographyStyleToken {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  source: TokenSourceRef;
  responsive?: {
    md?: Partial<Omit<TypographyStyleToken, "source" | "responsive">>;
    lg?: Partial<Omit<TypographyStyleToken, "source" | "responsive">>;
  };
}
