import type { Meta, StoryObj } from "@storybook/react";

import { MotherSummaryCard } from "./MotherSummaryCard.js";

const meta = {
  title: "Vaccination Records/MotherSummaryCard",
  component: MotherSummaryCard,
  args: {
    midwife: "Nimali Perera",
    name: "Nethmi Perera",
    nic: "199624512345",
    riskLabel: "High Risk",
    status: "high-risk",
    trimester: "Second"
  },
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MotherSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
