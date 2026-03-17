import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { InlineActionGroup } from "./InlineActionGroup.js";

const meta = {
  title: "Login/InlineActionGroup",
  component: InlineActionGroup,
  args: {
    actions: [<Button key="forgot" variant="text">Forgot Password</Button>, <Button key="contact" variant="text">Contact Administrator</Button>],
    align: "center",
    separator: <span>/</span>
  },
  argTypes: {
    actions: { control: false },
    separator: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InlineActionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
