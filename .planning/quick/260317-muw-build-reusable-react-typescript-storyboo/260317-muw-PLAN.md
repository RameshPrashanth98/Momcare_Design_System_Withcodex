# Quick Task 260317-muw: Build reusable React + TypeScript + Storybook components for the Notifications screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Build a reusable Notifications screen component set in `my-design-system` using React, TypeScript, Storybook CSF3, existing design tokens from `src/tokens/`, and Material 3 inspired layout patterns.

## Tasks

### 1. Adapt notifications primitives to the requested API
- Files: `my-design-system/src/components/NotificationCard/*`, `my-design-system/src/components/NotificationsLayout/NotificationsLayout.stories.tsx`, `my-design-system/src/components/NotificationsScreen/*`
- Action: Align the notification card API with the requested prop shape and add filter/list abstractions for the screen.
- Verify: Components remain reusable, mobile-first, keyboard accessible, and rely on shared tokens.
- Done: `NotificationCard`, `SegmentedButtonGroup`, `NotificationsList`, and supporting stories are in place.

### 2. Compose the full Notifications screen
- Files: `my-design-system/src/screens/Notifications/*`
- Action: Assemble the requested hi-fi notifications screen using existing shared primitives plus the new notifications abstractions.
- Verify: Screen includes the top app bar, segmented filter row, notification section header, notification cards, and Storybook screen entry.
- Done: `NotificationsScreen.tsx` and its Storybook story are implemented.

### 3. Document and validate in Storybook
- Files: Notifications story files and Storybook output
- Action: Add CSF3 stories for the new components and a shared-primitives showcase, then run validation.
- Verify: `npm run typecheck`, `npm run tokens:check`, and `npm run build-storybook` all succeed.
- Done: Story coverage and validation are complete.
