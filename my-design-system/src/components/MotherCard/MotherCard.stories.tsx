import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { MotherCard } from "./MotherCard.js";

const meta = {
  title: "Mothers/MotherCard",
  component: MotherCard,
  args: {
    assignedMidwife: "R. Perera",
    name: "Ayesha Nadeesha",
    nic: "982341234V",
    riskStatus: "high-risk",
    showAlertIcon: true,
    trimester: "Second"
  },
  argTypes: {
    assignedMidwife: { control: "text" },
    avatar: { control: false },
    name: { control: "text" },
    nic: { control: "text" },
    onRecordVisit: { action: "record visit" },
    onViewProfile: { action: "view profile" },
    onViewRecords: { action: "view records" },
    riskStatus: { control: "inline-radio", options: ["high-risk", "normal"] },
    showAlertIcon: { control: "boolean" },
    trimester: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MotherCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NormalRisk: Story = { args: { riskStatus: "normal", showAlertIcon: false } };
export const ListExample: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <MotherCard {...args} />
      <MotherCard {...args} name="Nimali Perera" nic="951231234V" riskStatus="normal" trimester="Third" />
    </div>
  )
};
