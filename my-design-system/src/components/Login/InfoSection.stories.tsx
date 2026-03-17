import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography/Typography.js";
import { InfoSection } from "./InfoSection.js";

const meta = {
  title: "Login/InfoSection",
  component: InfoSection,
  args: {
    children: <Typography variant="body">Use this system to securely access maternal clinic records and daily workflow tools.</Typography>
  },
  argTypes: {
    children: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
