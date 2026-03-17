import type { Meta, StoryObj } from "@storybook/react";

import { ActionButtonGrid } from "./ActionButtonGrid.js";
import { Button } from "../Button/Button.js";

const meta = {
  title: "Search Records/ActionButtonGrid",
  component: ActionButtonGrid,
  args: {
    actions: undefined
  },
  argTypes: {
    actions: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ActionButtonGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ActionButtonGrid
      actions={
        <>
          <Button fullWidth size="compact" variant="outlined">Vaccination Records</Button>
          <Button fullWidth size="compact" variant="outlined">Weight & Health Tracking</Button>
          <Button fullWidth size="compact" variant="tonal">Lab Reports</Button>
          <Button fullWidth size="compact" variant="tonal">Timeline</Button>
        </>
      }
    />
  )
};
