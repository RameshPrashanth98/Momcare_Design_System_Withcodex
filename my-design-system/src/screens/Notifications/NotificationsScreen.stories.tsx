import type { Meta, StoryObj } from "@storybook/react";

import { NotificationsScreen } from "./NotificationsScreen.js";

const meta = {
  title: "Screens/Notifications",
  component: NotificationsScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof NotificationsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
