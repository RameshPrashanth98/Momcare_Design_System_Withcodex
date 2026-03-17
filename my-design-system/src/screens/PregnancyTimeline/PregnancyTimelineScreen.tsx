import { useMemo, useState } from "react";

import { FilterChipGroup } from "../../components/LabReports/index.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { PregnancyTimelineCard, PregnancyTimelineLayout, MilestoneListCard } from "../../components/PregnancyTimeline/index.js";
import { ContextHeader } from "../../components/RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../../components/VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BloodDropIcon, CalendarIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
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

const timelineItems = [
  { category: 'blood', date: '22 Mar 2026', title: 'Blood Test Uploaded', description: 'Complete blood count reviewed at the clinic visit.', icon: <BloodDropIcon />, actionLabel: 'View Report' },
  { category: 'urine', date: '18 Mar 2026', title: 'Urine Test Reviewed', description: 'Urine full report updated in the record.', icon: <ClinicIcon />, actionLabel: 'View Report' },
  { category: 'ultrasound', date: '12 Mar 2026', title: 'Ultrasound Summary', description: 'Growth scan summary filed by the consultant.', icon: <CalendarIcon /> }
];

const milestoneItems = [
  { icon: <CalendarIcon />, title: 'Growth Scan', supportingText: 'Due on 04 Apr 2026' },
  { icon: <ClinicIcon />, title: 'Clinic Review', supportingText: 'Scheduled for 11 Apr 2026' }
];

export function PregnancyTimelineScreen() {
  const [language, setLanguage] = useState('en');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredItems = useMemo(
    () => timelineItems.filter((item) => selectedFilter === 'all' || item.category === selectedFilter),
    [selectedFilter]
  );

  return (
    <PregnancyTimelineLayout
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      filterGroup={<FilterChipGroup ariaLabel="Timeline categories" onChange={setSelectedFilter} options={filterOptions} selectedValue={selectedFilter} />}
      milestonesSection={
        <section style={{ display: 'grid', gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Next key pregnancy checks" title="Upcoming Milestones" />
          <MilestoneListCard ariaLabel="Upcoming milestones" items={milestoneItems} />
        </section>
      }
      summaryCard={<MotherSummaryCard edd="04 Aug 2026" midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" onClick={() => undefined} status="high-risk" trimester="Second" />}
      timelineSection={
        <section style={{ display: 'grid', gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Recent reports and pregnancy events" title="Pregnancy Timeline" />
          <PregnancyTimelineCard ariaLabel="Pregnancy timeline" items={filteredItems} />
        </section>
      }
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Pregnancy Timeline"
        />
      }
    />
  );
}

export const pregnancyTimelineStoryData = {
  filterOptions,
  languageOptions,
  milestoneItems,
  navigationItems,
  timelineItems
};
