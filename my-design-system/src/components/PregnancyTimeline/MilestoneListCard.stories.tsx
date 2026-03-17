import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon, ClinicIcon } from "../MotherProfile/icons.js";
import { MilestoneListCard } from "./MilestoneListCard.js";

const meta = {
  title: "Pregnancy Timeline/MilestoneListCard",
  component: MilestoneListCard,
  args: {
    ariaLabel: "Upcoming milestones",
    items: [
      { icon: <CalendarIcon />, title: "Growth Scan", supportingText: "Due on 04 Apr 2026" },
      { icon: <ClinicIcon />, title: "Clinic Review", supportingText: "Scheduled for 11 Apr 2026" }
    ]
  },
  argTypes: {
    items: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MilestoneListCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
