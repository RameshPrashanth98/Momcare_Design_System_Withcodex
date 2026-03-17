import type { Meta, StoryObj } from "@storybook/react";

import { AppointmentListItem } from "./AppointmentListItem.js";

const meta = {
  title: "Home Dashboard/AppointmentListItem",
  component: AppointmentListItem,
  args: {
    clinic: "Matara MOH Clinic",
    name: "Nimali Perera",
    time: "10:30 AM"
  },
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AppointmentListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
