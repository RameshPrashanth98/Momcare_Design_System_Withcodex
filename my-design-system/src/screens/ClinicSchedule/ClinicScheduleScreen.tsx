import { useState } from "react";

import { ClinicScheduleLayout } from "../../components/ClinicSchedule/ClinicScheduleLayout.js";
import { ClinicSessionCard } from "../../components/ClinicSchedule/ClinicSessionCard.js";
import { DateSelector } from "../../components/ClinicSchedule/DateSelector.js";
import { ExtendedFAB } from "../../components/ClinicSchedule/ExtendedFAB.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { ArrowLeftIcon, CalendarIcon, ClinicIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { VisitIcon } from "../../components/MotherProfile/icons.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const dateItems = [
  { value: "mon-17", dayLabel: "Mon", dateLabel: "17" },
  { value: "tue-18", dayLabel: "Tue", dateLabel: "18" },
  { value: "wed-19", dayLabel: "Wed", dateLabel: "19" },
  { value: "thu-20", dayLabel: "Thu", dateLabel: "20" },
  { value: "fri-21", dayLabel: "Fri", dateLabel: "21" }
];

const clinicCards = [
  {
    title: "Akuressa Rural Clinic",
    location: "Akuressa MOH Office",
    date: "17 Mar 2026",
    time: "9:00 AM - 1:00 PM",
    midwife: "Nimali Perera",
    expectedMothers: "24 mothers",
    clinicType: "Antenatal Clinic",
    status: "active" as const,
    disabledActions: false
  },
  {
    title: "Kamburupitiya Session",
    location: "Community Health Center",
    date: "18 Mar 2026",
    time: "10:00 AM - 1:30 PM",
    midwife: "Hasini Jayawardena",
    expectedMothers: "18 mothers",
    clinicType: "Nutrition Clinic",
    status: "upcoming" as const,
    disabledActions: false
  },
  {
    title: "Weligama Follow-up Clinic",
    location: "Weligama Public Hall",
    date: "16 Mar 2026",
    time: "8:30 AM - 11:30 AM",
    midwife: "Rashmi Lakshika",
    expectedMothers: "20 mothers",
    clinicType: "Postnatal Clinic",
    status: "completed" as const,
    disabledActions: true
  }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Clinics", value: "clinics", icon: <ClinicIcon />, activeIcon: <ClinicIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "Profile", value: "profile", icon: <UserCircleIcon /> }
];

export function ClinicScheduleScreen() {
  const [language, setLanguage] = useState("en");
  const [selectedDate, setSelectedDate] = useState("mon-17");

  return (
    <ClinicScheduleLayout
      bottomNavigation={<NavigationBar activeItem="clinics" items={navigationItems} onChange={() => undefined} />}
      dateSelector={<DateSelector items={dateItems} onChange={setSelectedDate} onOpenCalendar={() => undefined} selectedValue={selectedDate} />}
      fab={<ExtendedFAB aria-label="Add clinic session" icon={<VisitIcon />} label="Add Clinic Session" onClick={() => undefined} />}
      scheduleCards={clinicCards.map((card) => (
        <ClinicSessionCard
          clinicType={card.clinicType}
          date={card.date}
          disabledActions={card.disabledActions}
          expectedMothers={card.expectedMothers}
          key={card.title}
          location={card.location}
          midwife={card.midwife}
          onStartClinic={() => undefined}
          onViewMothers={() => undefined}
          onViewSession={() => undefined}
          status={card.status}
          time={card.time}
          title={card.title}
        />
      ))}
      sectionHeader={<SectionHeader onTrailingIconClick={() => undefined} title="Today's Clinics" trailingIcon={<CalendarIcon />} />}
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="lang" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Clinic Schedule"
        />
      }
    />
  );
}

export const clinicScheduleStoryData = {
  clinicCards,
  dateItems,
  languageOptions,
  navigationItems
};
