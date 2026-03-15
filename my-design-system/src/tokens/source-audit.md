# Source Audit

This document maps the Morph Maternity HTML foundations file to the token artifacts in `src/tokens`.

## Colors

- `src/tokens/primitives.ts` captures the brand rose, cream, sage, neutral, and status colors from the HTML `:root` block.
- `src/tokens/semantic.ts` maps those primitives into surface, text, border, interactive, and feedback roles.

## Typography

- `src/tokens/primitives.ts` captures the source font families, font sizes, line heights, tracking, and weights.
- `src/tokens/typography.ts` turns those foundations into editorial-first styles such as `displayHero`, `displaySection`, `bodyLg`, `bodyMd`, `labelSm`, `eyebrow`, and `caption`.
- Responsive handling is defined for major display styles only, matching the Phase 1 context decision.

## Spacing

- `src/tokens/primitives.ts` maps the 4px-based spacing scale from `--space-1` through `--space-48`.

## Elevation

- `src/tokens/primitives.ts` captures the rose-tinted shadow tokens.
- `src/tokens/component-aliases.ts` reuses those values for card-level alias tokens.

## Grid

- `src/tokens/primitives.ts` captures the desktop, tablet, and mobile grid columns, gutters, margins, and `container2xl` width from the grid section.

## Border

- `src/tokens/primitives.ts` captures border width values.
- `src/tokens/semantic.ts` and `src/tokens/component-aliases.ts` map them into default, emphasis, and focus usages.

## Radius

- `src/tokens/primitives.ts` maps the rounded-corner scale used across the source document.
- `src/tokens/component-aliases.ts` applies those radii to buttons, inputs, cards, and badges.

## Iconography

- Phase 1 does not create a dedicated icon token file yet.
- The source iconography guidance is recorded here because the HTML explicitly flags it for later confirmation against the official brand guidelines document.

## Provisional items

Only source items explicitly flagged in the HTML remain provisional in Phase 1.

- `font-display` / display-family usage: marked provisional in token metadata because the source token table flags the headline/brand typeface for brand-guideline verification.
- `font-body` / body-style usage: marked provisional in token metadata because the source token table flags the body/UI typeface for brand-guideline verification.
- Iconography guidance: documented as review-sensitive because the HTML explicitly says the icon library and custom illustration guidance should be confirmed against the official brand guidelines.

## Brand-guideline follow-up

Downstream Storybook work should surface the same provisional notes close to the token documentation so later review can confirm or revise these items without losing source traceability.
