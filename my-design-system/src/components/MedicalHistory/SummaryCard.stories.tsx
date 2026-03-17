import type { Meta, StoryObj } from "@storybook/react";

import { SummaryCard } from "./SummaryCard.js";
import { Typography } from "../Typography/Typography.js";

const meta = {
  title: "Medical History/SummaryCard",
  component: SummaryCard,
  args: {
    avatar: <Typography as="span" variant="label">SA</Typography>,
    midwife: "N. Perera",
    name: "Sanduni Abeysinghe",
    nic: "199624512345",
    riskStatus: "high-risk",
    timestamp: "17 Mar 2026, 8:30 AM",
    trimester: "Second trimester"
  },
  argTypes: {
    avatar: { control: false },
    riskStatus: { control: "inline-radio", options: ["high-risk", "normal"] }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HighRisk: Story = {};
export const Normal: Story = { args: { riskStatus: "normal" } };
