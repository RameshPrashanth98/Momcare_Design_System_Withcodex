---
quick_id: 260316-hbx
title: add onboarding Storybook components
completed: 2026-03-16
commit: bbdb36d
---

# Quick Task 260316-hbx Summary

Added reusable onboarding components and stories for the Mom Care frontend: `Button`, `PageIndicator`, and `OnboardingLayout`, all implemented with the existing token source and Storybook-ready onboarding compositions.

## Files Updated

- `my-design-system/src/components/Button/Button.tsx`
- `my-design-system/src/components/Button/Button.stories.tsx`
- `my-design-system/src/components/Button/index.ts`
- `my-design-system/src/components/PageIndicator/PageIndicator.tsx`
- `my-design-system/src/components/PageIndicator/PageIndicator.stories.tsx`
- `my-design-system/src/components/PageIndicator/index.ts`
- `my-design-system/src/components/OnboardingLayout/OnboardingLayout.tsx`
- `my-design-system/src/components/OnboardingLayout/OnboardingLayout.stories.tsx`
- `my-design-system/src/components/OnboardingLayout/index.ts`

## Verification

- `npm run typecheck` - passed
- `npm run build-storybook` - passed

## Notes

- `Button` supports `filled` and `text` variants, token-based sizing, icons, disabled/loading states, and visible focus handling.
- `PageIndicator` supports static and interactive dot navigation with accessible labels.
- `OnboardingLayout` provides mobile-first onboarding composition slots for logo, title, description, illustration, actions, and page indicators.
- Stories cover onboarding navigation examples and full-screen onboarding compositions based on the supplied wireframe direction.
