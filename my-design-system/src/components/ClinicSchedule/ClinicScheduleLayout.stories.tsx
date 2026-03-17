import type { Meta, StoryObj } from "@storybook/react";

import { ClinicScheduleLayout } from "./ClinicScheduleLayout.js";
import { ClinicSessionCard } from "./ClinicSessionCard.js";
import { DateSelector } from "./DateSelector.js";
import { ExtendedFAB } from "./ExtendedFAB.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ArrowLeftIcon, CalendarIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { VisitIcon } from "../MotherProfile/icons.js";

const meta = {
  title: "Clinic Schedule/ClinicScheduleLayout",
  component: ClinicScheduleLayout,
  args: {
    bottomNavigation: undefined,
    dateSelector: undefined,
    fab: undefined,
    scheduleCards: undefined,
    sectionHeader: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    dateSelector: { control: false },
    fab: { control: false },
    scheduleCards: { control: false },
    sectionHeader: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicScheduleLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ClinicScheduleLayout
      bottomNavigation={<NavigationBar activeItem="clinics" items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Clinics", value: "clinics", icon: <ClinicIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "Profile", value: "profile", icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      dateSelector={<DateSelector items={[{ value: "mon-17", dayLabel: "Mon", dateLabel: "17" }, { value: "tue-18", dayLabel: "Tue", dateLabel: "18" }]} selectedValue="mon-17" />}
      fab={<ExtendedFAB aria-label="Add clinic session" icon={<VisitIcon />} label="Add Clinic Session" />}
      scheduleCards={<ClinicSessionCard clinicType="Antenatal Clinic" date="17 Mar 2026" expectedMothers="24 mothers" location="Akuressa MOH Office" midwife="Nimali Perera" status="active" time="9:00 AM - 1:00 PM" title="Akuressa Rural Clinic" />}
      sectionHeader={<SectionHeader onTrailingIconClick={() => undefined} title="Today's Clinics" trailingIcon={<CalendarIcon />} />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="lang" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Utility" icon={<SearchIcon />} key="utility" />, <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Back" icon={<ArrowLeftIcon />} />} title="Clinic Schedule" />}
    />
  )
};
