# Research: Features

## Table Stakes

### Token Foundations

- A complete token inventory for colors, typography, spacing, radii, borders, shadows, and layout.
- Clear naming that separates raw foundations from semantic usage.
- Documentation showing token values and intended usage.

### Component System

- Typed React components built from shared primitives.
- Variant coverage for primary states, size options, and semantic states where relevant.
- Consistent visual behavior across buttons, inputs, cards, badges, navigation, and layout surfaces.

### Documentation

- Storybook pages for token foundations.
- Storybook stories for each component variant and state.
- Usage guidance that explains when to use each variant and how accessibility is handled.

### Accessibility

- WCAG 2.1 AA contrast discipline.
- Keyboard-operable controls.
- Visible focus states and semantic markup.
- Accessible names, descriptions, and state communication for interactive UI.

## Differentiators

- Strong fidelity to the Morph Maternity editorial and maternal brand tone.
- Rose-tinted elevation, rounded geometry, and typography pairings preserved as reusable system rules.
- Explicit traceability back to the source HTML and its flagged verification items.

## Anti-Features

- Hard-coded per-component colors or spacing values.
- Visual variants without accompanying state documentation.
- Token sprawl that duplicates near-identical roles without semantic clarity.

## Complexity Notes

- Accessibility is coupled to token decisions, not just component markup.
- Story coverage expands quickly once variant matrices are documented, so component scope should stay intentional.
- Some brand guidance areas remain provisional because the source HTML flags them for official-brand-guide confirmation.
