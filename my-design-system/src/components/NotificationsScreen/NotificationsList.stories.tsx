import type { Meta, StoryObj } from "@storybook/react";

import { BellIcon, CalendarIcon, HeartPulseIcon, ShieldIcon } from "../MotherProfile/icons.js";
import { NotificationsList } from "./NotificationsList.js";

const meta = {
  title: "Notifications/NotificationsList",
  component: NotificationsList,
  args: {
    items: [
      {
        actionLabel: "View",
        details: "Mother requires immediate follow-up due to elevated fasting glucose recorded during morning clinic.",
        leadingIcon: <HeartPulseIcon />,
        read: false,
        timestamp: "17 Mar 2026, 9:15 AM",
        title: "High Risk Alert",
        type: "high-risk-alert",
        urgent: true
      },
      {
        actionLabel: "Mark as Read",
        details: "Nimali Perera has an appointment at Matara MOH Clinic later this afternoon.",
        leadingIcon: <CalendarIcon />,
        read: false,
        timestamp: "17 Mar 2026, 10:00 AM",
        title: "Appointment Reminder",
        type: "appointment-reminder",
        urgent: false
      },
      {
        actionLabel: "View",
        details: "Second tetanus dose is due this week for Hasini Madushika.",
        leadingIcon: <ShieldIcon />,
        read: true,
        timestamp: "16 Mar 2026, 3:45 PM",
        title: "Vaccine Reminder",
        type: "vaccine-reminder",
        urgent: false
      },
      {
        actionLabel: "Mark as Read",
        details: "Sync completed successfully for the morning clinic roster.",
        leadingIcon: <BellIcon />,
        read: true,
        timestamp: "16 Mar 2026, 8:05 AM",
        title: "System Alert",
        type: "system-alert",
        urgent: false
      }
    ]
  },
  argTypes: {
    onItemAction: { action: "itemAction" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NotificationsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    emptyState: "No notifications for this filter.",
    items: []
  }
};
