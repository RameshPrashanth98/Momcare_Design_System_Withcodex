# Phase 2: Tailwind Theme Foundation - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning
**Source:** Partial discuss-phase checkpoint plus direct plan request

<domain>
## Phase Boundary

Make the Phase 1 token system directly consumable through Tailwind-aligned configuration, utilities, and helper exports. This phase should convert the existing token modules into a Tailwind-facing contract for colors, typography, spacing, shadows, borders, radius, grid, container, gutters, margins, and shared interaction states without starting full component implementation.

</domain>

<decisions>
## Implementation Decisions

### Tailwind token exposure
- Tailwind should expose semantic tokens as the default utility surface for day-to-day implementation.
- Primitive tokens should stay available for audit work and edge cases, but they must be clearly secondary to semantic utilities.
- Semantic Tailwind utilities should use clean utility-oriented names such as `bg-surface`, `text-primary`, `border-default`, and `ring-focus`.
- Phase 2 should guide authors toward semantic-token usage first through exported helpers, docs, and examples rather than hard enforcement.

### Layout utility model
- The Tailwind-facing layout layer should be a small named system rather than only a bag of raw theme values.
- That named system should cover container width, grid columns, gutters, and page margins.
- Responsive layout behavior should be explicit in the Tailwind contract for desktop, tablet, and mobile rules.
- Layout utilities should stay close to the source HTML with only minimal cleanup so source structure remains recognizable.

### Typography utility shape
- Tailwind should ship named editorial text-style utilities alongside the low-level font family, size, weight, line-height, and tracking tokens.
- Editorial text styles should map directly to the existing `displayHero`, `displaySection`, `bodyLg`, `bodyMd`, `labelSm`, `eyebrow`, and `caption` token names rather than introducing a parallel naming scheme.
- Responsive typography behavior should be explicit for the major display and heading utilities, while body and utility styles remain mostly stable.

### State and alias strategy
- Tailwind utilities should expose shared state mappings derived from the Phase 1 component alias layer for common patterns only: button, input, card, badge, and focus ring.
- Shared state helpers should cover the current cross-component patterns from Phase 1 rather than prebuilding exhaustive future component APIs.
- Alias-driven utilities should remain aligned with the semantic-token layer so state utilities still point back to the same token contract instead of duplicating raw values.

### Claude's Discretion
- Exact file boundaries for Tailwind theme helpers, preset exports, and utility plugins.
- Whether the Tailwind contract is expressed as a preset, a shared config fragment, a plugin, or a combination of those, as long as the contract remains typed and reusable.
- The exact class prefixes for named typography and layout utilities, as long as they remain readable and clearly documented.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project planning context
- `.planning/PROJECT.md` - project goals, constraints, Tailwind requirement, and accessibility expectations.
- `.planning/REQUIREMENTS.md` - Phase 2 requirement IDs `THM-01`, `THM-02`, and `THM-03`.
- `.planning/ROADMAP.md` - fixed Phase 2 boundary, goal, and success criteria.
- `.planning/STATE.md` - current focus and milestone status.

### Prior phase decisions
- `.planning/phases/01-source-audit-and-token-architecture/01-CONTEXT.md` - locked token architecture, naming, typography depth, and provisional metadata rules.
- `.planning/phases/01-source-audit-and-token-architecture/01-RESEARCH.md` - Phase 1 sequencing and token workspace structure.
- `.planning/phases/01-source-audit-and-token-architecture/01-VALIDATION.md` - existing validation strategy and command patterns.

### Token source of truth
- `my-design-system/src/tokens/primitives.ts` - source-derived primitive colors, spacing, grid, shadow, radius, border, and typography foundations.
- `my-design-system/src/tokens/semantic.ts` - semantic surface, text, border, interactive, feedback, elevation, and layout tokens.
- `my-design-system/src/tokens/component-aliases.ts` - shared alias/state contract for button, input, card, badge, and focus ring patterns.
- `my-design-system/src/tokens/typography.ts` - editorial text-style definitions and responsive typography behavior.
- `my-design-system/src/tokens/index.ts` - current public token exports.
- `my-design-system/src/tokens/source-audit.md` - source-fidelity notes and provisional caveats.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `my-design-system/package.json` already exposes `typecheck` and `tokens:check`, so Phase 2 can extend the same workspace instead of bootstrapping a new one.
- `my-design-system/src/tokens/` already contains typed token modules with source metadata, which should become the single source of truth for Tailwind mapping.

### Established Patterns
- Token exports use plain TypeScript objects plus `as const satisfies` typing, so Tailwind-facing helpers should follow the same explicit style instead of introducing an opaque generator.
- Phase 1 preserved brand-forward primitive names and clean semantic role groupings; Phase 2 should keep that separation visible in its API.

### Integration Points
- The Tailwind contract must be reusable by later React primitives and Storybook docs without redefining tokens.
- Any new Tailwind plugin or preset should export a stable public surface from `my-design-system` so later phases can import it directly.

</code_context>

<specifics>
## Specific Ideas

- Keep semantic utilities first-class and namespaced primitives clearly secondary.
- Create explicit utilities or helper classes for editorial typography, layout container/grid behavior, and shared focus/button/input/card alias states.
- Preserve provisional metadata notes so future docs and Storybook foundations can surface them without reverse-engineering token sources.

</specifics>

<deferred>
## Deferred Ideas

- Full Storybook documentation for Tailwind utilities belongs to Phase 5.
- Component-level enforcement and hard-coded-value guardrails beyond the token/Tailwind contract belong to Phase 3.
- Final accessibility verification for all utility combinations belongs to Phase 6, though the phase should avoid creating obviously inaccessible defaults.

</deferred>

---

*Phase: 02-tailwind-theme-foundation*
*Context gathered: 2026-03-16*
