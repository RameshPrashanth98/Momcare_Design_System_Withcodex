import { useState } from "react";

import { ExtendedFAB } from "../../components/ClinicSchedule/ExtendedFAB.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { ContextHeader } from "../../components/RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../../components/VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BellIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { BloodPressureRecordList, HemoglobinCard, WeightChartCard, WeightHealthTrackingLayout } from "../../components/WeightHealthTracking/index.js";
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

const weightData = [
  { date: "01 Mar", weight: 54.2 },
  { date: "08 Mar", weight: 54.8 },
  { date: "15 Mar", weight: 55.4 },
  { date: "22 Mar", weight: 56.1 }
];

const bloodPressureItems = [
  { date: "15 Mar 2026", status: "Normal" as const, value: "118/76 mmHg" },
  { date: "22 Mar 2026", status: "High" as const, value: "145/92 mmHg" }
];

export function WeightHealthTrackingScreen() {
  const [language, setLanguage] = useState("en");

  return (
    <WeightHealthTrackingLayout
      bloodPressureSection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Recent clinic measurements" title="Blood Pressure Tracking" />
          <BloodPressureRecordList items={bloodPressureItems} />
        </section>
      }
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Add health record" label="Add Health Record" onClick={() => undefined} />}
      hemoglobinSection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Latest lab summary" title="Hemoglobin Level" />
          <HemoglobinCard date="22 Mar 2026" status="Normal" title="Hemoglobin Level" value="11.8 g/dL" />
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
          title="Weight & Health Tracking"
        />
      }
      weightSection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Trend across recent clinic visits" title="Weight Tracking" />
          <WeightChartCard ariaLabel="Weight tracking chart" data={weightData} lastRecordedDate="22 Mar 2026" latestWeight="56.1 kg" title="Weight Tracking" xKey="date" yKey="weight" />
        </section>
      }
    />
  );
}

export const weightHealthTrackingStoryData = {
  bloodPressureItems,
  languageOptions,
  navigationItems,
  weightData
};
