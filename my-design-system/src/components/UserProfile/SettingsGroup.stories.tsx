import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../Divider/Divider.js";
import { SettingsGroup } from "./SettingsGroup.js";
import { SettingsRow } from "./SettingsRow.js";

const meta = {
  title: "User Profile/SettingsGroup",
  component: SettingsGroup,
  args: {
    children: undefined,
    title: "Account Information"
  },
  argTypes: {
    children: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SettingsGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SettingsGroup title="Account Information">
      <SettingsRow label="Staff ID" trailingIcon=">" value="PHM-2048" />
      <Divider />
      <SettingsRow label="Phone" trailingIcon=">" value="071 234 5678" />
    </SettingsGroup>
  )
};
