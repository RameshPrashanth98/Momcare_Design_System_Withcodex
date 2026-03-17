import type { Meta, StoryObj } from "@storybook/react";

import { LoginScreen } from "./LoginScreen.js";

const meta = {
  title: "Screens/Login",
  component: LoginScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof LoginScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
