import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { StatusChip } from "./StatusChip.js";

const meta = {
  title: "Mothers/StatusChip",
  component: StatusChip,
  args: {
    label: "High Risk",
    tone: "high-risk"
  },
  argTypes: {
    label: { control: "text" },
    tone: {
      control: "inline-radio",
      options: ["high-risk", "normal"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatusChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: spacingPrimitives.space3.value }}>
      <StatusChip {...args} label="High Risk" tone="high-risk" />
      <StatusChip {...args} label="Normal" tone="normal" />
    </div>
  )
};
