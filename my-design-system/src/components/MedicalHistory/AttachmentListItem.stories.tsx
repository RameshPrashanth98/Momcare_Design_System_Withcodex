import type { Meta, StoryObj } from "@storybook/react";

import { AttachmentListItem } from "./AttachmentListItem.js";
import { ChevronRightIcon } from "../MotherProfile/icons.js";

const meta = {
  title: "Medical History/AttachmentListItem",
  component: AttachmentListItem,
  args: {
    date: "12 Mar 2026",
    title: "Lab report - glucose monitoring",
    trailingIcon: <ChevronRightIcon />
  },
  argTypes: {
    onClick: { action: "clicked" },
    trailingIcon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AttachmentListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    onClick: () => undefined
  }
};
