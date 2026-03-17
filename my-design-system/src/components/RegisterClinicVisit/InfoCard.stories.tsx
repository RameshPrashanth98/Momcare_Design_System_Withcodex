import type { Meta, StoryObj } from "@storybook/react";

import { SelectField } from "../SelectField/SelectField.js";
import { InfoCard } from "./InfoCard.js";

const meta = {
  title: "Register Clinic Visit/InfoCard",
  component: InfoCard,
  args: {
    alert: true,
    assignedMidwife: "Nimali Perera",
    date: "17 Mar 2026",
    identifier: "199624512345",
    name: "Nethmi Perera",
    riskLabel: "High Risk",
    status: "active"
  },
  argTypes: {
    children: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <InfoCard {...args}>
      <SelectField label="PHM Area" onChange={() => undefined} options={[{ label: "Akuressa North", value: "akuressa-north" }]} value="akuressa-north" />
    </InfoCard>
  )
};
