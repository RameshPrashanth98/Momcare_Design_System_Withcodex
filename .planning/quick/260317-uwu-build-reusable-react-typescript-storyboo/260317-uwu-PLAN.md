# Quick Task 260317-uwu: Build reusable React + TypeScript + Storybook components for the Onboarding Welcome screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Onboarding Welcome screen family with a centered mobile-first hero layout, brand mark, onboarding title, illustration panel, welcome content, CTA, and progress indicator while staying token-driven and reusing shared primitives where practical.

## Tasks

### 1. Reuse and extend existing onboarding primitives where necessary
- Reuse the shared `Button`, `Typography`, and `PageIndicator` primitives.
- Extend `PageIndicator` to support the requested `total` and `current` prop aliases without breaking existing consumers.
- Keep all new layout and illustration surfaces driven by tokens.

### 2. Build the Onboarding Welcome component family
- Create `Icon`, `BrandMark`, `OnboardingHeader`, `IllustrationPanel`, `OnboardingContent`, and `OnboardingWelcomeLayout`.
- Keep the composition centered, keyboard accessible, mobile-first, and aligned to Material 3 onboarding patterns.

### 3. Compose and document the screen
- Add `src/screens/OnboardingWelcome/OnboardingWelcomeScreen.tsx` and the screen story.
- Add Storybook stories for each new onboarding component.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
