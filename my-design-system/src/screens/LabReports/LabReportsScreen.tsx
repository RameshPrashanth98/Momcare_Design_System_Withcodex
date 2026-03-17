import { useMemo, useState } from "react";

import { ExtendedFAB } from "../../components/ClinicSchedule/ExtendedFAB.js";
import { Divider } from "../../components/Divider/Divider.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { FilterChipGroup, LabReportCard, LabReportsLayout } from "../../components/LabReports/index.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { ContextHeader } from "../../components/RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../../components/VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BellIcon, BloodDropIcon, CalendarIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
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

const filterOptions = [
  { label: "All Reports", value: "all" },
  { label: "Blood Tests", value: "blood" },
  { label: "Urine Tests", value: "urine" },
  { label: "Ultrasound", value: "ultrasound" }
];

const reports = [
  { category: "blood", date: "22 Mar 2026", icon: <BloodDropIcon />, title: "Complete Blood Count", uploadedBy: "Nimali Perera" },
  { category: "urine", date: "18 Mar 2026", icon: <RecordsIcon />, title: "Urine Full Report", uploadedBy: "Hasini Jayawardena" },
  { category: "ultrasound", date: "12 Mar 2026", icon: <CalendarIcon />, title: "Ultrasound Summary", uploadedBy: "Dr. Senanayake" }
];

export function LabReportsScreen() {
  const [language, setLanguage] = useState("en");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredReports = useMemo(
    () => reports.filter((report) => selectedFilter === "all" || report.category === selectedFilter),
    [selectedFilter]
  );

  return (
    <LabReportsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Upload lab report" label="Upload Lab Report" onClick={() => undefined} />}
      filterGroup={<FilterChipGroup ariaLabel="Report categories" onChange={setSelectedFilter} options={filterOptions} selectedValue={selectedFilter} />}
      reportsSection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Recent reports and uploads" title="Lab Reports" />
          {filteredReports.map((report, index) => (
            <div key={`${report.title}-${report.date}`} style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
              <LabReportCard date={report.date} leadingIcon={report.icon} onViewReport={() => undefined} title={report.title} uploadedBy={report.uploadedBy} />
              {index < filteredReports.length - 1 ? <Divider /> : null}
            </div>
          ))}
        </section>
      }
      summaryCard={<MotherSummaryCard midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" onClick={() => undefined} riskLabel="High Risk" status="high-risk" trimester="Second" />}
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Lab Reports"
        />
      }
    />
  );
}

export const labReportsStoryData = {
  filterOptions,
  languageOptions,
  navigationItems,
  reports
};
