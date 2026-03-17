import type { Meta, StoryObj } from "@storybook/react";

import { BloodDropIcon } from "../MotherProfile/icons.js";
import { TimelineItem } from "./TimelineItem.js";

const meta = {
  title: "Pregnancy Timeline/TimelineItem",
  component: TimelineItem,
  args: {
    actionLabel: "View Report",
    date: "22 Mar 2026",
    description: "Complete blood count reviewed at the clinic visit.",
    icon: <BloodDropIcon />,
    showConnector: true,
    title: "Blood Test Uploaded"
  },
  argTypes: {
    icon: { control: false },
    onActionClick: { action: "actionClick" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TimelineItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FinalItem: Story = {
  args: {
    showConnector: false,
    actionLabel: undefined
  }
};
