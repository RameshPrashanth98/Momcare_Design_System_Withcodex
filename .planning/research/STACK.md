# Research: Stack

## Scope

Project research for a React and TypeScript design system generated from the Morph Maternity HTML foundations document.

## Recommended Stack

| Area | Recommendation | Why |
|------|----------------|-----|
| Component framework | React with TypeScript | Matches the requested stack and supports typed, reusable component APIs |
| Styling | Tailwind CSS backed by a token layer | Gives a consistent delivery path for tokens while keeping component styling disciplined |
| Documentation | Storybook | Matches the requested documentation surface and supports stories, controls, and accessibility review |
| Token source | Code-native token definitions generated from the source HTML | Prevents drift between extracted foundations and implementation |
| Accessibility guardrails | Storybook accessibility review plus component-level semantic patterns | Accessibility needs to be enforced during authoring, not deferred |
| Class management | Lightweight variant utilities where needed | Helps encode consistent variant contracts without scattered conditional class strings |
| Testing focus | Story and component checks oriented around accessibility and token usage | Best aligned with the project's requirements and regression risks |

## Guidance

- Keep version selection tied to the current stable releases available at implementation time instead of locking unverified version numbers in planning docs.
- Prefer a single token source that can feed Tailwind theme configuration, component code, and Storybook examples.
- Preserve the source HTML's editorial tone through fonts, spacing rhythm, radius softness, and warm elevation rather than treating tokens as only a color exercise.

## Avoid

- Ad hoc component CSS that bypasses the token system.
- A design-token structure that mirrors raw CSS variable names only, with no semantic layer for component use.
- Storybook stories that show only the default state while omitting state and accessibility coverage.

## Confidence

- High: React + TypeScript + Tailwind CSS + Storybook are directly specified by the user.
- Medium: Exact supporting libraries for variants and testing should be finalized during Phase 1 after environment setup.
