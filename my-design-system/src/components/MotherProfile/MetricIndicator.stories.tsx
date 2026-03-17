import type { Meta, StoryObj } from "@storybook/react";

import { MetricIndicator } from "./MetricIndicator.js";

const meta = {
  title: "Mother Profile/MetricIndicator",
  component: MetricIndicator,
  args: {
    value: 0.68,
    variant: "stable"
  },
  argTypes: {
    value: { control: { max: 1, min: 0, step: 0.01, type: "range" } },
    variant: { control: "inline-radio", options: ["stable", "watch", "critical"] }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MetricIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Stable: Story = {};
export const Watch: Story = { args: { value: 0.52, variant: "watch" } };
export const Critical: Story = { args: { value: 0.36, variant: "critical" } };
