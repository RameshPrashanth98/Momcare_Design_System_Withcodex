import type { Meta, StoryObj } from "@storybook/react";

import { HeartPulseIcon } from "../MotherProfile/icons.js";
import { Icon } from "./Icon.js";

const meta = {
  title: "Login/Icon",
  component: Icon,
  args: {
    children: <HeartPulseIcon />
  },
  argTypes: {
    children: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
