import type { Meta, StoryObj } from "@storybook/react";

import { UserCircleIcon } from "../MotherProfile/icons.js";
import { IconField } from "./IconField.js";

const meta = {
  title: "Login/IconField",
  component: IconField,
  args: {
    label: "Staff ID",
    leadingIcon: <UserCircleIcon />,
    placeholder: "Enter your staff ID",
    value: ""
  },
  argTypes: {
    leadingIcon: { control: false },
    onChange: { action: "changed" },
    trailingIcon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof IconField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
