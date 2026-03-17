import type { Meta, StoryObj } from "@storybook/react";

import { UserProfileScreen } from "./UserProfileScreen.js";

const meta = {
  title: "Screens/User Profile",
  component: UserProfileScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof UserProfileScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
