import type { ReactNode } from "react";

import { sourceSections } from "../tokens/metadata.js";
import {
  borderWidthPrimitives,
  colorPrimitives,
  fontFamilyPrimitives,
  fontSizePrimitives,
  fontWeightPrimitives,
  gridPrimitives,
  lineHeightPrimitives,
  radiusPrimitives,
  shadowPrimitives,
  spacingPrimitives,
  trackingPrimitives
} from "../tokens/primitives.js";
import { semanticTokens } from "../tokens/semantic.js";
import type { TokenSourceRef, TypographyStyleToken } from "../tokens/types.js";
import { typographyTokens } from "../tokens/typography.js";
import { momCareBrandImage } from "./momcare-brand.js";

type TokenRow = {
  token: string;
  value?: string;
  category?: string;
  usage?: string;
  resolvesTo?: string;
  source?: TokenSourceRef;
};

type Swatch = {
  name: string;
  value: string;
  role: string;
};

type TypographySample = {
  name: string;
  token: string;
  preview: string;
  usage: string;
  style: TypographyStyleToken;
};

type GridSpec = {
  name: string;
  columns: number;
  gutter: string;
  margin: string;
  breakpoint: string;
};

type UsageRow = {
  token: string;
  value: string;
  usage: string;
};

function formatCssVar(name: string): string {
  return `--${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
}

function remToPx(value: string): string {
  if (!value.endsWith("rem")) {
    return value;
  }

  return `${Number.parseFloat(value) * 16}px`;
}

function typeScaleUsage(name: string): string {
  switch (name) {
    case "text6xl":
      return "Hero and brand-led display";
    case "text5xl":
      return "Large display headlines";
    case "text4xl":
      return "Section display headlines";
    case "text3xl":
      return "Page and section titles";
    case "text2xl":
      return "Editorial subheads";
    case "textXl":
      return "Section headings";
    case "textLg":
      return "Card titles";
    case "textMd":
      return "Lead body copy";
    case "textBase":
      return "Default body text";
    case "textSm":
      return "Supporting copy";
    default:
      return "Labels and overlines";
  }
}

function weightUsage(name: string): string {
  switch (name) {
    case "light":
      return "Display and hero headlines";
    case "regular":
      return "Default body copy";
    case "medium":
      return "Sub-headings and card titles";
    default:
      return "Buttons, labels, emphasis";
  }
}

function leadingUsage(name: string): string {
  switch (name) {
    case "tight":
      return "Large display headlines";
    case "relaxed":
      return "Long-form editorial content";
    default:
      return "General text rhythm";
  }
}

function trackingUsage(name: string): string {
  switch (name) {
    case "tight":
      return "Display headlines";
    case "wide":
      return "Buttons and UI labels";
    case "widest":
      return "Eyebrows and tags";
    default:
      return "Default spacing control";
  }
}

function isDark(color: string): boolean {
  const darkColors: string[] = [
    colorPrimitives.roseDark.value,
    colorPrimitives.roseDeep.value,
    colorPrimitives.neutral500.value,
    colorPrimitives.neutral600.value,
    colorPrimitives.neutral800.value,
    colorPrimitives.black.value
  ];

  return darkColors.includes(color);
}

const designTokenRows: TokenRow[] = [
  { token: "--color-primary", value: semanticTokens.interactive.primary.value, category: "Color", usage: "Buttons, links, CTAs", source: semanticTokens.interactive.primary.source },
  { token: "--color-primary-hover", value: semanticTokens.interactive.primaryHover.value, category: "Color", usage: "Hover and active primary state", source: semanticTokens.interactive.primaryHover.source },
  { token: "--color-secondary", value: colorPrimitives.creamWarm.value, category: "Color", usage: "Soft background fills", source: colorPrimitives.creamWarm.source },
  { token: "--color-accent", value: semanticTokens.interactive.accent.value, category: "Color", usage: "Supporting highlights and tags", source: semanticTokens.interactive.accent.source },
  { token: "--color-bg-base", value: semanticTokens.surface.base.value, category: "Color", usage: "Base page background", source: semanticTokens.surface.base.source },
  { token: "--color-text-primary", value: semanticTokens.text.primary.value, category: "Color", usage: "Body copy and headings", source: semanticTokens.text.primary.source },
  { token: "--color-border-default", value: semanticTokens.border.default.value, category: "Color", usage: "Cards, inputs, dividers", source: semanticTokens.border.default.source },
  { token: "--font-display", value: "Cormorant Garamond", category: "Typography", usage: "Headlines and brand wordmark", source: fontFamilyPrimitives.display.source },
  { token: "--font-body", value: "DM Sans", category: "Typography", usage: "Body text and UI labels", source: fontFamilyPrimitives.body.source },
  { token: "--text-base", value: `${fontSizePrimitives.textBase.value} / ${remToPx(fontSizePrimitives.textBase.value)}`, category: "Typography", usage: "Default body size", source: fontSizePrimitives.textBase.source },
  { token: "--space-4", value: `${spacingPrimitives.space4.value} / ${remToPx(spacingPrimitives.space4.value)}`, category: "Spacing", usage: "Base spacing unit on a 4px rhythm", source: spacingPrimitives.space4.source },
  { token: "--radius-md", value: radiusPrimitives.radiusMd.value, category: "Radius", usage: "Default component corner radius", source: radiusPrimitives.radiusMd.source },
  { token: "--shadow-md", value: shadowPrimitives.shadowMd.value, category: "Elevation", usage: "Cards and information panels", source: shadowPrimitives.shadowMd.source },
  { token: "--border-1", value: borderWidthPrimitives.border1.value, category: "Border", usage: "Default subtle borders", source: borderWidthPrimitives.border1.source }
];

const brandPalette = [
  colorPrimitives.roseDark.value,
  colorPrimitives.roseDeep.value,
  colorPrimitives.roseBlush.value,
  colorPrimitives.rosePetal.value,
  colorPrimitives.roseMist.value,
  colorPrimitives.creamWarm.value,
  colorPrimitives.creamMid.value,
  colorPrimitives.sageMid.value
];

const colorGroups: Array<{ title: string; swatches: Swatch[] }> = [
  {
    title: "Rose Â· Primary",
    swatches: [
      { name: "Rose Mist", value: colorPrimitives.roseMist.value, role: "rose-mist" },
      { name: "Rose Petal", value: colorPrimitives.rosePetal.value, role: "rose-petal" },
      { name: "Rose Blush", value: colorPrimitives.roseBlush.value, role: "primary" },
      { name: "Rose Deep", value: colorPrimitives.roseDeep.value, role: "primary-hover" },
      { name: "Rose Dark", value: colorPrimitives.roseDark.value, role: "rose-dark" }
    ]
  },
  {
    title: "Cream Â· Secondary",
    swatches: [
      { name: "Cream Warm", value: colorPrimitives.creamWarm.value, role: "bg-subtle" },
      { name: "Cream Soft", value: colorPrimitives.creamSoft.value, role: "cream-soft" },
      { name: "Cream Mid", value: colorPrimitives.creamMid.value, role: "cream-mid" }
    ]
  },
  {
    title: "Sage Â· Accent",
    swatches: [
      { name: "Sage Light", value: colorPrimitives.sageLight.value, role: "sage-light" },
      { name: "Sage Mid", value: colorPrimitives.sageMid.value, role: "accent" },
      { name: "Sage Deep", value: colorPrimitives.sageDeep.value, role: "sage-deep" }
    ]
  },
  {
    title: "Status Colors",
    swatches: [
      { name: "Success", value: colorPrimitives.success.value, role: "success" },
      { name: "Warning", value: colorPrimitives.warning.value, role: "warning" },
      { name: "Error", value: colorPrimitives.error.value, role: "error" },
      { name: "Info", value: colorPrimitives.info.value, role: "info" }
    ]
  }
];

const neutralBands = [
  ["50", colorPrimitives.neutral50.value],
  ["100", colorPrimitives.neutral100.value],
  ["200", colorPrimitives.neutral200.value],
  ["300", colorPrimitives.neutral300.value],
  ["400", colorPrimitives.neutral400.value],
  ["500", colorPrimitives.neutral500.value],
  ["600", colorPrimitives.neutral600.value],
  ["800", colorPrimitives.neutral800.value],
  ["900", colorPrimitives.black.value]
] as const;

const semanticColorRows: TokenRow[] = [
  { token: "--color-primary", resolvesTo: "rose-blush", value: semanticTokens.interactive.primary.value, usage: "Buttons, links, CTAs" },
  { token: "--color-secondary", resolvesTo: "cream-warm", value: colorPrimitives.creamWarm.value, usage: "Section backgrounds" },
  { token: "--color-accent", resolvesTo: "sage-mid", value: semanticTokens.interactive.accent.value, usage: "Supporting highlights" },
  { token: "--color-text-primary", resolvesTo: "neutral-800", value: semanticTokens.text.primary.value, usage: "Body text and headings" },
  { token: "--color-text-secondary", resolvesTo: "neutral-500", value: semanticTokens.text.secondary.value, usage: "Subtitles and captions" },
  { token: "--color-bg-base", resolvesTo: "white", value: semanticTokens.surface.base.value, usage: "Page background" },
  { token: "--color-border-default", resolvesTo: "neutral-200", value: semanticTokens.border.default.value, usage: "Cards and dividers" }
];

const typographySamples: TypographySample[] = [
  { name: "Display Hero", token: "displayHero", preview: "Beautiful Beginnings", usage: "Hero headlines and high-emphasis brand moments", style: typographyTokens.displayHero },
  { name: "Display Section", token: "displaySection", preview: "Comfort. Care. Confidence.", usage: "Section headers and editorial headlines", style: typographyTokens.displaySection },
  { name: "Body Large", token: "bodyLg", preview: "Lead-in messaging for thoughtful maternity and nursing essentials.", usage: "Lead paragraphs and prominent supporting copy", style: typographyTokens.bodyLg },
  { name: "Body Medium", token: "bodyMd", preview: "Default body copy for product, content, and UI messaging.", usage: "Default interface and content text", style: typographyTokens.bodyMd },
  { name: "Label Small", token: "labelSm", preview: "Shop the Collection", usage: "Buttons, labels, and compact metadata", style: typographyTokens.labelSm },
  { name: "Eyebrow", token: "eyebrow", preview: "Foundations", usage: "Overlines, tags, and section eyebrows", style: typographyTokens.eyebrow },
  { name: "Caption", token: "caption", preview: "Source-aligned technical labels and annotations.", usage: "Token specs and technical copy", style: typographyTokens.caption }
];

const typeScaleRows: TokenRow[] = Object.entries(fontSizePrimitives).map(([name, token]) => ({
  token: formatCssVar(name),
  value: `${token.value} / ${remToPx(token.value)}`,
  usage: typeScaleUsage(name)
}));

const typographyPropertyRows: TokenRow[] = [
  ...Object.entries(fontWeightPrimitives).map(([name, token]) => ({ token: `--font-${name}`, value: String(token.value), usage: weightUsage(name) })),
  ...Object.entries(lineHeightPrimitives).map(([name, token]) => ({ token: `--leading-${name}`, value: String(token.value), usage: leadingUsage(name) })),
  ...Object.entries(trackingPrimitives).map(([name, token]) => ({ token: `--tracking-${name}`, value: token.value, usage: trackingUsage(name) }))
];

const spacingRows = Object.entries(spacingPrimitives).map(([name, token]) => ({
  token: formatCssVar(name),
  rem: token.value,
  px: remToPx(token.value)
}));

const elevationRows: UsageRow[] = [
  { token: "--shadow-none", value: "none", usage: "Flat surfaces, table rows, tabs" },
  { token: "--shadow-xs", value: shadowPrimitives.shadowXs.value, usage: "Input fields, small tags, badges" },
  { token: "--shadow-sm", value: shadowPrimitives.shadowSm.value, usage: "Small cards, chips, selected states" },
  { token: "--shadow-md", value: shadowPrimitives.shadowMd.value, usage: "Product cards and information panels" },
  { token: "--shadow-lg", value: shadowPrimitives.shadowLg.value, usage: "Dropdowns, popovers, tooltips" },
  { token: "--shadow-xl", value: shadowPrimitives.shadowXl.value, usage: "Modals and drawer panels" },
  { token: "--shadow-2xl", value: shadowPrimitives.shadow2xl.value, usage: "Full-screen overlays" },
  { token: "--shadow-inner", value: shadowPrimitives.shadowInner.value, usage: "Pressed and inset states" }
];

const gridSpecs: GridSpec[] = [
  { name: "Desktop", columns: Number(gridPrimitives.gridColsDesktop.value), gutter: String(gridPrimitives.gridGutterLg.value), margin: String(gridPrimitives.gridMarginLg.value), breakpoint: ">= 1024px" },
  { name: "Tablet", columns: Number(gridPrimitives.gridColsTablet.value), gutter: String(gridPrimitives.gridGutterMd.value), margin: String(gridPrimitives.gridMarginMd.value), breakpoint: "768px - 1023px" },
  { name: "Mobile", columns: Number(gridPrimitives.gridColsMobile.value), gutter: String(gridPrimitives.gridGutterSm.value), margin: String(gridPrimitives.gridMarginSm.value), breakpoint: "< 768px" }
];

const gridRows: TokenRow[] = [
  { token: "--grid-cols-desktop", value: String(gridPrimitives.gridColsDesktop.value), usage: "Desktop column count" },
  { token: "--grid-cols-tablet", value: String(gridPrimitives.gridColsTablet.value), usage: "Tablet column count" },
  { token: "--grid-cols-mobile", value: String(gridPrimitives.gridColsMobile.value), usage: "Mobile column count" },
  { token: "--grid-gutter-lg", value: String(gridPrimitives.gridGutterLg.value), usage: "Desktop gutter" },
  { token: "--grid-gutter-md", value: String(gridPrimitives.gridGutterMd.value), usage: "Tablet gutter" },
  { token: "--grid-gutter-sm", value: String(gridPrimitives.gridGutterSm.value), usage: "Mobile gutter" },
  { token: "--grid-margin-lg", value: String(gridPrimitives.gridMarginLg.value), usage: "Desktop side margins" },
  { token: "--grid-margin-md", value: String(gridPrimitives.gridMarginMd.value), usage: "Tablet side margins" },
  { token: "--grid-margin-sm", value: String(gridPrimitives.gridMarginSm.value), usage: "Mobile side margins" },
  { token: "--container-2xl", value: String(gridPrimitives.container2xl.value), usage: "Maximum page width" }
];

const iconSizeRows: UsageRow[] = [
  { token: "icon-sm", value: "16px", usage: "Inline with text, badges, chips" },
  { token: "icon-md", value: "20px", usage: "Button icons and nav items" },
  { token: "icon-lg", value: "24px", usage: "Default standalone icons" },
  { token: "icon-xl", value: "32px", usage: "Feature icons and empty states" },
  { token: "icon-2xl", value: "48px", usage: "Illustration-scale onboarding moments" }
];

const iconExamples = [
  ["ðŸ›", "Bag"],
  ["â™¡", "Wishlist"],
  ["â—Œ", "Account"],
  ["âŒ•", "Search"],
  ["â–¦", "Orders"],
  ["ðŸšš", "Delivery"],
  ["â†©", "Returns"],
  ["âœ¿", "Sustainable"],
  ["â­‘", "Rating"],
  ["â—Ž", "Size Guide"],
  ["ðŸ”’", "Secure"],
  ["âŠ•", "Add"]
] as const;

const borderRows: UsageRow[] = [
  { token: "--border-0", value: borderWidthPrimitives.border0.value, usage: "No border" },
  { token: "--border-1", value: borderWidthPrimitives.border1.value, usage: "Default and subtle borders" },
  { token: "--border-2", value: borderWidthPrimitives.border2.value, usage: "Emphasis and focus rings" },
  { token: "--border-4", value: borderWidthPrimitives.border4.value, usage: "Decorative accent lines" },
  { token: "--border-8", value: borderWidthPrimitives.border8.value, usage: "Strong separators and highlights" }
];

const borderColorRows: TokenRow[] = [
  { token: "--color-border-default", value: semanticTokens.border.default.value, usage: "Cards, inputs, dividers" },
  { token: "--color-border-subtle", value: semanticTokens.border.subtle.value, usage: "Row separators and table lines" },
  { token: "--color-primary", value: semanticTokens.interactive.primary.value, usage: "Active border and focus ring" },
  { token: "--color-rose-deep", value: colorPrimitives.roseDeep.value, usage: "Selected and highlighted items" }
];

const radiusRows: UsageRow[] = [
  { token: "--radius-none", value: radiusPrimitives.radiusNone.value, usage: "Intentionally sharp utility surfaces" },
  { token: "--radius-xs", value: radiusPrimitives.radiusXs.value, usage: "Fine detail corners" },
  { token: "--radius-sm", value: radiusPrimitives.radiusSm.value, usage: "Badges, tags, small chips" },
  { token: "--radius-md", value: radiusPrimitives.radiusMd.value, usage: "Inputs and default buttons" },
  { token: "--radius-lg", value: radiusPrimitives.radiusLg.value, usage: "Cards, panels, modals" },
  { token: "--radius-xl", value: radiusPrimitives.radiusXl.value, usage: "Feature cards and image frames" },
  { token: "--radius-2xl", value: radiusPrimitives.radius2xl.value, usage: "Hero sections and large banners" },
  { token: "--radius-3xl", value: radiusPrimitives.radius3xl.value, usage: "Expressive showcase containers" },
  { token: "--radius-full", value: radiusPrimitives.radiusFull.value, usage: "Pills, avatar rings, and logo-derived circles" }
];

function Shell({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-8 md:px-8">{children}</div>;
}

function Card({ children }: { children: ReactNode }) {
  return <section className="rounded-[24px] border border-border-default bg-surface-base p-6 shadow-card">{children}</section>;
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="border-b border-border-default pb-5">
      <div className="type-eyebrow text-interactive-accent">{eyebrow}</div>
      <h1 className="mt-3 font-display text-5xl font-light tracking-tight text-text-primary">{title}</h1>
      <p className="mt-4 max-w-3xl type-bodyLg text-text-secondary">{description}</p>
    </header>
  );
}

function Note({ children, warning = false }: { children: ReactNode; warning?: boolean }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 type-bodyMd ${warning ? "border-[#E2C07A] bg-[#FBF3E3] text-text-primary" : "border-[#C7D9EC] bg-[#EBF1F8] text-text-primary"}`}>
      {children}
    </div>
  );
}

function TokenTable({
  columns,
  rows
}: {
  columns: Array<{ key: keyof TokenRow; label: string }>;
  rows: TokenRow[];
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border-default">
      <table className="w-full border-collapse bg-surface-base">
        <thead className="bg-surface-muted">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 text-left type-eyebrow text-text-secondary">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.token}-${row.value ?? row.usage}`} className="border-t border-border-subtle">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3 align-top type-bodyMd text-text-secondary">
                  {column.key === "token" ? (
                    <code className="rounded bg-brand-roseMist px-2 py-1 font-mono text-[12px] text-brand-roseDeep">{String(row[column.key] ?? "")}</code>
                  ) : (
                    String(row[column.key] ?? "")
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PaletteStrip({ colors, labels }: { colors: string[]; labels?: string[] }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border-default">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {colors.map((color, index) => (
          <div key={`${color}-${index}`} className="flex h-20 items-end p-3" style={{ backgroundColor: color }}>
            <span className="font-mono text-[11px]" style={{ color: isDark(color) ? "rgba(255,255,255,0.75)" : "rgba(38,38,38,0.65)" }}>
              {labels?.[index] ?? color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {swatches.map((swatch) => (
        <article key={swatch.name} className="overflow-hidden rounded-[20px] border border-border-default bg-surface-base">
          <div className="h-24 w-full border-b border-border-subtle" style={{ backgroundColor: swatch.value }} />
          <div className="space-y-1 p-4">
            <div className="type-labelSm text-text-primary">{swatch.name}</div>
            <div className="font-mono text-[12px] text-text-secondary">{swatch.value}</div>
            <div className="type-caption uppercase tracking-wide text-interactive-accent">{swatch.role}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function OverviewPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Foundations" title="MomCare Design System" description="This Storybook foundations area presents the MomCare Design System through a high-level overview, a design token inventory, and dedicated style guidance pages aligned to the current brand direction." />
      <Card>
        <div className="grid gap-8 rounded-[20px] bg-[linear-gradient(135deg,#FAE8EC_0%,#F9EDE8_100%)] p-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          <div>
            <div className="type-eyebrow text-brand-roseDeep">MomCare Design System</div>
            <h2 className="mt-3 font-display text-[3.5rem] font-light leading-tight tracking-tight text-text-primary">Foundations</h2>
            <p className="mt-4 max-w-2xl type-bodyLg text-text-secondary">
              The core visual language of MomCare: tokens, styles, and reusable patterns that define every Storybook surface and app touchpoint.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-[22px] bg-white/60 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            <img alt="MomCare logo" className="h-auto w-full max-w-[176px]" src={momCareBrandImage} />
            <div className="type-labelSm text-brand-roseDeep">MomCare</div>
            <div className="max-w-[170px] type-caption text-text-secondary">Mother-and-baby centered care, translated into the system&apos;s brand language.</div>
          </div>
        </div>
      </Card>
      <Note>
        Derived from the supplied MomCare visual direction and the existing token foundations in this repository. Display and body font selections should still be validated against the final brand guideline if it changes.
      </Note>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card>
          <h2 className="type-labelSm text-text-primary">Source provenance</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {Object.entries(sourceSections).map(([key, label]) => (
              <div key={key} className="rounded-2xl border border-border-subtle bg-surface-subtle p-4">
                <div className="type-labelSm text-text-primary">{key}</div>
                <div className="mt-2 type-bodyMd text-text-secondary">{label}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="type-labelSm text-text-primary">Storybook coverage</h2>
          <div className="mt-5 space-y-4">
            {[
              ["Foundations", "Overview page with source provenance and system framing."],
              ["Design Tokens", "Source-of-truth table for key color, typography, spacing, border, radius, and elevation decisions."],
              ["Styles", "Dedicated pages for color, typography, spacing, elevation, grid, iconography, border, and radius."]
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-border-subtle bg-surface-subtle p-4">
                <div className="type-labelSm text-text-primary">{title}</div>
                <div className="mt-2 type-bodyMd text-text-secondary">{description}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Shell>
  );
}

export function DesignTokensPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Foundations" title="Design Tokens" description="Design tokens are the single source of truth for visual decisions, mapping abstract names to concrete values shared across components, utilities, and documentation." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Key token inventory</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "category", label: "Category" }, { key: "usage", label: "Usage" }]} rows={designTokenRows} />
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Token provenance</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {designTokenRows.map((row) => (
            <div key={row.token} className="rounded-2xl border border-border-subtle bg-surface-subtle p-4">
              <code className="rounded bg-brand-roseMist px-2 py-1 font-mono text-[12px] text-brand-roseDeep">{row.token}</code>
              <div className="mt-3 type-bodyMd text-text-secondary">
                {row.source ? `${row.source.sourceToken} Â· ${sourceSections[row.source.sourceSection]}` : "Reference guidance"}
              </div>
              {row.source?.provisional ? <div className="mt-2 type-caption text-text-secondary">{row.source.notes ?? "Verify against official brand guidelines."}</div> : null}
            </div>
          ))}
        </div>
      </Card>
    </Shell>
  );
}

export function ColorPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Color" description="The palette centers on warm rose as the primary brand color, with cream for softness and sage for a grounded natural accent." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Brand palette overview</h2>
        <div className="mt-5">
          <PaletteStrip colors={brandPalette} />
        </div>
      </Card>
      {colorGroups.map((group) => (
        <Card key={group.title}>
          <h2 className="type-labelSm text-text-primary">{group.title}</h2>
          <div className="mt-5">
            <SwatchGrid swatches={group.swatches} />
          </div>
        </Card>
      ))}
      <Card>
        <h2 className="type-labelSm text-text-primary">Neutrals</h2>
        <div className="mt-5">
          <PaletteStrip colors={neutralBands.map(([, color]) => color)} labels={neutralBands.map(([label]) => label)} />
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Semantic tokens</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "resolvesTo", label: "Resolves To" }, { key: "value", label: "Hex" }, { key: "usage", label: "Usage" }]} rows={semanticColorRows} />
        </div>
      </Card>
    </Shell>
  );
}

export function TypographyPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Typography" description="Cormorant Garamond provides elegant display contrast while DM Sans carries the functional interface voice. The current selections are documented from the source HTML and remain provisional." />
      <Note warning>Confirm the final display and body typefaces against the official brand guide before treating them as a locked external contract.</Note>
      <Card>
        <h2 className="type-labelSm text-text-primary">Type styles</h2>
        <div className="mt-5 space-y-4">
          {typographySamples.map((sample) => (
            <div key={sample.token} className="rounded-[20px] border border-border-subtle bg-surface-subtle p-5">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <code className="rounded bg-brand-roseMist px-2 py-1 font-mono text-[12px] text-brand-roseDeep">{sample.token}</code>
                <span className="type-caption text-text-secondary">{sample.usage}</span>
              </div>
              <div style={{ fontFamily: sample.style.fontFamily, fontSize: sample.style.fontSize, fontWeight: sample.style.fontWeight, lineHeight: String(sample.style.lineHeight), letterSpacing: sample.style.letterSpacing, color: semanticTokens.text.primary.value }}>
                {sample.preview}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Type scale</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "usage", label: "Usage" }]} rows={typeScaleRows} />
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Weight, leading, and tracking</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "usage", label: "Use Case" }]} rows={typographyPropertyRows} />
        </div>
      </Card>
    </Shell>
  );
}

export function SpacingPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Spacing" description="Spacing uses a 4px base unit to maintain rhythm and consistency across layouts, components, and content groupings." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Spacing scale</h2>
        <div className="mt-5 space-y-4">
          {spacingRows.map((row) => (
            <div key={row.token} className="flex flex-col gap-3 rounded-[20px] border border-border-subtle bg-surface-subtle p-4 md:flex-row md:items-center md:gap-6">
              <div className="w-full max-w-[200px]">
                <div className="font-mono text-[12px] text-brand-roseDeep">{row.token}</div>
                <div className="mt-1 font-mono text-[11px] text-text-secondary">
                  {row.px} / {row.rem}
                </div>
              </div>
              <div className="flex-1">
                <div className="h-4 rounded-full bg-brand-roseBlush/80" style={{ width: row.px }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Shell>
  );
}

export function ElevationPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Elevation" description="Elevation stays warm and soft by using rose-tinted shadows that feel on-brand rather than starkly neutral." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Shadow levels</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {elevationRows.map((row) => (
            <article key={row.token} className="rounded-[20px] bg-surface-base p-5 text-center" style={{ boxShadow: row.token === "--shadow-none" ? "none" : row.value, border: row.token === "--shadow-none" || row.token === "--shadow-inner" ? `1px solid ${semanticTokens.border.default.value}` : undefined }}>
              <div className="rounded-xl bg-surface-muted p-6" style={{ boxShadow: row.token === "--shadow-inner" ? row.value : undefined }}>
                <div className="h-10 rounded-lg bg-surface-subtle" />
              </div>
              <div className="mt-4 font-mono text-[12px] text-brand-roseDeep">{row.token.replace("--", "")}</div>
              <div className="mt-2 type-caption text-text-secondary">{row.usage}</div>
            </article>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Elevation usage</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "usage", label: "When To Use" }]} rows={elevationRows} />
        </div>
      </Card>
    </Shell>
  );
}

export function GridPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Grid" description="The layout system uses 12 columns on desktop, 8 on tablet, and 4 on mobile, with gutters and margins that scale down predictably." />
      {gridSpecs.map((spec) => (
        <Card key={spec.name}>
          <h2 className="type-labelSm text-text-primary">{spec.name} grid</h2>
          <p className="mt-2 type-bodyMd text-text-secondary">
            {spec.columns} columns Â· Gutter {spec.gutter} Â· Margin {spec.margin} Â· Breakpoint {spec.breakpoint}
          </p>
          <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${spec.columns}, minmax(0, 1fr))` }}>
            {Array.from({ length: spec.columns }, (_, index) => (
              <div key={`${spec.name}-${index + 1}`} className="flex h-10 items-center justify-center rounded bg-brand-roseMist font-mono text-[11px] text-brand-roseDeep">
                {index + 1}
              </div>
            ))}
          </div>
        </Card>
      ))}
      <Card>
        <h2 className="type-labelSm text-text-primary">Grid tokens</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "usage", label: "Usage" }]} rows={gridRows} />
        </div>
      </Card>
    </Shell>
  );
}

export function IconographyPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Iconography" description="Icons should feel thin-stroked, rounded, and understated. The reference HTML names sizes and style direction, but the production icon library still needs brand-guideline confirmation." />
      <Note warning>Confirm whether the final icon set is custom, Phosphor, Feather, or another library before codifying component dependencies.</Note>
      <Card>
        <h2 className="type-labelSm text-text-primary">Icon sizes</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {iconSizeRows.map((row) => (
            <article key={row.token} className="rounded-[20px] border border-border-subtle bg-surface-subtle p-4">
              <div className="type-labelSm text-text-primary">{row.token}</div>
              <div className="mt-2 font-mono text-[20px] text-brand-roseDeep">{row.value}</div>
              <div className="mt-3 type-caption text-text-secondary">{row.usage}</div>
            </article>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Icon style direction</h2>
        <p className="mt-2 type-bodyMd text-text-secondary">Stroke 1.5px with rounded caps, aligned to the brand&apos;s clean and modern visual language.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {iconExamples.map(([symbol, name]) => (
            <article key={name} className="flex flex-col items-center gap-3 rounded-[20px] border border-border-subtle bg-surface-subtle px-4 py-5">
              <div className="text-[24px] leading-none text-text-primary">{symbol}</div>
              <div className="font-mono text-[11px] text-text-secondary">{name}</div>
            </article>
          ))}
        </div>
      </Card>
    </Shell>
  );
}

export function BorderPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Border" description="Borders stay minimal by default. The system leans on 1px structure and only escalates thickness for focus, selection, or decorative emphasis." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Border widths</h2>
        <div className="mt-5 space-y-4">
          {borderRows.map((row) => (
            <div key={row.token} className="flex flex-col gap-3 rounded-[20px] border border-border-subtle bg-surface-subtle p-4 md:flex-row md:items-center md:gap-6">
              <div className="h-9 w-24 rounded bg-surface-base" style={{ borderStyle: "solid", borderWidth: row.value, borderColor: row.token === "--border-4" ? colorPrimitives.roseBlush.value : row.token === "--border-8" ? colorPrimitives.rosePetal.value : colorPrimitives.neutral400.value }} />
              <div>
                <div className="font-mono text-[12px] text-brand-roseDeep">{row.token}</div>
                <div className="mt-1 font-mono text-[11px] text-text-secondary">{row.value}</div>
                <div className="mt-2 type-caption text-text-secondary">{row.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Border colors</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "usage", label: "Typical Use" }]} rows={borderColorRows} />
        </div>
      </Card>
    </Shell>
  );
}

export function RadiusPage() {
  return (
    <Shell>
      <SectionHeader eyebrow="Styles" title="Radius" description="The radius scale mirrors the circle-based geometry of the brand mark. Rounded corners are the default language across components and layouts." />
      <Card>
        <h2 className="type-labelSm text-text-primary">Radius scale</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {radiusRows.map((row) => (
            <article key={row.token} className="rounded-[20px] border border-border-subtle bg-surface-subtle p-4 text-center">
              <div className="mx-auto mb-4 h-16 w-16 bg-brand-rosePetal" style={{ borderRadius: row.value }} />
              <div className="font-mono text-[12px] text-brand-roseDeep">{row.token}</div>
              <div className="mt-1 font-mono text-[11px] text-text-secondary">{row.value}</div>
              <div className="mt-2 type-caption text-text-secondary">{row.usage}</div>
            </article>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="type-labelSm text-text-primary">Radius usage</h2>
        <div className="mt-5">
          <TokenTable columns={[{ key: "token", label: "Token" }, { key: "value", label: "Value" }, { key: "usage", label: "Common Application" }]} rows={radiusRows} />
        </div>
      </Card>
    </Shell>
  );
}

