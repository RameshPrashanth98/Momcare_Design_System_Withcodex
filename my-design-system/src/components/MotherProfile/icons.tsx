import type { CSSProperties, ReactNode, SVGProps } from "react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";

export function MotherProfileIconBase({ children, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 15L19 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M10 7L15 12L10 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function UserCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <circle cx="12" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 18C7.6 15.8 9.5 14.5 12 14.5C14.5 14.5 16.4 15.8 17.5 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <rect height="13" rx="2" stroke="currentColor" strokeWidth="1.5" width="14" x="5" y="7" />
      <path d="M8 4V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M16 4V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M5 11H19" stroke="currentColor" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function ClinicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M12 4L19 8V18H5V8L12 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M12 9V15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M9 12H15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function BloodDropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M12 4C12 4 7 10 7 13.5C7 16.5 9.2 19 12 19C14.8 19 17 16.5 17 13.5C17 10 12 4 12 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function HeartPulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M4 12H8L10 9L13 15L15 12H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M12 20C7 16.8 4 14.1 4 9.8C4 7.4 5.9 5.5 8.3 5.5C9.8 5.5 11.1 6.2 12 7.4C12.9 6.2 14.2 5.5 15.7 5.5C18.1 5.5 20 7.4 20 9.8C20 14.1 17 16.8 12 20Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M12 4L18 6V11C18 14.7 15.7 18.1 12 19.5C8.3 18.1 6 14.7 6 11V6L12 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M5 10.5L12 5L19 10.5V19H5V10.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function MothersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 18C8 15.6 9.9 14 12 14C14.1 14 16 15.6 17 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function VisitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <rect height="12" rx="2" stroke="currentColor" strokeWidth="1.5" width="14" x="5" y="6" />
      <path d="M9 12H15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 9V15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function RecordsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <path d="M8 5H16L19 8V19H8V5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M16 5V8H19" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M10 12H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M10 15H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function MoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <circle cx="6.5" cy="12" fill="currentColor" r="1.25" />
      <circle cx="12" cy="12" fill="currentColor" r="1.25" />
      <circle cx="17.5" cy="12" fill="currentColor" r="1.25" />
    </MotherProfileIconBase>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <MotherProfileIconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4C14 6.2 15 9 15 12C15 15 14 17.8 12 20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 4C10 6.2 9 9 9 12C9 15 10 17.8 12 20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </MotherProfileIconBase>
  );
}

export function surfaceCardStyle(): CSSProperties {
  return {
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusXl.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    boxShadow: semanticTokens.elevation.card.value,
    width: "100%"
  };
}

export function sectionHeaderTextStyle(): CSSProperties {
  return {
    color: semanticTokens.text.primary.value,
    fontFamily: typographyTokens.labelSm.fontFamily,
    fontSize: typographyTokens.labelSm.fontSize,
    fontWeight: typographyTokens.labelSm.fontWeight,
    letterSpacing: typographyTokens.labelSm.letterSpacing,
    lineHeight: String(typographyTokens.labelSm.lineHeight),
    margin: "0"
  };
}

export function sectionBodyTextStyle(): CSSProperties {
  return {
    color: semanticTokens.text.secondary.value,
    fontFamily: typographyTokens.bodyMd.fontFamily,
    fontSize: typographyTokens.bodyMd.fontSize,
    fontWeight: typographyTokens.bodyMd.fontWeight,
    letterSpacing: typographyTokens.bodyMd.letterSpacing,
    lineHeight: String(typographyTokens.bodyMd.lineHeight),
    margin: "0"
  };
}

export function avatarShell(content: ReactNode): ReactNode {
  const style: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusFull.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    height: spacingPrimitives.space12.value,
    justifyContent: "center",
    overflow: "hidden",
    width: spacingPrimitives.space12.value
  };

  return <span aria-hidden="true" style={style}>{content}</span>;
}
