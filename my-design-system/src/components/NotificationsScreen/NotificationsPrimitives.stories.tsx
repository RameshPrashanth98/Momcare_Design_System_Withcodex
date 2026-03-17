import type { Meta, StoryObj } from "@storybook/react";

import { ArrowLeftIcon, BellIcon, CalendarIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { Button } from "../../components/Button/Button.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NotificationCard } from "../../components/NotificationCard/NotificationCard.js";
import { NotificationsLayout } from "../../components/NotificationsLayout/NotificationsLayout.js";
import { NotificationsList } from "../../components/NotificationsScreen/NotificationsList.js";
import { SegmentedButtonGroup } from "../../components/NotificationsScreen/SegmentedButtonGroup.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { Typography } from "../../components/Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const meta = {
  title: "Notifications/Shared Primitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopBarExample: Story = {
  render: () => (
    <TopAppBar
      actions={[
        <IconButton aria-label="Filter notifications" icon={<SearchIcon />} key="filter" variant="standard" />,
        <LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
        <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Notifications"
    />
  )
};

export const FilterAndButtons: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SegmentedButtonGroup aria-label="Filter notifications" options={[{ label: "All", value: "all" }, { label: "High-Risk Alerts", value: "high-risk" }, { label: "Appointment Reminders", value: "appointments" }]} value="all" />
      <div style={{ display: "flex", gap: spacingPrimitives.space3.value }}>
        <Button variant="filled">View</Button>
        <Button variant="tonal">Mark as Read</Button>
      </div>
    </div>
  )
};

export const CardsAndHeaders: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="Notification List" />
      <NotificationCard actionLabel="View" details="Mother requires immediate follow-up due to elevated fasting glucose recorded during morning clinic." leadingIcon={<BellIcon />} timestamp="17 Mar 2026, 9:15 AM" title="High Risk Alert" type="high-risk-alert" urgent />
    </div>
  )
};

export const LayoutAndType: Story = {
  render: () => (
    <div style={{ backgroundColor: semanticTokens.surface.base.value, display: "grid", gap: spacingPrimitives.space3.value, padding: spacingPrimitives.space4.value }}>
      <Typography as="h2" variant="headline">Notifications</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="body">Alerts, reminders, and system messages grouped with clear hierarchy.</Typography>
      <NotificationsLayout
        filterBar={<SegmentedButtonGroup aria-label="Filter notifications" options={[{ label: "All", value: "all" }, { label: "High-Risk Alerts", value: "high-risk" }, { label: "Appointment Reminders", value: "appointments" }]} value="all" />}
        list={<NotificationsList items={[{ actionLabel: "View", details: "Nimali Perera has an appointment at Matara MOH Clinic later this afternoon.", leadingIcon: <CalendarIcon />, timestamp: "17 Mar 2026, 10:00 AM", title: "Appointment Reminder", type: "appointment-reminder" }]} />}
        sectionHeader={<SectionHeader title="Notification List" />}
        stickyTopBar={false}
        topBar={<TopAppBar title="Notifications" />}
      />
    </div>
  )
};
