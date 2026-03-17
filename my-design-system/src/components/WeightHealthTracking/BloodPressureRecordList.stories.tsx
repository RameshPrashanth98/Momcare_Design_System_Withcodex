import type { Meta, StoryObj } from "@storybook/react";

import { BloodPressureRecordList } from "./BloodPressureRecordList.js";

const meta = {
  title: "WeightHealthTracking/BloodPressureRecordList",
  component: BloodPressureRecordList,
  args: {
    items: [
      { date: "15 Mar 2026", status: "Normal", value: "118/76 mmHg" },
      { date: "22 Mar 2026", status: "High", value: "145/92 mmHg" }
    ]
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BloodPressureRecordList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
