import { useState, type CSSProperties } from "react";

import { BottomActionBar } from "../../components/ClinicSession/BottomActionBar.js";
import { ClinicSessionLayout } from "../../components/ClinicSession/ClinicSessionLayout.js";
import { ClinicSummaryCard } from "../../components/ClinicSession/ClinicSummaryCard.js";
import { MotherSessionCard } from "../../components/ClinicSession/MotherSessionCard.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { BellIcon, CalendarIcon, ClockIcon, SearchIcon, UserCircleIcon, ArrowLeftIcon, HomeIcon, MothersIcon, VisitIcon, RecordsIcon, MoreIcon } from "../../components/MotherProfile/icons.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { Typography } from "../../components/Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon />, activeIcon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

const mothers = [
  {
    name: "Nethmi Perera",
    identifier: "PHM-2048 · Gravida 2",
    date: "17 Mar 2026",
    timeRange: "9:15 AM - 9:45 AM",
    assignedStaff: "Nimali Perera",
    attendanceMeta: "18 expected",
    status: "active" as const,
    showAlert: true,
    hasToggle: true,
    toggled: true,
    thirdActionLabel: "Medical History"
  },
  {
    name: "Sashini Fernando",
    identifier: "PHM-2094 · Gravida 1",
    date: "17 Mar 2026",
    timeRange: "10:00 AM - 10:30 AM",
    assignedStaff: "Hasini Jayawardena",
    attendanceMeta: "Waiting queue 3",
    status: "waiting" as const,
    showAlert: false,
    hasToggle: true,
    toggled: false,
    thirdActionLabel: "Check In"
  }
];

const overviewStyle: CSSProperties = {
  display: "grid",
  gap: spacingPrimitives.space2.value
};

const listStyle: CSSProperties = {
  display: "grid",
  gap: spacingPrimitives.space4.value
};

export function ClinicSessionScreen() {
  const [language, setLanguage] = useState("en");
  const [clinicActive, setClinicActive] = useState(true);
  const [motherStates, setMotherStates] = useState<Record<string, boolean>>({
    "Nethmi Perera": true,
    "Sashini Fernando": false
  });

  const topBar = (
    <TopAppBar
      actions={[
        <IconButton aria-label="Search clinic session" icon={<SearchIcon />} key="search" variant="standard" />,
        <LanguageSwitcher aria-label="Select language" key="language" onChange={setLanguage} options={languageOptions} value={language} />,
        <IconButton aria-label="Open account" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Clinic Session"
    />
  );

  const overviewHeader = (
    <div style={overviewStyle}>
      <SectionHeader
        subtitle={
          <span style={{ alignItems: "center", color: semanticTokens.text.secondary.value, display: "inline-flex", gap: spacingPrimitives.space2.value }}>
            <CalendarIcon /> 17 Mar 2026
            <ClockIcon /> 9:00 AM - 1:00 PM
          </span>
        }
        title="Clinic Session Overview"
      />
      <Typography as="h1" variant="headline">Akuressa Rural Antenatal Clinic</Typography>
    </div>
  );

  const summaryCard = (
    <ClinicSummaryCard
      assignedMidwife="Nimali Perera"
      date="17 Mar 2026"
      isActive={clinicActive}
      location="Akuressa MOH Office"
      onToggleActive={setClinicActive}
      onViewClinic={() => undefined}
      onViewMothers={() => undefined}
      onViewProfile={() => undefined}
      status="active"
      time="9:00 AM - 1:00 PM"
      title="Akuressa Rural Clinic"
    />
  );

  const registeredMothers = (
    <div style={listStyle}>
      <SectionHeader
        subtitle="Session roster and current attendance state"
        title="Registered Mothers"
        trailingAction={<Typography color={semanticTokens.text.secondary.value} variant="label">2 mothers</Typography>}
      />
      {mothers.map((mother) => (
        <MotherSessionCard
          assignedStaff={mother.assignedStaff}
          attendanceMeta={mother.attendanceMeta}
          date={mother.date}
          hasToggle={mother.hasToggle}
          identifier={mother.identifier}
          key={mother.name}
          name={mother.name}
          onRecordVisit={() => undefined}
          onThirdAction={() => undefined}
          onToggle={(checked) => setMotherStates((currentValue) => ({ ...currentValue, [mother.name]: checked }))}
          onViewProfile={() => undefined}
          showAlert={mother.showAlert}
          status={mother.status}
          thirdActionLabel={mother.thirdActionLabel}
          timeRange={mother.timeRange}
          toggled={motherStates[mother.name]}
        />
      ))}
    </div>
  );

  return (
    <ClinicSessionLayout
      bottomActionBar={<BottomActionBar onAddWalkInMother={() => undefined} onEndClinic={() => undefined} onStartClinic={() => undefined} />}
      bottomNavigation={<NavigationBar activeItem="visits" items={navigationItems} onChange={() => undefined} />}
      overviewHeader={overviewHeader}
      registeredMothers={registeredMothers}
      summaryCard={summaryCard}
      topBar={topBar}
    />
  );
}

export const clinicSessionStoryData = {
  languageOptions,
  mothers,
  navigationItems
};
