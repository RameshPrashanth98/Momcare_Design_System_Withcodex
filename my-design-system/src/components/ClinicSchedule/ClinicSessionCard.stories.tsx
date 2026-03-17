import type { Meta, StoryObj } from "@storybook/react";

import { ClinicSessionCard } from "./ClinicSessionCard.js";

const meta = {
  title: "Clinic Schedule/ClinicSessionCard",
  component: ClinicSessionCard,
  args: {
    clinicType: "Antenatal Clinic",
    date: "17 Mar 2026",
    expectedMothers: "24 mothers",
    location: "Akuressa MOH Office",
    midwife: "Nimali Perera",
    status: "active",
    time: "9:00 AM - 1:00 PM",
    title: "Akuressa Rural Clinic"
  },
  argTypes: {
    onStartClinic: { action: "startClinic" },
    onViewMothers: { action: "viewMothers" },
    onViewSession: { action: "viewSession" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicSessionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Upcoming: Story = { args: { status: "upcoming" } };
export const Completed: Story = { args: { disabledActions: true, status: "completed" } };
