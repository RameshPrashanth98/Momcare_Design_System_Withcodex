import type { Meta, StoryObj } from "@storybook/react";

import { SectionHeader } from "./SectionHeader.js";

const meta = {
  title: "Dashboard/SectionHeader",
  component: SectionHeader,
  args: {
    title: "Today's Clinics"
  },
  argTypes: {
    "aria-label": { control: "text" },
    actionLabel: { control: "text" },
    onActionClick: { action: "clicked" },
    title: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleOnly: Story = {};

export const TitleWithAction: Story = {
  args: {
    actionLabel: "View all"
  }
};
