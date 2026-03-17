import type { Meta, StoryObj } from "@storybook/react";

import { BellIcon, CalendarIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";
import { Button } from "../Button/Button.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { StatCard } from "../StatCard/StatCard.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { ActionRow } from "./ActionRow.js";
import { HomeDashboardLayout } from "./HomeDashboardLayout.js";
import { StatsGrid } from "./StatsGrid.js";

const meta = {
  title: "Home Dashboard/HomeDashboardLayout",
  component: HomeDashboardLayout,
  args: {
    bottomNavigation: undefined,
    content: undefined,
    languageRow: undefined,
    statsGrid: undefined,
    topBar: undefined
  },
  tags: ["autodocs"]
} satisfies Meta<typeof HomeDashboardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composed: Story = {
  render: () => (
    <HomeDashboardLayout
      bottomNavigation={<NavigationBar items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Visits", value: "visits", icon: <VisitIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "More", value: "more", icon: <MoreIcon /> }]} value="home" />}
      content={<><SectionHeader title="Today's Clinics" /><ActionRow actions={[<Button fullWidth variant="filled">Register Mother</Button>, <Button fullWidth variant="filled">Clinic Visit</Button>, <Button fullWidth variant="filled">Add Vaccination</Button>]} /></>}
      languageRow={<LanguageSwitcher options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />}
      statsGrid={<StatsGrid><StatCard icon={<CalendarIcon />} label="Today's Clinics" value="06" /><StatCard icon={<VisitIcon />} label="Upcoming Appointments" value="09" /></StatsGrid>}
      topBar={<TopAppBar actions={[<IconButton aria-label="Notifications" icon={<BellIcon />} key="bell" variant="standard" />, <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />]} title="Mom Care" />}
    />
  )
};
