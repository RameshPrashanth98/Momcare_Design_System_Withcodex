# Phase 1: Source Audit and Token Architecture - Context

**Gathered:** 2026-03-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Convert the source HTML foundations into a canonical token model with documented source fidelity and known caveats. This phase defines how the token system is structured and documented so later Tailwind, component, and Storybook work can build on a stable contract.

</domain>

<decisions>
## Implementation Decisions

### Token architecture
- Use a three-layer token model in Phase 1: primitive tokens, semantic tokens, and component alias tokens.
- Primitive tokens should remain source-faithful and brand-forward in naming.
- Semantic tokens should describe reusable usage roles without flattening away the brand character established by the source.
- Component alias tokens should be created in Phase 1, but only for common cross-component patterns rather than speculative future components.
- Component alias tokens should include interactive and visual state aliases such as hover, focus, active, and similar state-specific mappings where relevant.

### Typography system depth
- Phase 1 should capture full typography foundations, not just font families and sizes.
- The token system should include font families, weights, sizes, line heights, tracking, and named text styles.
- Named text styles should use editorial-first names rather than abstract numeric tiers.
- Typography styles should map directly to documented source specimens and patterns instead of being heavily rationalized into a reduced abstraction.
- Responsive typography behavior should be defined in Phase 1 for key display and heading styles, while body and utility styles can remain mostly stable.

### Provisional brand handling
- Only items explicitly flagged in the source HTML should be treated as provisional in Phase 1.
- Provisional status should be explicitly tagged in both the token system and the documentation.
- Provisional items remain usable by downstream phases, but they must stay clearly marked as review-sensitive.
- Brand-guideline follow-up notes should live close to implementation in token metadata and Storybook notes, not only in planning artifacts.

### Claude's Discretion
- Exact file/module boundaries for the token source of truth.
- Exact schema shape for token metadata fields, as long as provisional status remains explicit and machine-readable.
- The precise editorial names for text styles, as long as they stay brand-forward and source-aligned.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project planning context
- `.planning/PROJECT.md` - project goals, constraints, stack, and token-discipline requirements.
- `.planning/REQUIREMENTS.md` - Phase 1 requirement coverage for foundations and source-fidelity expectations.
- `.planning/ROADMAP.md` - fixed Phase 1 boundary, goal, and success criteria.

### Source design foundations
- `..\..\1.Product Development with AI\15.Claude code design system\morph-maternity-design-system.html` - source-of-truth foundations document containing colors, typography, spacing, shadows, radii, borders, layout, and flagged provisional items.

### Research guidance
- `.planning/research/ARCHITECTURE.md` - recommended token-first build order and architecture boundaries.
- `.planning/research/FEATURES.md` - design-system table stakes and anti-features relevant to token architecture.
- `.planning/research/PITFALLS.md` - known risks for hard-coded values, delayed accessibility, and provisional brand handling.
- `.planning/research/SUMMARY.md` - synthesized Phase 1 implications and sequencing guidance.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No existing implementation assets were found in `my-design-system`, so Phase 1 should define the initial token contract from scratch.

### Established Patterns
- There are no existing app or component patterns yet; the planning artifacts and the source HTML currently define the project conventions.
- Git and `.planning/` are already initialized, so Phase 1 can assume a greenfield implementation with explicit planning discipline.

### Integration Points
- Phase 1 outputs must become the input contract for Tailwind theme setup in Phase 2.
- The token architecture should be shaped so React components and Storybook docs can consume it without duplicating visual values later.

</code_context>

<specifics>
## Specific Ideas

- Keep token naming human-readable and brand-forward rather than flattening it into generic scale names.
- Preserve direct traceability from the source HTML to the token system even when semantic and component alias layers are added.
- Treat the component alias layer as an early contract for common patterns like buttons, inputs, cards, and focus rings rather than a speculative alias dump.

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

*Phase: 01-source-audit-and-token-architecture*
*Context gathered: 2026-03-16*
