# Quick Task 260317-mhm: Build reusable React + TypeScript + Storybook components for the Home / Dashboard screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Build a reusable Home / Dashboard screen component set in `my-design-system` using React, TypeScript, Storybook CSF3, existing design tokens from `src/tokens/`, and Material 3 inspired layout patterns.

## Tasks

### 1. Add Home Dashboard primitives and composition layer
- Files: `my-design-system/src/components/HomeDashboard/*`, `my-design-system/src/components/StatCard/*`, `my-design-system/src/components/MotherProfile/icons.tsx`
- Action: Implement token-driven dashboard components for metrics, alerts, appointments, actions, and layout, and extend shared icon/stat support where needed.
- Verify: Components are reusable, mobile-first, keyboard accessible, and rely on shared tokens.
- Done: `StatsGrid`, `AlertListItem`, `AppointmentListItem`, `ActionRow`, `HomeDashboardLayout`, updated `StatCard`, and supporting stories are in place.

### 2. Compose the full Home / Dashboard screen
- Files: `my-design-system/src/screens/Home/*`
- Action: Assemble the requested hi-fi dashboard using existing shared primitives plus the new Home Dashboard components.
- Verify: Screen includes the top app bar, language row, stats grid, grouped sections, quick actions, and bottom navigation.
- Done: `HomeScreen.tsx` and its Storybook story are implemented.

### 3. Document and validate in Storybook
- Files: Home Dashboard story files and Storybook output
- Action: Add CSF3 stories for the new components and a shared-primitives showcase, then run validation.
- Verify: `npm run typecheck`, `npm run tokens:check`, and `npm run build-storybook` all succeed.
- Done: Story coverage and validation are complete.
