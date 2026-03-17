import type { Meta, StoryObj } from "@storybook/react";

import { WeightChartCard } from "./WeightChartCard.js";

const meta = {
  title: "WeightHealthTracking/WeightChartCard",
  component: WeightChartCard,
  args: {
    ariaLabel: "Weight tracking chart",
    data: [
      { date: "01 Mar", weight: 54.2 },
      { date: "08 Mar", weight: 54.8 },
      { date: "15 Mar", weight: 55.4 },
      { date: "22 Mar", weight: 56.1 }
    ],
    lastRecordedDate: "22 Mar 2026",
    latestWeight: "56.1 kg",
    title: "Weight Tracking",
    xKey: "date",
    yKey: "weight"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof WeightChartCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
