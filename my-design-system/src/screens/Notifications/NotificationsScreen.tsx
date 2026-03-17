import { ArrowLeftIcon, BellIcon, CalendarIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NotificationsLayout } from "../../components/NotificationsLayout/NotificationsLayout.js";
import { NotificationsList } from "../../components/NotificationsScreen/NotificationsList.js";
import { SegmentedButtonGroup } from "../../components/NotificationsScreen/SegmentedButtonGroup.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";

const notificationItems = [
  {
    actionLabel: "View",
    details: "Mother requires immediate follow-up due to elevated fasting glucose recorded during morning clinic.",
    leadingIcon: <BellIcon />,
    read: false,
    timestamp: "17 Mar 2026, 9:15 AM",
    title: "High Risk Alert",
    type: "high-risk-alert" as const,
    urgent: true
  },
  {
    actionLabel: "Mark as Read",
    details: "Nimali Perera has an appointment at Matara MOH Clinic later this afternoon.",
    leadingIcon: <CalendarIcon />,
    read: false,
    timestamp: "17 Mar 2026, 10:00 AM",
    title: "Appointment Reminder",
    type: "appointment-reminder" as const,
    urgent: false
  },
  {
    actionLabel: "View",
    details: "Second tetanus dose is due this week for Hasini Madushika.",
    leadingIcon: <BellIcon />,
    read: true,
    timestamp: "16 Mar 2026, 3:45 PM",
    title: "Vaccine Reminder",
    type: "vaccine-reminder" as const,
    urgent: false
  },
  {
    actionLabel: "Mark as Read",
    details: "Sync completed successfully for the morning clinic roster.",
    leadingIcon: <SearchIcon />,
    read: true,
    timestamp: "16 Mar 2026, 8:05 AM",
    title: "System Alert",
    type: "system-alert" as const,
    urgent: false
  }
];

export function NotificationsScreen() {
  const topBar = (
    <TopAppBar
      actions={[
        <IconButton aria-label="Filter notifications" icon={<SearchIcon />} key="filter" variant="standard" />,
        <LanguageSwitcher aria-label="Select language" key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
        <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Notifications"
    />
  );

  const filterBar = (
    <SegmentedButtonGroup
      aria-label="Filter notifications"
      onChange={() => undefined}
      options={[
        { label: "All", value: "all" },
        { label: "High-Risk Alerts", value: "high-risk" },
        { label: "Appointment Reminders", value: "appointments" }
      ]}
      value="all"
    />
  );

  return (
    <NotificationsLayout
      filterBar={filterBar}
      list={<NotificationsList items={notificationItems} onItemAction={() => undefined} />}
      sectionHeader={<SectionHeader title="Notification List" />}
      topBar={topBar}
    />
  );
}
