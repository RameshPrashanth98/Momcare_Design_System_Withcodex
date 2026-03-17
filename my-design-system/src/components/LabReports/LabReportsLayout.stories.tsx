import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from "../ClinicSchedule/ExtendedFAB.js";
import { Divider } from "../Divider/Divider.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ContextHeader } from "../RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BellIcon, BloodDropIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { FilterChipGroup } from "./FilterChipGroup.js";
import { LabReportCard } from "./LabReportCard.js";
import { LabReportsLayout } from "./LabReportsLayout.js";

const meta = {
  title: "Lab Reports/LabReportsLayout",
  component: LabReportsLayout,
  args: {
    bottomNavigation: undefined,
    contextHeader: undefined,
    fab: undefined,
    filterGroup: undefined,
    reportsSection: undefined,
    summaryCard: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    contextHeader: { control: false },
    fab: { control: false },
    filterGroup: { control: false },
    reportsSection: { control: false },
    summaryCard: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LabReportsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LabReportsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Clinics", value: "clinics", icon: <ClinicIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "Profile", value: "profile", icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Upload lab report" label="Upload Lab Report" onClick={() => undefined} />}
      filterGroup={<FilterChipGroup ariaLabel="Report categories" onChange={() => undefined} options={[{ label: "All Reports", value: "all" }, { label: "Blood Tests", value: "blood" }, { label: "Urine Tests", value: "urine" }, { label: "Ultrasound", value: "ultrasound" }]} selectedValue="all" />}
      reportsSection={<section style={{ display: "grid", gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Recent reports and uploads" title="Lab Reports" /><LabReportCard date="22 Mar 2026" leadingIcon={<BloodDropIcon />} onViewReport={() => undefined} title="Complete Blood Count" uploadedBy="Nimali Perera" /><Divider /><LabReportCard date="18 Mar 2026" leadingIcon={<RecordsIcon />} onViewReport={() => undefined} title="Urine Full Report" uploadedBy="Hasini Jayawardena" /></section>}
      summaryCard={<MotherSummaryCard midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" riskLabel="High Risk" status="high-risk" trimester="Second" />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Open utility panel" icon={<BellIcon />} key="utility" variant="standard" />, <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />} title="Lab Reports" />}
    />
  )
};
