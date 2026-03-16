---
quick_id: 260316-ejs
title: add Storybook design system foundations and styles docs from Morph Maternity HTML
completed: 2026-03-16
commit: 1adada6
---

# Quick Task 260316-ejs Summary

Added a full Storybook design-system foundations section based on the supplied Morph Maternity HTML reference, covering foundations overview, design tokens, and dedicated style documentation pages.

## Files Updated

- `my-design-system/src/storybook/foundations-docs.tsx`
- `my-design-system/src/storybook/Welcome.stories.tsx`
- `my-design-system/src/storybook/DesignTokens.stories.tsx`
- `my-design-system/src/storybook/Color.stories.tsx`
- `my-design-system/src/storybook/Typography.stories.tsx`
- `my-design-system/src/storybook/Spacing.stories.tsx`
- `my-design-system/src/storybook/Elevation.stories.tsx`
- `my-design-system/src/storybook/Grid.stories.tsx`
- `my-design-system/src/storybook/Iconography.stories.tsx`
- `my-design-system/src/storybook/Border.stories.tsx`
- `my-design-system/src/storybook/Radius.stories.tsx`

## Verification

- `npm run typecheck` - passed
- `npm run build-storybook` - passed

## Notes

- Storybook now exposes `Design System/Foundations/Overview` and `Design System/Foundations/Design Tokens`.
- Storybook now exposes `Design System/Styles/Color`, `Typography`, `Spacing`, `Elevation`, `Grid`, `Iconography`, `Border`, and `Radius`.
- The documentation reuses the existing token source where values already existed and documents iconography as guidance because the source HTML defines style direction and size rules but not a locked production icon library.
