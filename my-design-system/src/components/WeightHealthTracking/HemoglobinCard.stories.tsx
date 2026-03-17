import type { Meta, StoryObj } from "@storybook/react";

import { HemoglobinCard } from "./HemoglobinCard.js";

const meta = {
  title: "WeightHealthTracking/HemoglobinCard",
  component: HemoglobinCard,
  args: {
    date: "22 Mar 2026",
    status: "Normal",
    title: "Hemoglobin Level",
    value: "11.8 g/dL"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof HemoglobinCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
