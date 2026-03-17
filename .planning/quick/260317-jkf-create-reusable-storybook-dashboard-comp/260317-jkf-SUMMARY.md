# Quick Task 260317-jkf: Create reusable Storybook dashboard components for the Mom Care home screen - Summary

**Completed:** 2026-03-17
**Feature Commit:** `afbd6bf`
**Status:** Complete

## Delivered

- Added reusable `IconButton` with `standard`, `filled`, and `tonal` variants plus selected, disabled, hover, pressed, and focus-visible states.
- Added reusable `LanguageSwitcher` with single-select segmented-button behavior, controllable/uncontrollable value support, and arrow-key navigation.
- Added reusable `StatCard`, `SectionHeader`, and `ListItem` primitives for dashboard metrics, grouped sections, and dashboard row patterns.
- Added Storybook stories for all new dashboard components, including notification/profile button examples, language selections, metric grids, title/action headers, and clinic/high-risk/appointment rows.
- Added named barrel exports for each new component directory.

## Verification

- `npm run typecheck`
- `npm run tokens:check`

Both commands passed in `my-design-system/`.

## Notes

- The original prompt was truncated mid-`ListItem`, so implementation covered the visible dashboard primitive set and completed the likely missing `ListItem` story/export surface in the same style as the rest of the system.
- The new components follow the existing tokenized inline-style pattern already used by `Button`, `TextField`, and `Bottomnavbar`.
