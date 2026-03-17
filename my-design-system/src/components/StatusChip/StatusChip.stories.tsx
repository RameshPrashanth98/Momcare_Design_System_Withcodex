import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { StatusChip } from "./StatusChip.js";

const meta = {
  title: "Mothers/StatusChip",
  component: StatusChip,
  args: {
    label: "High Risk",
    status: "high-risk"
  },
  argTypes: {
    label: { control: "text" },
    status: {
      control: "inline-radio",
      options: ["high-risk", "normal", "active", "waiting", "inactive", "warning"]
    },
    tone: {
      control: "inline-radio",
      options: ["high-risk", "normal", "active", "waiting", "inactive", "warning"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatusChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space3.value }}>
      <StatusChip {...args} label="High Risk" status="high-risk" />
      <StatusChip {...args} label="Normal" status="normal" />
      <StatusChip {...args} label="Active" status="active" />
      <StatusChip {...args} label="Waiting" status="waiting" />
    </div>
  )
};
