import type { Meta, StoryObj } from "@storybook/react";

import { FilterChipGroup } from "../LabReports/FilterChipGroup.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ContextHeader } from "../RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BloodDropIcon, CalendarIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { MilestoneListCard } from "./MilestoneListCard.js";
import { PregnancyTimelineCard } from "./PregnancyTimelineCard.js";
import { PregnancyTimelineLayout } from "./PregnancyTimelineLayout.js";

const meta = {
  title: "Pregnancy Timeline/PregnancyTimelineLayout",
  component: PregnancyTimelineLayout,
  args: {
    bottomNavigation: undefined,
    contextHeader: undefined,
    filterGroup: undefined,
    milestonesSection: undefined,
    summaryCard: undefined,
    timelineSection: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    contextHeader: { control: false },
    filterGroup: { control: false },
    milestonesSection: { control: false },
    summaryCard: { control: false },
    timelineSection: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PregnancyTimelineLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PregnancyTimelineLayout
      bottomNavigation={<NavigationBar activeItem="records" items={[{ label: 'Home', value: 'home', icon: <HomeIcon /> }, { label: 'Mothers', value: 'mothers', icon: <MothersIcon /> }, { label: 'Clinics', value: 'clinics', icon: <ClinicIcon /> }, { label: 'Records', value: 'records', icon: <RecordsIcon /> }, { label: 'Profile', value: 'profile', icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      filterGroup={<FilterChipGroup ariaLabel="Timeline categories" onChange={() => undefined} options={[{ label: 'All Reports', value: 'all' }, { label: 'Blood Tests', value: 'blood' }, { label: 'Urine Tests', value: 'urine' }, { label: 'Ultrasound', value: 'ultrasound' }]} selectedValue="all" />}
      milestonesSection={<section style={{ display: 'grid', gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Next key pregnancy checks" title="Upcoming Milestones" /><MilestoneListCard ariaLabel="Upcoming milestones" items={[{ icon: <CalendarIcon />, title: 'Growth Scan', supportingText: 'Due on 04 Apr 2026' }, { icon: <ClinicIcon />, title: 'Clinic Review', supportingText: 'Scheduled for 11 Apr 2026' }]} /></section>}
      summaryCard={<MotherSummaryCard edd="04 Aug 2026" midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" status="high-risk" trimester="Second" />}
      timelineSection={<section style={{ display: 'grid', gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Recent reports and pregnancy events" title="Pregnancy Timeline" /><PregnancyTimelineCard ariaLabel="Pregnancy timeline" items={[{ date: '22 Mar 2026', title: 'Blood Test Uploaded', description: 'Complete blood count reviewed at the clinic visit.', icon: <BloodDropIcon />, actionLabel: 'View Report' }, { date: '18 Mar 2026', title: 'Urine Test Reviewed', description: 'Urine full report updated in the record.', icon: <ClinicIcon />, actionLabel: 'View Report' }, { date: '12 Mar 2026', title: 'Ultrasound Summary', description: 'Growth scan summary filed by the consultant.', icon: <CalendarIcon /> }]} /></section>}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={[{ label: 'EN', value: 'en' }, { label: 'SI', value: 'si' }]} value="en" />, <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />, <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />} title="Pregnancy Timeline" />}
    />
  )
};
