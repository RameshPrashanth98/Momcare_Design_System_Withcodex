import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../IconButton/IconButton.js";
import { NotificationCard } from "../NotificationCard/NotificationCard.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { SegmentedButton } from "../SegmentedButton/SegmentedButton.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { NotificationsLayout } from "./NotificationsLayout.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const topBar = (
  <TopAppBar
    actions={[
      <IconButton aria-label="Filter notifications" icon={<StoryIcon symbol="=" />} variant="tonal" />,
      <SegmentedButton aria-label="Choose language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
      <IconButton aria-label="Open profile" icon={<StoryIcon symbol="P" />} variant="filled" />
    ]}
    navigationIcon={<IconButton aria-label="Go back" icon={<StoryIcon symbol="<" />} variant="standard" />}
    title="Notifications"
  />
);

const filterBar = (
  <SegmentedButton
    aria-label="Filter notifications"
    options={[
      { label: "All", value: "all" },
      { label: "Alerts", value: "alerts" },
      { label: "Appointments", value: "appointments" }
    ]}
    value="all"
  />
);

const list = (
  <>
    <NotificationCard
      actionLabel="View"
      details="N. Fernando requires review today. Blood pressure check is overdue. Immediate attention needed."
      leadingIcon={<StoryIcon symbol="!" />}
      timestamp="5 min ago"
      title="High Risk Mother Alert"
      type="high-risk-alert"
      urgent
    />
    <NotificationCard
      actionLabel="Mark as Read"
      details="Clinic visit with Dr. Perera at 2:00 PM. Bring previous scan reports."
      leadingIcon={<StoryIcon symbol="A" />}
      timestamp="Today, 9:10 AM"
      title="Appointment Reminder"
      type="appointment-reminder"
    />
  </>
);

const meta = {
  title: "Notifications/NotificationsLayout",
  component: NotificationsLayout,
  args: {
    filterBar,
    list,
    sectionHeader: <SectionHeader title="Today" />,
    stickyTopBar: true,
    topBar
  },
  argTypes: {
    filterBar: { control: false },
    list: { control: false },
    sectionHeader: { control: false },
    stickyTopBar: { control: "boolean" },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NotificationsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotificationsScreen: Story = {};

export const NonStickyTopBar: Story = {
  args: {
    stickyTopBar: false
  }
};
