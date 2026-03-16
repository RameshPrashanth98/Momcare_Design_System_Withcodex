import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";

import { colorPrimitives, fontFamilyPrimitives, fontSizePrimitives, lineHeightPrimitives, spacingPrimitives } from "../tokens/primitives.js";
import { semanticTokens } from "../tokens/semantic.js";
import { typographyTokens } from "../tokens/typography.js";

const colorGroups = [
  {
    title: "Brand Palette",
    swatches: [
      ["Rose Blush", colorPrimitives.roseBlush.value],
      ["Rose Petal", colorPrimitives.rosePetal.value],
      ["Rose Mist", colorPrimitives.roseMist.value],
      ["Sage Mid", colorPrimitives.sageMid.value],
      ["Cream Warm", colorPrimitives.creamWarm.value]
    ]
  },
  {
    title: "Semantic Surfaces",
    swatches: [
      ["Surface Base", semanticTokens.surface.base.value],
      ["Surface Subtle", semanticTokens.surface.subtle.value],
      ["Surface Muted", semanticTokens.surface.muted.value],
      ["Text Primary", semanticTokens.text.primary.value],
      ["Interactive Primary", semanticTokens.interactive.primary.value]
    ]
  }
] as const;

const typographySamples = [
  ["Display Hero", typographyTokens.displayHero],
  ["Display Section", typographyTokens.displaySection],
  ["Body Large", typographyTokens.bodyLg],
  ["Body Medium", typographyTokens.bodyMd],
  ["Label Small", typographyTokens.labelSm],
  ["Eyebrow", typographyTokens.eyebrow],
  ["Caption", typographyTokens.caption]
] as const;

function swatchLabelStyle(color: string): CSSProperties {
  return {
    color,
    fontFamily: fontFamilyPrimitives.body.value,
    fontSize: fontSizePrimitives.textSm.value,
    lineHeight: String(lineHeightPrimitives.normal.value)
  };
}

function WelcomePage() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
      <header className="rounded-3xl border border-border-default bg-surface-base p-8 shadow-card">
        <p className="type-eyebrow text-interactive-accent">Mom Care Foundations</p>
        <h1 className="type-displaySection text-text-primary">Storybook 8 is ready for the Mom Care design system.</h1>
        <p className="type-bodyLg max-w-3xl text-text-secondary">
          This workspace now uses the shared Tailwind contract, token-driven foundations, and Storybook accessibility tooling as the base for future components.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        {colorGroups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-border-default bg-surface-base p-6 shadow-card">
            <h2 className="type-labelSm text-text-primary">{group.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.swatches.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-border-subtle bg-surface-subtle p-4">
                  <div
                    style={{ backgroundColor: value }}
                    className="mb-3 h-20 rounded-2xl border border-border-subtle"
                  />
                  <div style={swatchLabelStyle(semanticTokens.text.primary.value)}>{label}</div>
                  <div style={swatchLabelStyle(semanticTokens.text.secondary.value)}>{value}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-border-default bg-surface-base p-6 shadow-card">
        <h2 className="type-labelSm text-text-primary">Typography Scale</h2>
        <div className="mt-6 flex flex-col gap-5">
          {typographySamples.map(([label, styleToken]) => (
            <div key={label} className="rounded-2xl border border-border-subtle bg-surface-subtle p-5">
              <div className="mb-2 type-caption text-text-secondary">{label}</div>
              <div
                style={{
                  fontFamily: styleToken.fontFamily,
                  fontSize: styleToken.fontSize,
                  fontWeight: styleToken.fontWeight,
                  letterSpacing: styleToken.letterSpacing,
                  lineHeight: String(styleToken.lineHeight),
                  color: semanticTokens.text.primary.value
                }}
              >
                Nurturing care for every stage of motherhood.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundations/Welcome",
  component: WelcomePage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof WelcomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

