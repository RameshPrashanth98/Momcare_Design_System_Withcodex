import { useState } from "react";

import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import { SearchRecordsLayout } from "../../components/SearchRecords/SearchRecordsLayout.js";
import { RecordCard } from "../../components/SearchRecords/RecordCard.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { ArrowLeftIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";

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

const records = [
  {
    name: "Nethmi Perera",
    nic: "199624512345",
    clinicNumber: "CL-2048",
    trimester: "Second",
    midwife: "Nimali Perera",
    status: "high-risk" as const
  },
  {
    name: "Sashini Fernando",
    nic: "199911123456",
    clinicNumber: "CL-2094",
    trimester: "First",
    midwife: "Hasini Jayawardena",
    status: "normal" as const
  }
];

export function SearchRecordsScreen() {
  const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("");

  return (
    <SearchRecordsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      records={records.map((record) => (
        <RecordCard
          clinicNumber={record.clinicNumber}
          key={record.clinicNumber}
          midwife={record.midwife}
          name={record.name}
          nic={record.nic}
          onLabReports={() => undefined}
          onTimeline={() => undefined}
          onVaccinationRecords={() => undefined}
          onWeightAndHealthTracking={() => undefined}
          status={record.status}
          trimester={record.trimester}
        />
      ))}
      searchBar={<SearchBar onChange={(event) => setQuery(event.target.value)} onSearch={() => undefined} placeholder="Search by name, NIC, or clinic number" value={query} />}
      sectionHeader={<SectionHeader subtitle="Use search to refine the active mother record list" title="Pregnant Mothers List" />}
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Search Records"
        />
      }
    />
  );
}

export const searchRecordsStoryData = {
  languageOptions,
  navigationItems,
  records
};
