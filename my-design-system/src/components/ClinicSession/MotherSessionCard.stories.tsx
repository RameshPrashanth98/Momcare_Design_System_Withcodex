import type { Meta, StoryObj } from "@storybook/react";

import { MotherSessionCard } from "./MotherSessionCard.js";

const meta = {
  title: "Clinic Session/MotherSessionCard",
  component: MotherSessionCard,
  args: {
    assignedStaff: "Nimali Perera",
    attendanceMeta: "18 expected",
    date: "17 Mar 2026",
    hasToggle: true,
    identifier: "PHM-2048 · Gravida 2",
    name: "Nethmi Perera",
    showAlert: true,
    status: "active",
    thirdActionLabel: "Medical History",
    timeRange: "9:15 AM - 9:45 AM",
    toggled: true
  },
  argTypes: {
    onRecordVisit: { action: "recordVisit" },
    onThirdAction: { action: "thirdAction" },
    onToggle: { action: "toggle" },
    onViewProfile: { action: "viewProfile" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MotherSessionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WaitingState: Story = {
  args: {
    showAlert: false,
    status: "waiting",
    thirdActionLabel: "Check In",
    toggled: false
  }
};
