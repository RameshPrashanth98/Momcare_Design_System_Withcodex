# Quick Task 260317-qjz: Build reusable React + TypeScript + Storybook components for the Register Clinic Visit screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Register Clinic Visit composition layer on top of the existing token-driven form primitives, with a mother context header, summary card, and mobile layout for capturing clinic-visit details.

## Tasks

### 1. Reuse the existing form primitives
- Build on the current `TextField`, `DateField`, `TimeField`, `SelectField`, `FormSection`, `Button`, `NavigationBar`, and `TopAppBar` implementations.
- Keep the work focused on composition rather than duplicating shared field controls.

### 2. Add visit-specific reusable components
- Create `ContextHeader`, `InfoCard`, and `RegisterClinicVisitLayout`.
- Use only token-based styling and existing shared primitives.

### 3. Compose and document the screen
- Add `src/screens/RegisterClinicVisit/RegisterClinicVisitScreen.tsx` and its Storybook screen story.
- Add stories for the visit-specific reusable components.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
