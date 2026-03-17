import type { Meta, StoryObj } from "@storybook/react";

import { MotherProfileScreen } from "./MotherProfileScreen.js";

const meta = {
  title: "Screens/Mother Profile",
  component: MotherProfileScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof MotherProfileScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
