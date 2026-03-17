import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from "../ClinicSchedule/ExtendedFAB.js";
import { Divider } from "../Divider/Divider.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ContextHeader } from "../RegisterClinicVisit/ContextHeader.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { ArrowLeftIcon, BellIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { MotherSummaryCard } from "./MotherSummaryCard.js";
import { VaccinationRecordCard } from "./VaccinationRecordCard.js";
import { VaccinationRecordsLayout } from "./VaccinationRecordsLayout.js";

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
  title: "Vaccination Records/VaccinationRecordsLayout",
  component: VaccinationRecordsLayout,
  args: {
    bottomNavigation: undefined,
    contextHeader: undefined,
    fab: undefined,
    historySection: undefined,
    summaryCard: undefined,
    topBar: undefined,
    upcomingSection: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    contextHeader: { control: false },
    fab: { control: false },
    historySection: { control: false },
    summaryCard: { control: false },
    topBar: { control: false },
    upcomingSection: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof VaccinationRecordsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VaccinationRecordsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="NIC: 199624512345" title="Nethmi Perera" />}
      fab={<ExtendedFAB aria-label="Add vaccination record" label="Add Vaccination Record" onClick={() => undefined} />}
      historySection={
        <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <SectionHeader subtitle="Previously captured doses" title="Vaccination History" />
          <VaccinationRecordCard status="Completed" subtitle="Dose 1" supportingText="Administered on 10 Mar 2026" title="Tetanus Toxoid" tone="completed" />
          <Divider />
          <VaccinationRecordCard status="Due" subtitle="Dose 2" supportingText="Expected at the next clinic session" title="Iron Supplement" tone="warning" />
        </section>
      }
      summaryCard={<MotherSummaryCard midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" riskLabel="High Risk" status="high-risk" trimester="Second" />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={languageOptions} value="en" />, <IconButton aria-label="Open utility panel" icon={<BellIcon />} key="utility" variant="standard" />, <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />} title="Vaccination Records" />}
      upcomingSection={<section style={{ display: "grid", gap: spacingPrimitives.space3.value }}><SectionHeader subtitle="Scheduled next steps" title="Upcoming Vaccinations" /><VaccinationRecordCard status="Upcoming" subtitle="Scheduled" supportingText="24 Mar 2026" title="Calcium Booster" tone="upcoming" /></section>}
    />
  )
};
