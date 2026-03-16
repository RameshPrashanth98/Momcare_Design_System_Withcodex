---
quick_id: 260316-f4z
title: order Storybook sidebar with Design System before Navigation
completed: 2026-03-16
commit: 09fef16
---

# Quick Task 260316-f4z Summary

Added explicit Storybook story sorting so the left navigation shows `Design System` first, with `Foundations` before `Styles`, and `Navigation` after those sections.

## Files Updated

- `my-design-system/.storybook/preview.ts`

## Verification

- `npm run build-storybook` - passed

## Notes

- The new `storySort.order` configuration controls the sidebar grouping without changing any story titles.
- Existing story titles under `Design System/Foundations/*`, `Design System/Styles/*`, and `Navigation/*` remain unchanged.
