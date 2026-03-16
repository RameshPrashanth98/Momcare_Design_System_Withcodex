import type { Meta, StoryObj } from "@storybook/react";

import { fontFamilyPrimitives, fontSizePrimitives, lineHeightPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { Button } from "./Button.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        alignItems: "center",
        display: "inline-flex",
        fontFamily: fontFamilyPrimitives.body.value,
        fontSize: fontSizePrimitives.textBase.value,
        justifyContent: "center",
        lineHeight: String(lineHeightPrimitives.normal.value)
      }}
    >
      {symbol}
    </span>
  );
}

const meta = {
  title: "Onboarding/Button",
  component: Button,
  args: {
    children: "Get Started",
    disabled: false,
    loading: false,
    size: "comfortable",
    variant: "filled"
  },
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    leadingIcon: { control: false },
    loading: { control: "boolean" },
    onClick: { action: "clicked" },
    size: {
      control: "inline-radio",
      options: ["compact", "comfortable", "spacious"]
    },
    trailingIcon: { control: false },
    variant: {
      control: "inline-radio",
      options: ["filled", "text"]
    },
    "aria-label": { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Text: Story = {
  args: {
    children: "Back",
    variant: "text"
  }
};

export const DisabledStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
      <Button {...args} disabled variant="filled">Get Started</Button>
      <Button {...args} disabled variant="text">Back</Button>
      <Button {...args} loading variant="filled">Get Started</Button>
    </div>
  )
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <StoryIcon symbol="+" />,
    variant: "filled"
  }
};

export const WithTrailingIcon: Story = {
  args: {
    children: "Next",
    trailingIcon: <StoryIcon symbol="?" />,
    variant: "text"
  }
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
        <Button {...args} size="compact">Compact</Button>
        <Button {...args} size="comfortable">Comfortable</Button>
        <Button {...args} size="spacious">Spacious</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
        <Button {...args} size="compact" variant="text">Compact</Button>
        <Button {...args} size="comfortable" variant="text">Comfortable</Button>
        <Button {...args} size="spacious" variant="text">Spacious</Button>
      </div>
    </div>
  )
};

export const OnboardingNavigationExamples: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
        <Button {...args} variant="filled">Get Started</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
        <Button {...args} variant="text">Back</Button>
        <Button {...args} trailingIcon={<StoryIcon symbol="?" />} variant="text">Next</Button>
      </div>
    </div>
  )
};
