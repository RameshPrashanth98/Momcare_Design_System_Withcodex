import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { SectionHeader } from "./SectionHeader.js";

const meta = {
  title: "Core/SectionHeader",
  component: SectionHeader,
  args: {
    title: "Today"
  },
  argTypes: {
    "aria-label": { control: "text" },
    actionLabel: { control: "text" },
    onActionClick: { action: "clicked" },
    title: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSectionHeader: Story = {};

export const DifferentTextLengths: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <SectionHeader {...args} title="Today" />
      <SectionHeader {...args} title="Notifications" />
      <SectionHeader {...args} title="High-Risk Alerts and Appointment Reminders" />
    </div>
  )
};
