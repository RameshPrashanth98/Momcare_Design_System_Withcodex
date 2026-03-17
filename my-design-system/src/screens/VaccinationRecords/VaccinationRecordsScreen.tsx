import { useState } from "react";

import { ExtendedFAB } from "../../components/ClinicSchedule/ExtendedFAB.js";
import { Divider } from "../../components/Divider/Divider.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { ContextHeader } from "../../components/RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { MotherSummaryCard, VaccinationRecordCard, VaccinationRecordsLayout } from "../../components/VaccinationRecords/index.js";
import { ArrowLeftIcon, BellIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Clinics", value: "clinics", icon: <ClinicIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon />, activeIcon: <RecordsIcon /> },
  { label: "Profile", value: "profile", icon: <UserCircleIcon /> }
];

const historyRecords = [
  {
    status: "Completed",
    subtitle: "Dose 1",
    supportingText: "Administered on 10 Mar 2026",
    title: "Tetanus Toxoid",
    tone: "completed" as const
  },
  {
    status: "Due",
    subtitle: "Dose 2",
    supportingText: "Expected at the next clinic session",
    title: "Iron Supplement",
    tone: "warning" as const
  }
];

const upcomingRecords = [
  {
    status: "Upcoming",
    subtitle: "Scheduled",
    supportingText: "24 Mar 2026",
    title: "Calcium Booster",
    tone: "upcoming" as const
  }
];

export function VaccinationRecordsScreen() {
  const [language, setLanguage] = useState("en");

  return (
    <VaccinationRecordsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Add vaccination record" label="Add Vaccination Record" onClick={() => undefined} />}
      historySection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Completed and due doses for the active clinic cycle" title="Vaccination History" />
          {historyRecords.map((record, index) => (
            <div key={record.title} style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
              <VaccinationRecordCard
                onClick={() => undefined}
                status={record.status}
                subtitle={record.subtitle}
                supportingText={record.supportingText}
                title={record.title}
                tone={record.tone}
              />
              {index < historyRecords.length - 1 ? <Divider /> : null}
            </div>
          ))}
        </section>
      }
      summaryCard={<MotherSummaryCard midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" onClick={() => undefined} riskLabel="High Risk" status="high-risk" trimester="Second" />}
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<BellIcon />} key="utility" variant="standard" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Vaccination Records"
        />
      }
      upcomingSection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Scheduled follow-up doses" title="Upcoming Vaccinations" />
          {upcomingRecords.map((record) => (
            <VaccinationRecordCard
              key={record.title}
              onClick={() => undefined}
              status={record.status}
              subtitle={record.subtitle}
              supportingText={record.supportingText}
              title={record.title}
              tone={record.tone}
            />
          ))}
        </section>
      }
    />
  );
}

export const vaccinationRecordsStoryData = {
  historyRecords,
  languageOptions,
  navigationItems,
  upcomingRecords
};
