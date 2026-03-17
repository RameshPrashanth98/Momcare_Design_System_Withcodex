import type { Meta, StoryObj } from "@storybook/react";

import { MetricRow } from "./MetricRow.js";

const meta = {
  title: "Mother Profile/MetricRow",
  component: MetricRow,
  args: {
    label: "Blood pressure",
    value: "128 / 82 mmHg",
    indicatorValue: 0.52,
    indicatorVariant: "watch"
  },
  argTypes: {
    indicatorValue: { control: { max: 1, min: 0, step: 0.01, type: "range" } },
    indicatorVariant: { control: "inline-radio", options: ["stable", "watch", "critical"] }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MetricRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
