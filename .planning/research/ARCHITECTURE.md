# Research: Architecture

## Suggested Structure

1. Token layer
2. Tailwind/theme integration layer
3. Base layout and typography primitives
4. Interactive primitives
5. Composite components
6. Storybook documentation and validation

## Component Boundaries

### Token Layer

- Stores raw extracted values and semantic aliases.
- Exposes values to Tailwind and any runtime helpers.

### Theme Layer

- Maps tokens into Tailwind-friendly primitives and utilities.
- Owns responsive container, spacing, and surface conventions.

### Primitive Layer

- Owns low-level reusable building blocks such as text, box, stack, inline, and surface patterns.
- Ensures token usage is automatic rather than optional.

### Component Layer

- Builds typed React components on top of primitives.
- Encodes variant contracts and interactive states.

### Documentation Layer

- Shows foundations, variants, usage examples, and accessibility notes in Storybook.
- Acts as the primary review surface for completeness.

## Data Flow

Source HTML -> extracted token definitions -> semantic token mapping -> Tailwind/theme config -> primitives -> components -> Storybook stories and validation.

## Build Order Implications

- Token extraction and naming must happen before component implementation.
- Tailwind integration must stabilize before broad component work, otherwise class APIs drift.
- Primitive components should land before composites to reduce duplicated styling logic.
- Storybook foundations should be added early so component work has a visible target and review surface.
