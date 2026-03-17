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
    onTrailingIconClick: { action: "clickedTrailingIcon" },
    subtitle: { control: "text" },
    title: { control: "text" },
    trailingAction: { control: false },
    trailingIcon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSectionHeader: Story = {};

export const WithTrailingIcon: Story = {
  args: {
    title: "Today's Clinics",
    trailingIcon: <span aria-hidden="true">C</span>
  }
};

export const DifferentTextLengths: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <SectionHeader {...args} title="Today" />
      <SectionHeader {...args} title="Notifications" />
      <SectionHeader {...args} subtitle="Schedule, session states, and clinic actions" title="Clinic Schedule and Session Overview" />
    </div>
  )
};
