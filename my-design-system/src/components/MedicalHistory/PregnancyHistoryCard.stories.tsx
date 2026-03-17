import type { Meta, StoryObj } from "@storybook/react";

import { PregnancyHistoryCard } from "./PregnancyHistoryCard.js";

const meta = {
  title: "Medical History/PregnancyHistoryCard",
  component: PregnancyHistoryCard,
  args: {
    year: "2024",
    entries: [
      { label: "Outcome", value: "Live birth" },
      { label: "Delivery", value: "C-section" },
      { label: "Birth weight", value: "3.1 kg" },
      { label: "Facility", value: "District General Hospital" }
    ],
    notesLabel: "Notes reviewed during antenatal intake"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PregnancyHistoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
