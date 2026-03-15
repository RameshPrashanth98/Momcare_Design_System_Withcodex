# Phase 1: Source Audit and Token Architecture - Research

**Created:** 2026-03-16
**Status:** Complete

## Objective

Research what the executor needs to know to plan and implement the token architecture for the Morph Maternity design system without drifting from the source HTML or overreaching into Tailwind/theme work reserved for Phase 2.

## Phase Requirement Coverage

- **FND-01**: Color tokens must be extracted into a canonical token set.
- **FND-02**: Typography tokens must include families, sizes, line heights, tracking, and weights.
- **FND-03**: Spacing, radius, border, shadow, and layout tokens must be captured without raw-value duplication in downstream components.
- **FND-04**: Documentation must preserve source intent, naming conventions, and flagged brand-guideline caveats.

## Implementation Implications

### Token layering

- Use three explicit layers from the start:
  - `primitive` tokens for direct source-derived values
  - `semantic` tokens for reusable usage roles
  - `componentAliases` for common cross-component mappings and states
- Keep brand-forward naming in all three layers so the system remains traceable to the source artifact.

### Token storage format

- Start with TypeScript token modules in `my-design-system/src/tokens/` so later phases can import strongly typed values directly.
- Keep extraction manual and explicit in Phase 1 rather than introducing a build-time transformation pipeline too early.
- Preserve token metadata such as `sourceToken`, `sourceSection`, and `provisional` so Storybook and later phases can surface review notes.

### Source audit scope

- Phase 1 should capture:
  - brand, semantic, text, background, border, and status colors
  - typography foundations and editorial-first text styles
  - spacing, radii, border widths, shadows, and grid/container tokens
- The source HTML already flags iconography and some brand details for verification; those should be recorded as provisional, not silently normalized away.

### What not to do in Phase 1

- Do not wire tokens into Tailwind configuration yet; that belongs to Phase 2.
- Do not implement React components or Storybook stories yet; those belong to later phases.
- Do not create broad speculative component alias coverage beyond common cross-component patterns.

## Recommended File Shape

- `my-design-system/package.json` with scripts for `typecheck` and token validation
- `my-design-system/tsconfig.json`
- `my-design-system/src/tokens/types.ts`
- `my-design-system/src/tokens/metadata.ts`
- `my-design-system/src/tokens/primitives.ts`
- `my-design-system/src/tokens/semantic.ts`
- `my-design-system/src/tokens/component-aliases.ts`
- `my-design-system/src/tokens/typography.ts`
- `my-design-system/src/tokens/index.ts`
- `my-design-system/src/tokens/source-audit.md`
- `my-design-system/scripts/check-token-hardcodes.mjs`

## Verification Focus

- The token layer should expose extracted values and metadata as real code artifacts, not placeholder docs.
- Typography should include named editorial styles and responsive behavior for display/heading styles.
- Provisional items must be marked in both code metadata and documentation.
- The repo should include at least one automated safeguard against hard-coded token values being bypassed later.

## Validation Architecture

### Fast feedback strategy

- Use `npm run typecheck` to verify the token module graph stays typed and importable.
- Use `npm run tokens:check` to verify token metadata and detect obvious hard-coded value drift in the token layer.
- Keep feedback local to the token workspace so Phase 1 can execute before the broader app/tooling phases land.

### Sampling intent

- After each token-layer task: run `npm run tokens:check`
- After each plan wave: run `npm run typecheck && npm run tokens:check`

## Risks

- If component aliases are too broad, Phase 1 will lock in premature component assumptions.
- If token metadata is too shallow, later phases will lose source traceability and provisional warnings.
- If typography is reduced too aggressively, later Storybook and component phases will have to reconstruct editorial styles from raw sizes.

## Conclusion

The cleanest plan is a two-step execution path:
1. establish the workspace, token schema, metadata conventions, and validation guardrails
2. extract the audited source values into primitive, semantic, component alias, and typography artifacts with accompanying source-audit documentation

This keeps Phase 1 within the roadmap boundary while leaving Phase 2 a stable contract for Tailwind integration.
