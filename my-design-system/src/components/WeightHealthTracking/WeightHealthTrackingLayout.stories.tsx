import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from "../ClinicSchedule/ExtendedFAB.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ContextHeader } from "../RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { MotherSummaryCard } from "../VaccinationRecords/MotherSummaryCard.js";
import { ArrowLeftIcon, BellIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { BloodPressureRecordList } from "./BloodPressureRecordList.js";
import { HemoglobinCard } from "./HemoglobinCard.js";
import { WeightChartCard } from "./WeightChartCard.js";
import { WeightHealthTrackingLayout } from "./WeightHealthTrackingLayout.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Clinics", value: "clinics", icon: <ClinicIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "Profile", value: "profile", icon: <UserCircleIcon /> }
];

const meta = {
  title: "WeightHealthTracking/WeightHealthTrackingLayout",
  component: WeightHealthTrackingLayout,
  args: {
    bloodPressureSection: undefined,
    bottomNavigation: undefined,
    contextHeader: undefined,
    fab: undefined,
    hemoglobinSection: undefined,
    summaryCard: undefined,
    topBar: undefined,
    weightSection: undefined
  },
  argTypes: {
    bloodPressureSection: { control: false },
    bottomNavigation: { control: false },
    contextHeader: { control: false },
    fab: { control: false },
    hemoglobinSection: { control: false },
    summaryCard: { control: false },
    topBar: { control: false },
    weightSection: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof WeightHealthTrackingLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <WeightHealthTrackingLayout
      bloodPressureSection={<section style={{ display: "grid", gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Recent clinic measurements" title="Blood Pressure Tracking" /><BloodPressureRecordList items={[{ date: "15 Mar 2026", status: "Normal", value: "118/76 mmHg" }, { date: "22 Mar 2026", status: "High", value: "145/92 mmHg" }]} /></section>}
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Add health record" label="Add Health Record" onClick={() => undefined} />}
      hemoglobinSection={<section style={{ display: "grid", gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Latest lab summary" title="Hemoglobin Level" /><HemoglobinCard date="22 Mar 2026" status="Normal" title="Hemoglobin Level" value="11.8 g/dL" /></section>}
      summaryCard={<MotherSummaryCard midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" riskLabel="High Risk" status="high-risk" trimester="Second" />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={languageOptions} value="en" />, <IconButton aria-label="Open utility panel" icon={<BellIcon />} key="utility" variant="standard" />, <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />} title="Weight & Health Tracking" />}
      weightSection={<section style={{ display: "grid", gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Trend across recent clinic visits" title="Weight Tracking" /><WeightChartCard ariaLabel="Weight tracking chart" data={[{ date: "01 Mar", weight: 54.2 }, { date: "08 Mar", weight: 54.8 }, { date: "15 Mar", weight: 55.4 }, { date: "22 Mar", weight: 56.1 }]} lastRecordedDate="22 Mar 2026" latestWeight="56.1 kg" title="Weight Tracking" xKey="date" yKey="weight" /></section>}
    />
  )
};
