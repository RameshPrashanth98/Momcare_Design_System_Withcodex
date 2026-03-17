import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedButtonGroup } from "./SegmentedButtonGroup.js";

const meta = {
  title: "Notifications/SegmentedButtonGroup",
  component: SegmentedButtonGroup,
  args: {
    "aria-label": "Filter notifications",
    options: [
      { label: "All", value: "all" },
      { label: "High-Risk Alerts", value: "high-risk" },
      { label: "Appointment Reminders", value: "appointments" }
    ],
    value: "all"
  },
  argTypes: {
    onChange: { action: "changed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SegmentedButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
