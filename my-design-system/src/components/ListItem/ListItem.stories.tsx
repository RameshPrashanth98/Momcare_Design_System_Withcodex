import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { ListItem } from "./ListItem.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Dashboard/ListItem",
  component: ListItem,
  args: {
    disabled: false,
    primaryText: "St. Mary's Clinic",
    secondaryText: "Morning session",
    tertiaryText: undefined,
    trailingText: "09:30 AM"
  },
  argTypes: {
    disabled: { control: "boolean" },
    leadingVisual: { control: false },
    onClick: { action: "clicked" },
    primaryText: { control: "text" },
    secondaryText: { control: "text" },
    tertiaryText: { control: "text" },
    trailingText: { control: "text" },
    trailingVisual: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClinicRow: Story = {
  args: {
    leadingVisual: <StoryIcon symbol="C" />,
    primaryText: "St. Mary's Clinic",
    secondaryText: "Primary care visit",
    trailingText: "09:30 AM",
    trailingVisual: <StoryIcon symbol=">" />
  }
};

export const HighRiskMotherRow: Story = {
  args: {
    leadingVisual: <StoryIcon symbol="!" />,
    primaryText: "N. Fernando",
    secondaryText: "Blood pressure review due today",
    tertiaryText: "High Risk",
    trailingText: "Ward 2"
  }
};

export const UpcomingAppointmentRow: Story = {
  args: {
    leadingVisual: <StoryIcon symbol="A" />,
    primaryText: "Dr. I. Perera",
    secondaryText: "Routine scan",
    trailingText: "2:00 PM"
  }
};

export const InteractiveList: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <ListItem {...args} leadingVisual={<StoryIcon symbol="C" />} onClick={() => undefined} primaryText="Clinic Follow-up" secondaryText="4 mothers due today" trailingText="View" trailingVisual={<StoryIcon symbol=">" />} />
      <ListItem {...args} leadingVisual={<StoryIcon symbol="!" />} onClick={() => undefined} primaryText="High Risk Queue" secondaryText="2 urgent reviews" tertiaryText="Attention needed" trailingText="Now" />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    leadingVisual: <StoryIcon symbol="C" />
  }
};
