import type { Meta, StoryObj } from "@storybook/react";

import { BloodPressureRecordItem } from "./BloodPressureRecordItem.js";

const meta = {
  title: "WeightHealthTracking/BloodPressureRecordItem",
  component: BloodPressureRecordItem,
  args: {
    date: "22 Mar 2026",
    status: "Normal",
    value: "118/76 mmHg"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BloodPressureRecordItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const High: Story = {
  args: {
    status: "High",
    value: "145/92 mmHg"
  }
};
