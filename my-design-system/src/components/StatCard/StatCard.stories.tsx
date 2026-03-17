import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { StatCard } from "./StatCard.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Dashboard/StatCard",
  component: StatCard,
  args: {
    label: "Today Clinics",
    selected: false,
    value: "12"
  },
  argTypes: {
    icon: { control: false },
    label: { control: "text" },
    onClick: { action: "clicked" },
    selected: { control: "boolean" },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMetricCard: Story = {
  args: {
    icon: <StoryIcon symbol="+" />
  }
};

export const DifferentLabelsAndValues: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <StatCard {...args} label="High Risk Mothers" value="04" />
      <StatCard {...args} label="Upcoming Appointments" value="18" />
      <StatCard {...args} label="Available Midwives" value="09" />
      <StatCard {...args} label="Pending Reviews" value="07" />
    </div>
  )
};

export const InteractiveState: Story = {
  args: {
    icon: <StoryIcon symbol=">" />,
    onClick: () => undefined,
    selected: true
  }
};

export const GridExampleWithFourCards: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <StatCard {...args} icon={<StoryIcon symbol="C" />} label="Clinics" value="12" />
      <StatCard {...args} icon={<StoryIcon symbol="R" />} label="High Risk" value="04" />
      <StatCard {...args} icon={<StoryIcon symbol="A" />} label="Appointments" value="18" />
      <StatCard {...args} icon={<StoryIcon symbol="M" />} label="Messages" value="07" />
    </div>
  )
};
