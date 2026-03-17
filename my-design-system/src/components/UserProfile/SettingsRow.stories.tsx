import type { Meta, StoryObj } from "@storybook/react";

import { ChevronRightIcon } from "../MotherProfile/icons.js";
import { Switch } from "../Switch/Switch.js";
import { SettingsRow } from "./SettingsRow.js";

const meta = {
  title: "User Profile/SettingsRow",
  component: SettingsRow,
  args: {
    label: "Staff ID",
    trailingIcon: <ChevronRightIcon />,
    value: "PHM-2048"
  },
  argTypes: {
    leadingIcon: { control: false },
    onClick: { action: "clicked" },
    trailingContent: { control: false },
    trailingIcon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SettingsRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTrailingContent: Story = {
  args: {
    label: "Notifications",
    supportingText: "Enabled for clinic reminders",
    trailingContent: <Switch checked onChange={() => undefined} />,
    trailingIcon: undefined,
    value: undefined
  }
};
