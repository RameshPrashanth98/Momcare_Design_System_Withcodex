import type { Meta, StoryObj } from "@storybook/react";

import { ClinicSummaryCard } from "./ClinicSummaryCard.js";

const meta = {
  title: "Clinic Session/ClinicSummaryCard",
  component: ClinicSummaryCard,
  args: {
    assignedMidwife: "Nimali Perera",
    date: "17 Mar 2026",
    isActive: true,
    location: "Akuressa MOH Office",
    status: "active",
    time: "9:00 AM - 1:00 PM",
    title: "Akuressa Rural Clinic"
  },
  argTypes: {
    onToggleActive: { action: "toggleActive" },
    onViewClinic: { action: "viewClinic" },
    onViewMothers: { action: "viewMothers" },
    onViewProfile: { action: "viewProfile" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
