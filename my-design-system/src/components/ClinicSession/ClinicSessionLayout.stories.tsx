import type { Meta, StoryObj } from "@storybook/react";

import { BottomActionBar } from "./BottomActionBar.js";
import { ClinicSessionLayout } from "./ClinicSessionLayout.js";
import { ClinicSummaryCard } from "./ClinicSummaryCard.js";
import { MotherSessionCard } from "./MotherSessionCard.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ArrowLeftIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

const meta = {
  title: "Clinic Session/ClinicSessionLayout",
  component: ClinicSessionLayout,
  args: {
    bottomActionBar: undefined,
    bottomNavigation: undefined,
    overviewHeader: undefined,
    registeredMothers: undefined,
    summaryCard: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomActionBar: { control: false },
    bottomNavigation: { control: false },
    overviewHeader: { control: false },
    registeredMothers: { control: false },
    summaryCard: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicSessionLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ClinicSessionLayout
      bottomActionBar={<BottomActionBar />}
      bottomNavigation={<NavigationBar activeItem="visits" items={navigationItems} onChange={() => undefined} />}
      overviewHeader={<SectionHeader subtitle="17 Mar 2026 · 9:00 AM - 1:00 PM" title="Clinic Session Overview" />}
      registeredMothers={<MotherSessionCard assignedStaff="Nimali Perera" attendanceMeta="18 expected" date="17 Mar 2026" hasToggle identifier="PHM-2048 · Gravida 2" name="Nethmi Perera" status="active" thirdActionLabel="Medical History" timeRange="9:15 AM - 9:45 AM" toggled />}
      summaryCard={<ClinicSummaryCard assignedMidwife="Nimali Perera" date="17 Mar 2026" isActive location="Akuressa MOH Office" status="active" time="9:00 AM - 1:00 PM" title="Akuressa Rural Clinic" />}
      topBar={<TopAppBar actions={[<IconButton aria-label="Search" icon={<SearchIcon />} key="search" />, <LanguageSwitcher key="lang" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Back" icon={<ArrowLeftIcon />} />} title="Clinic Session" />}
    />
  )
};
