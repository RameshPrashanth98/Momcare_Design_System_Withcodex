import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { CalendarIcon, HeartPulseIcon, RecordsIcon, VisitIcon } from "../MotherProfile/icons.js";
import { StatCard } from "./StatCard.js";

const meta = {
  title: "Dashboard/StatCard",
  component: StatCard,
  args: {
    label: "Today's Clinics",
    selected: false,
    value: "12",
    variant: "default"
  },
  argTypes: {
    icon: { control: false },
    label: { control: "text" },
    onClick: { action: "clicked" },
    selected: { control: "boolean" },
    value: { control: "text" },
    variant: { control: "inline-radio", options: ["default", "accent", "warning"] }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMetricCard: Story = {
  args: {
    icon: <CalendarIcon />
  }
};

export const DifferentLabelsAndValues: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <StatCard {...args} icon={<HeartPulseIcon />} label="High Risk Mothers" value="04" variant="accent" />
      <StatCard {...args} icon={<VisitIcon />} label="Upcoming Appointments" value="18" variant="warning" />
      <StatCard {...args} icon={<CalendarIcon />} label="Today's Clinics" value="09" variant="default" />
      <StatCard {...args} icon={<RecordsIcon />} label="Recent Updates" value="07" variant="default" />
    </div>
  )
};

export const InteractiveState: Story = {
  args: {
    icon: <CalendarIcon />,
    onClick: () => undefined,
    selected: true
  }
};
