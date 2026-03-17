import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { NotificationCard } from "./NotificationCard.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Notifications/NotificationCard",
  component: NotificationCard,
  args: {
    title: "High Risk Mother Alert",
    primaryText: "N. Fernando requires review today.",
    secondaryText: "Blood pressure check is overdue.",
    timestamp: "5 min ago",
    actionLabel: "View",
    type: "alert",
    read: false,
    leadingIcon: <StoryIcon symbol="!" />
  },
  argTypes: {
    "aria-label": { control: "text" },
    actionLabel: { control: "text" },
    leadingIcon: { control: false },
    onActionClick: { action: "clicked" },
    primaryText: { control: "text" },
    read: { control: "boolean" },
    secondaryText: { control: "text" },
    tertiaryText: { control: "text" },
    timestamp: { control: "text" },
    title: { control: "text" },
    type: {
      control: "inline-radio",
      options: ["alert", "appointment", "vaccine", "system"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NotificationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HighRiskAlertExample: Story = {
  args: {
    tertiaryText: "Immediate attention needed"
  }
};

export const AppointmentReminderExample: Story = {
  args: {
    actionLabel: "View",
    leadingIcon: <StoryIcon symbol="A" />,
    primaryText: "Clinic visit with Dr. Perera at 2:00 PM.",
    secondaryText: "Bring previous scan reports.",
    timestamp: "Today, 9:10 AM",
    title: "Appointment Reminder",
    type: "appointment"
  }
};

export const VaccineReminderExample: Story = {
  args: {
    actionLabel: "Mark as Read",
    leadingIcon: <StoryIcon symbol="V" />,
    primaryText: "Tetanus booster is due this week.",
    secondaryText: "Check nearest clinic stock before scheduling.",
    timestamp: "Yesterday",
    title: "Vaccine Reminder",
    type: "vaccine"
  }
};

export const SystemAlertExample: Story = {
  args: {
    actionLabel: "View",
    leadingIcon: <StoryIcon symbol="i" />,
    primaryText: "Your dashboard sync completed successfully.",
    read: true,
    secondaryText: "Two patient notes were updated.",
    timestamp: "Mar 16, 2026",
    title: "System Update",
    type: "system"
  }
};

export const NotificationCardGallery: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <NotificationCard {...args} tertiaryText="Immediate attention needed" timestamp="5 min ago" title="High Risk Mother Alert" type="alert" leadingIcon={<StoryIcon symbol="!" />} />
      <NotificationCard {...args} actionLabel="View" timestamp="Today, 9:10 AM" title="Appointment Reminder" type="appointment" leadingIcon={<StoryIcon symbol="A" />} />
      <NotificationCard {...args} actionLabel="Mark as Read" timestamp="Yesterday" title="Vaccine Reminder" type="vaccine" leadingIcon={<StoryIcon symbol="V" />} />
      <NotificationCard {...args} actionLabel="View" read timestamp="Mar 16, 2026" title="System Alert" type="system" leadingIcon={<StoryIcon symbol="i" />} />
    </div>
  )
};
