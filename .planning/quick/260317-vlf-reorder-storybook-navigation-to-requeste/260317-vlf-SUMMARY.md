# Quick Task 260317-vlf: reorder storybook navigation to requested content order - Summary

**Date:** 2026-03-17
**Status:** Complete

## Outcome

- Updated `my-design-system/.storybook/preview.ts` with an explicit Storybook sidebar order covering the requested MomCare sections.
- Moved `Avatar` and `Divider` stories from `Primitives` into `Core` so they no longer create a separate top-level bucket.
- Moved the Onboarding Welcome component stories into `Onboarding` so onboarding-related content stays under one section.
- Added explicit `Screens` child ordering to keep screen stories out of alphabetical fallback.
- Verified the metadata changes with `npm run typecheck`.

## Verification

- Command: `npm run typecheck`
- Result: passed
