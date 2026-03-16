---
quick_id: 260316-fc2
title: order Storybook styles sidebar entries
completed: 2026-03-16
commit: 49d709c
---

# Quick Task 260316-fc2 Summary

Updated Storybook sorting so the `Styles` section appears in this exact order: `Color`, `Typography`, `Spacing`, `Elevation`, `Grid`, `Iconography`, `Border`, `Radius`.

## Files Updated

- `my-design-system/.storybook/preview.ts`

## Verification

- `npm run build-storybook` - passed

## Notes

- The nested `storySort.order` now controls both top-level groups and the explicit order of stories inside `Design System/Styles`.
- Story titles were not renamed.
