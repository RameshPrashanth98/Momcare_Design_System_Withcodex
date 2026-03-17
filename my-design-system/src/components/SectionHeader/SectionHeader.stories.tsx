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
    subtitle: { control: "text" },
    title: { control: "text" },
    trailingAction: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSectionHeader: Story = {};

export const WithSubtitle: Story = {
  args: {
    subtitle: "17 Mar 2026 · 9:00 AM - 1:00 PM",
    title: "Clinic Session Overview"
  }
};

export const DifferentTextLengths: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <SectionHeader {...args} title="Today" />
      <SectionHeader {...args} title="Notifications" />
      <SectionHeader {...args} subtitle="Two active alerts and one waiting roster change" title="High-Risk Alerts and Appointment Reminders" />
    </div>
  )
};
