import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "../MotherProfile/icons.js";
import { MilestoneItem } from "./MilestoneItem.js";

const meta = {
  title: "Pregnancy Timeline/MilestoneItem",
  component: MilestoneItem,
  args: {
    icon: <CalendarIcon />,
    showDivider: true,
    supportingText: "Growth scan due on 04 Apr 2026",
    title: "Growth Scan"
  },
  argTypes: {
    icon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MilestoneItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
