import type { Meta, StoryObj } from "@storybook/react";

import { RecordCard } from "./RecordCard.js";

const meta = {
  title: "Search Records/RecordCard",
  component: RecordCard,
  args: {
    clinicNumber: "CL-2048",
    midwife: "Nimali Perera",
    name: "Nethmi Perera",
    nic: "199624512345",
    status: "high-risk",
    trimester: "Second"
  },
  argTypes: {
    onLabReports: { action: "labReports" },
    onTimeline: { action: "timeline" },
    onVaccinationRecords: { action: "vaccinations" },
    onWeightAndHealthTracking: { action: "weightHealth" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof RecordCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NormalRisk: Story = {
  args: {
    status: "normal"
  }
};
