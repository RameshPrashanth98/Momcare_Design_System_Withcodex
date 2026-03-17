import type { Meta, StoryObj } from "@storybook/react";

import { ShieldIcon } from "../MotherProfile/icons.js";
import { AlertListItem } from "./AlertListItem.js";

const meta = {
  title: "Home Dashboard/AlertListItem",
  component: AlertListItem,
  args: {
    alertIcon: <ShieldIcon />,
    condition: "Gestational diabetes",
    midwife: "Midwife N. Perera",
    name: "Sanduni Abeysinghe"
  },
  argTypes: {
    alertIcon: { control: false },
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AlertListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
