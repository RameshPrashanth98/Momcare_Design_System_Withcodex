import type { Meta, StoryObj } from "@storybook/react";

import { VaccinationRecordCard } from "./VaccinationRecordCard.js";

const meta = {
  title: "Vaccination Records/VaccinationRecordCard",
  component: VaccinationRecordCard,
  args: {
    status: "Completed",
    subtitle: "Dose 1",
    supportingText: "Administered on 10 Mar 2026",
    title: "Tetanus Toxoid",
    tone: "completed"
  },
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof VaccinationRecordCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Completed: Story = {};

export const Due: Story = {
  args: {
    status: "Due",
    supportingText: "Required before the next clinic visit",
    tone: "warning"
  }
};

export const Upcoming: Story = {
  args: {
    status: "Upcoming",
    subtitle: "Scheduled",
    supportingText: "Scheduled for 24 Mar 2026",
    tone: "upcoming"
  }
};
