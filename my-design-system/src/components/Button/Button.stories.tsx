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
  title: "Core/Button",
  component: Button,
  args: {
    children: "Login",
    disabled: false,
    fullWidth: false,
    loading: false,
    size: "comfortable",
    type: "button",
    variant: "filled"
  },
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    leadingIcon: { control: false },
    loading: { control: "boolean" },
    onClick: { action: "clicked" },
    size: {
      control: "inline-radio",
      options: ["compact", "comfortable", "spacious"]
    },
    trailingIcon: { control: false },
    type: {
      control: "inline-radio",
      options: ["button", "submit", "reset"]
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "text", "tonal"]
    },
    "aria-label": { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledButton: Story = {};

export const TextButton: Story = {
  args: {
    children: "Forgot Password",
    variant: "text"
  }
};

export const TonalButton: Story = {
  args: {
    children: "Mark as Read",
    variant: "tonal"
  }
};

export const DisabledStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
      <Button {...args} disabled variant="filled">Login</Button>
      <Button {...args} disabled variant="tonal">Mark as Read</Button>
      <Button {...args} disabled variant="text">Forgot Password</Button>
      <Button {...args} loading variant="filled">Login</Button>
    </div>
  )
};

export const WithLeadingIcon: Story = {
  args: {
    children: "Login",
    leadingIcon: <StoryIcon symbol=">" />,
    variant: "filled"
  }
};

export const WithTrailingIcon: Story = {
  args: {
    children: "Contact Administrator",
    trailingIcon: <StoryIcon symbol="+" />,
    variant: "text"
  }
};

export const FullWidthLoginButton: Story = {
  args: {
    children: "Login",
    fullWidth: true,
    type: "submit",
    variant: "filled"
  },
  render: (args) => (
    <div style={{ width: `calc(${spacingPrimitives.space32.value} + ${spacingPrimitives.space24.value})` }}>
      <Button {...args} />
    </div>
  )
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
        <Button {...args} size="spacious" variant="text">Comfortable</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
        <Button {...args} size="compact" variant="tonal">Compact</Button>
        <Button {...args} size="comfortable" variant="tonal">Comfortable</Button>
        <Button {...args} size="spacious" variant="tonal">Spacious</Button>
      </div>
    </div>
  )
};
