import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { IconButton } from "./IconButton.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Dashboard/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Notification",
    disabled: false,
    selected: false,
    size: "comfortable",
    variant: "standard",
    icon: <StoryIcon symbol="!" />
  },
  argTypes: {
    "aria-label": { control: "text" },
    disabled: { control: "boolean" },
    icon: { control: false },
    onClick: { action: "clicked" },
    selected: { control: "boolean" },
    size: {
      control: "inline-radio",
      options: ["compact", "comfortable", "spacious"]
    },
    variant: {
      control: "inline-radio",
      options: ["standard", "filled", "tonal"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotificationButton: Story = {
  args: {
    "aria-label": "Open notifications",
    icon: <StoryIcon symbol="!" />,
    variant: "tonal"
  }
};

export const ProfileButton: Story = {
  args: {
    "aria-label": "Open profile menu",
    icon: <StoryIcon symbol="P" />,
    selected: true,
    variant: "filled"
  }
};

export const DisabledState: Story = {
  args: {
    "aria-label": "Notifications unavailable",
    disabled: true,
    icon: <StoryIcon symbol="!" />
  }
};

export const AllSupportedVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space4.value }}>
      <IconButton {...args} aria-label="Standard notification" icon={<StoryIcon symbol="!" />} variant="standard" />
      <IconButton {...args} aria-label="Filled notification" icon={<StoryIcon symbol="!" />} variant="filled" />
      <IconButton {...args} aria-label="Tonal notification" icon={<StoryIcon symbol="!" />} variant="tonal" />
    </div>
  )
};
