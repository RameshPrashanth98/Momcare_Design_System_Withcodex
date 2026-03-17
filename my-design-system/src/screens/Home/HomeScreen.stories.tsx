import type { Meta, StoryObj } from "@storybook/react";

import { HomeScreen } from "./HomeScreen.js";

const meta = {
  title: "Screens/Home",
  component: HomeScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof HomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
