import type { Meta, StoryObj } from "@storybook/react";

import { MothersScreen } from "./MothersScreen.js";

const meta = {
  title: "Screens/Mothers",
  component: MothersScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof MothersScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
