import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar.js";

const meta = {
  title: "Core/Avatar",
  component: Avatar,
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

