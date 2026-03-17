import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { ActionRow } from "./ActionRow.js";

const meta = {
  title: "Home Dashboard/ActionRow",
  component: ActionRow,
  args: {
    actions: []
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ActionRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ActionRow
      actions={[
        <Button fullWidth variant="filled">Register Mother</Button>,
        <Button fullWidth variant="filled">Clinic Visit</Button>,
        <Button fullWidth variant="filled">Add Vaccination</Button>
      ]}
    />
  )
};
