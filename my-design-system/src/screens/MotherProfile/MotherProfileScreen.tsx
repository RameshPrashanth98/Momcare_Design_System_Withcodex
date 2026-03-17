import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { ListItem } from "../../components/ListItem/ListItem.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { Typography } from "../../components/Typography/Typography.js";
import { InfoRow } from "../../components/MotherProfile/InfoRow.js";
import { MetricRow } from "../../components/MotherProfile/MetricRow.js";
import { MotherProfileLayout } from "../../components/MotherProfile/MotherProfileLayout.js";
import { SectionCard } from "../../components/MotherProfile/SectionCard.js";
import { SummaryCard } from "../../components/MotherProfile/SummaryCard.js";
import {
  ArrowLeftIcon,
  BloodDropIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClinicIcon,
  GlobeIcon,
  HeartPulseIcon,
  HomeIcon,
  MoreIcon,
  MothersIcon,
  RecordsIcon,
  SearchIcon,
  ShieldIcon,
  UserCircleIcon,
  VisitIcon
} from "../../components/MotherProfile/icons.js";
import { semanticTokens } from "../../tokens/semantic.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon />, activeIcon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

export function MotherProfileScreen() {
  const topBar = (
    <TopAppBar
      actions={[
        <IconButton aria-label="Search mothers" icon={<SearchIcon />} key="search" variant="standard" />,
        <LanguageSwitcher aria-label="Select language" key="language" options={languageOptions} value="en" />,
        <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Back to mothers" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Mother Profile"
    />
  );

  const summary = (
    <SummaryCard
      assignedMidwife="N. Perera"
      avatar={<Typography as="span" variant="label">SA</Typography>}
      name="Sanduni Abeysinghe"
      nic="199624512345"
      onRecordVisit={() => undefined}
      onViewProfile={() => undefined}
      onViewRecords={() => undefined}
      riskStatus="high-risk"
      trimester="Second trimester"
    />
  );

  const sections = (
    <>
      <SectionCard description="Snapshot of key pregnancy details and assigned care." title="Pregnancy Overview">
        <InfoRow label="Expected delivery date" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="24 Jun 2026" />
        <InfoRow label="Clinic" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="Matara MOH Clinic" />
        <InfoRow label="Blood group" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="A positive" />
      </SectionCard>

      <SectionCard description="Current monitoring metrics to support timely follow-up." title="Health Tracking">
        <MetricRow indicatorValue={0.68} indicatorVariant="stable" label="Weight gain" value="7.4 kg of 10 kg target" />
        <MetricRow indicatorValue={0.52} indicatorVariant="watch" label="Blood pressure" value="128 / 82 mmHg" />
        <MetricRow indicatorValue={0.36} indicatorVariant="critical" label="Glucose control" value="Fasting average 108 mg/dL" />
      </SectionCard>

      <SectionCard description="History flags and ongoing conditions relevant to the next visit." title="Medical History">
        <ListItem leadingIcon={<HeartPulseIcon />} onClick={() => undefined} primaryText="Gestational diabetes" secondaryText="Requires diet review and glucose log validation" trailingIcon={<ChevronRightIcon />} />
        <ListItem leadingIcon={<ShieldIcon />} onClick={() => undefined} primaryText="Previous C-section" secondaryText="Review scar tenderness and birth plan preferences" trailingIcon={<ChevronRightIcon />} />
        <ListItem leadingIcon={<BloodDropIcon />} onClick={() => undefined} primaryText="Iron deficiency" secondaryText="Supplement adherence monitored weekly" trailingIcon={<ChevronRightIcon />} />
      </SectionCard>

      <SectionCard description="Recent clinic interactions and recommended follow-up actions." title="Clinic Visit History">
        <ListItem leadingIcon={<CalendarIcon />} onClick={() => undefined} primaryText="12 Mar 2026" secondaryText="ANC review completed. BP stable and fetal movement discussed." trailingIcon={<ChevronRightIcon />} />
        <ListItem leadingIcon={<ClinicIcon />} onClick={() => undefined} primaryText="26 Feb 2026" secondaryText="Nutrition counselling completed with updated meal guidance." trailingIcon={<ChevronRightIcon />} />
        <ListItem leadingIcon={<VisitIcon />} primaryText="14 Feb 2026" secondaryText="Routine visit recorded. Next follow-up due in two weeks." />
      </SectionCard>
    </>
  );

  const bottomNavigation = <NavigationBar items={navigationItems} value="mothers" />;

  return <MotherProfileLayout bottomNavigation={bottomNavigation} sections={sections} summary={summary} topBar={topBar} />;
}

export const motherProfileStoryData = {
  languageOptions,
  navigationItems,
  pregnancyOverviewRows: [
    { label: "Expected delivery date", value: "24 Jun 2026", trailingIcon: <ChevronRightIcon /> },
    { label: "Clinic", value: "Matara MOH Clinic", trailingIcon: <ChevronRightIcon /> },
    { label: "Blood group", value: "A positive", trailingIcon: <ChevronRightIcon /> }
  ],
  medicalHistoryItems: [
    { leadingIcon: <HeartPulseIcon />, primaryText: "Gestational diabetes", secondaryText: "Requires diet review and glucose log validation", trailingIcon: <ChevronRightIcon /> },
    { leadingIcon: <ShieldIcon />, primaryText: "Previous C-section", secondaryText: "Review scar tenderness and birth plan preferences", trailingIcon: <ChevronRightIcon /> },
    { leadingIcon: <BloodDropIcon />, primaryText: "Iron deficiency", secondaryText: "Supplement adherence monitored weekly", trailingIcon: <ChevronRightIcon /> }
  ],
  visitHistoryItems: [
    { leadingIcon: <CalendarIcon />, primaryText: "12 Mar 2026", secondaryText: "ANC review completed. BP stable and fetal movement discussed.", trailingIcon: <ChevronRightIcon /> },
    { leadingIcon: <ClinicIcon />, primaryText: "26 Feb 2026", secondaryText: "Nutrition counselling completed with updated meal guidance.", trailingIcon: <ChevronRightIcon /> },
    { leadingIcon: <VisitIcon />, primaryText: "14 Feb 2026", secondaryText: "Routine visit recorded. Next follow-up due in two weeks." }
  ],
  metricRows: [
    { label: "Weight gain", value: "7.4 kg of 10 kg target", indicatorValue: 0.68, indicatorVariant: "stable" as const },
    { label: "Blood pressure", value: "128 / 82 mmHg", indicatorValue: 0.52, indicatorVariant: "watch" as const },
    { label: "Glucose control", value: "Fasting average 108 mg/dL", indicatorValue: 0.36, indicatorVariant: "critical" as const }
  ],
  summaryCard: {
    assignedMidwife: "N. Perera",
    avatar: <Typography as="span" variant="label">SA</Typography>,
    name: "Sanduni Abeysinghe",
    nic: "199624512345",
    riskStatus: "high-risk" as const,
    trimester: "Second trimester"
  },
  screenFrameStyle: {
    backgroundColor: semanticTokens.surface.subtle.value,
    padding: "0"
  }
};
