import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "../MotherProfile/icons.js";
import { MetadataRow } from "./MetadataRow.js";

const meta = {
  title: "Clinic Session/MetadataRow",
  component: MetadataRow,
  args: {
    label: "17 Mar 2026",
    leadingIcon: <CalendarIcon />
  },
  argTypes: {
    label: { control: "text" },
    leadingIcon: { control: false },
    trailingContent: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MetadataRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
