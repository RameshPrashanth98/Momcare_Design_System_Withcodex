import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { BellIcon } from "../MotherProfile/icons.js";
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
    leadingIcon: { control: false },
    status: {
      control: "inline-radio",
      options: ["high-risk", "normal", "active", "waiting", "inactive", "warning", "upcoming", "completed"]
    },
    tone: {
      control: "inline-radio",
      options: ["high-risk", "normal", "active", "waiting", "inactive", "warning", "upcoming", "completed"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatusChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space3.value }}>
      <StatusChip {...args} label="High Risk" leadingIcon={<BellIcon />} tone="high-risk" />
      <StatusChip {...args} label="Normal" tone="normal" />
    </div>
  )
};
