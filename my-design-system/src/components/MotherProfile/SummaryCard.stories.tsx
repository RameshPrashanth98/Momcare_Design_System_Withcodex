import type { Meta, StoryObj } from "@storybook/react";

import { SummaryCard } from "./SummaryCard.js";

const meta = {
  title: "Mother Profile/SummaryCard",
  component: SummaryCard,
  args: {
    assignedMidwife: "N. Perera",
    name: "Sanduni Abeysinghe",
    nic: "199624512345",
    riskStatus: "high-risk",
    trimester: "Second trimester"
  },
  argTypes: {
    avatar: { control: false },
    onRecordVisit: { action: "recordVisit" },
    onViewProfile: { action: "viewProfile" },
    onViewRecords: { action: "viewRecords" },
    riskStatus: { control: "inline-radio", options: ["high-risk", "normal"] }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HighRisk: Story = {};
export const Normal: Story = { args: { riskStatus: "normal" } };
