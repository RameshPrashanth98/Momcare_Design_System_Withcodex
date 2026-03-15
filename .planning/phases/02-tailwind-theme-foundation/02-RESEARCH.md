# Phase 2: Tailwind Theme Foundation - Research

**Created:** 2026-03-16
**Status:** Complete

## Objective

Research what the executor needs to know to implement Tailwind-aligned theming and utility contracts on top of the existing Phase 1 token workspace without leaking hard-coded values back into the design system.

## Phase Requirement Coverage

- **THM-01**: Developers must consume Morph Maternity tokens through Tailwind configuration or equivalent utilities.
- **THM-02**: Developers must consume responsive grid, container, and spacing rules through reusable Tailwind-aligned primitives.
- **THM-03**: Developers must consume semantic utility mappings for interactive, surface, border, and text states.

## Implementation Implications

### Tailwind contract shape

- The existing token files should remain the canonical source of values. Tailwind artifacts should be adapters over those files, not a second source of truth.
- A shared Tailwind preset or theme extension module is the cleanest contract because later apps, components, and Storybook can all consume the same exported mapping.
- Semantic roles should be first-class in the Tailwind surface:
  - colors: `surface`, `text`, `border`, `interactive`, `feedback`
  - elevation: named shadows like `card` and `overlay`
  - layout: container width, columns, gutters, margins, and breakpoints
- Primitive values should still be exposed under a clearly secondary namespace so audit work and exceptional use cases can trace back to the source tokens.

### Typography utility strategy

- The phase should expose both:
  - low-level theme values for `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, and `letterSpacing`
  - named editorial utilities derived from `typographyTokens`
- Editorial utilities are better expressed through a Tailwind plugin or utility-registration helper than by overloading only the theme scale.
- Responsive behavior for `displayHero` and `displaySection` should be encoded directly in the utility output so later component work does not have to reconstruct it.

### Layout utility strategy

- Grid tokens already exist in `gridPrimitives`; the Tailwind layer should wrap them in named container/grid/gutter/margin helpers rather than forcing consumers to remember raw values.
- The source system is breakpoint-explicit, so the Tailwind contract should preserve desktop/tablet/mobile distinctions rather than flattening them into a single fluid abstraction.
- Layout helpers should stay small and composable:
  - a container helper
  - a grid helper
  - breakpoint-aware gutter helpers
  - breakpoint-aware page margin helpers

### State and alias utilities

- The Phase 1 `componentAliases` layer is already limited to common cross-component patterns, which makes it safe to translate into shared Tailwind state helpers now.
- The most useful state-facing contract for this phase is:
  - focus ring utilities
  - button primary background/text/hover aliases
  - input border/background/focus aliases
  - card surface/border/shadow/radius aliases
  - badge surface/text/radius aliases
- These utilities should still resolve to the semantic and primitive token source of truth instead of re-encoding literal CSS values.

## Recommended File Shape

- `my-design-system/package.json` - extend scripts and devDependencies for Tailwind contract validation
- `my-design-system/tailwind.config.ts` - package-local Tailwind config consuming exported theme helpers
- `my-design-system/src/tokens/tailwind-theme.ts` - typed theme extension derived from token modules
- `my-design-system/src/tokens/tailwind-plugin.ts` - named utilities for typography, layout, and alias/state patterns
- `my-design-system/src/tokens/index.ts` - export Tailwind-facing helpers
- `my-design-system/scripts/check-tailwind-contract.mjs` - deterministic validation of Tailwind contract files and exports
- `my-design-system/README.md` - usage notes for semantic-first Tailwind consumption

## Verification Focus

- Tailwind-facing artifacts must import from the existing token files instead of hard-coding parallel values.
- The exported theme surface must cover colors, typography, spacing, shadows, borders, radius, and layout.
- Named utilities must exist for editorial typography, layout, and alias/state patterns.
- Validation scripts should catch missing exports, missing config references, and obvious drift from the token layer.

## Validation Architecture

### Fast feedback strategy

- Keep `npm run typecheck` as the primary structural validation command.
- Add a `tailwind:check` script that reads the Tailwind config and exported helper files and fails on missing contracts or banned placeholder content.
- Continue running `npm run tokens:check` so Phase 1 safeguards stay active while Tailwind mapping is added.

### Sampling intent

- After each Tailwind contract task: run `npm run tailwind:check`
- After each plan wave: run `npm run typecheck && npm run tokens:check && npm run tailwind:check`

## Risks

- If Tailwind mappings duplicate raw values instead of importing tokens, the system will drift the first time tokens change.
- If semantic and primitive utilities are equally emphasized, later component work will regress toward raw-token usage.
- If layout helpers are too abstract, they will stop matching the documented HTML grid behavior.
- If typography utilities are only low-level scales, later components and Storybook docs will recreate editorial styles inconsistently.

## Conclusion

The cleanest execution path is:
1. create a typed Tailwind preset/theme bridge plus validation baseline on top of the existing token files
2. add named editorial, layout, and alias/state utilities that complete the Tailwind consumption contract

That keeps Phase 2 focused on theme delivery and shared primitives while leaving full component implementation to later phases.
