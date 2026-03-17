import type { Meta, StoryObj } from "@storybook/react";

import { SearchRecordsScreen } from "./SearchRecordsScreen.js";

const meta = {
  title: "Screens/Search Records",
  component: SearchRecordsScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof SearchRecordsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
