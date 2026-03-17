import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon, HeartPulseIcon, RecordsIcon, VisitIcon } from "../MotherProfile/icons.js";
import { StatCard } from "../StatCard/StatCard.js";
import { StatsGrid } from "./StatsGrid.js";

const meta = {
  title: "Home Dashboard/StatsGrid",
  component: StatsGrid,
  args: {
    children: undefined
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatsGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StatsGrid>
      <StatCard icon={<CalendarIcon />} label="Today's Clinics" value="06" variant="default" />
      <StatCard icon={<HeartPulseIcon />} label="High Risk Mothers" value="14" variant="accent" />
      <StatCard icon={<VisitIcon />} label="Upcoming Appointments" value="09" variant="warning" />
      <StatCard icon={<RecordsIcon />} label="Recent Updates" value="18" variant="default" />
    </StatsGrid>
  )
};
