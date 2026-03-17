import { ActionBar } from "../../components/MedicalHistory/ActionBar.js";
import { AttachmentListItem } from "../../components/MedicalHistory/AttachmentListItem.js";
import { ConditionChipGroup } from "../../components/MedicalHistory/ConditionChipGroup.js";
import { MedicalHistoryLayout } from "../../components/MedicalHistory/MedicalHistoryLayout.js";
import { NoteCard } from "../../components/MedicalHistory/NoteCard.js";
import { PregnancyHistoryCard } from "../../components/MedicalHistory/PregnancyHistoryCard.js";
import { SummaryCard } from "../../components/MedicalHistory/SummaryCard.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { Typography } from "../../components/Typography/Typography.js";
import { ArrowLeftIcon, ChevronRightIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, UserCircleIcon, VisitIcon, surfaceCardStyle } from "../../components/MotherProfile/icons.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon />, activeIcon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

function SurfaceGroup({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ ...surfaceCardStyle(), display: "grid", gap: spacingPrimitives.space3.value, padding: spacingPrimitives.space4.value }}>
      {children}
    </div>
  );
}

export function MedicalHistoryScreen() {
  const topBar = (
    <TopAppBar
      actions={[
        <LanguageSwitcher aria-label="Select language" key="language" options={languageOptions} value="en" />,
        <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Back to profile" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Medical History"
    />
  );

  const summaryCard = (
    <SummaryCard
      avatar={<Typography as="span" variant="label">SA</Typography>}
      midwife="N. Perera"
      name="Sanduni Abeysinghe"
      nic="199624512345"
      riskStatus="high-risk"
      timestamp="17 Mar 2026, 8:30 AM"
      trimester="Second trimester"
    />
  );

  const sections = (
    <>
      <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
        <SectionHeader title="Previous Pregnancies" />
        <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
          <PregnancyHistoryCard
            entries={[
              { label: "Outcome", value: "Live birth" },
              { label: "Delivery", value: "C-section" },
              { label: "Birth weight", value: "3.1 kg" },
              { label: "Facility", value: "District General Hospital" }
            ]}
            notesLabel="Postpartum review completed with no persistent complications."
            year="2024"
          />
          <PregnancyHistoryCard
            entries={[
              { label: "Outcome", value: "Early loss" },
              { label: "Gestation", value: "10 weeks" },
              { label: "Follow-up", value: "Outpatient review" },
              { label: "Recovery", value: "Complete" }
            ]}
            notesLabel="Supportive counselling documented in the medical record."
            year="2021"
          />
        </div>
      </section>

      <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
        <SectionHeader title="Medical Conditions" />
        <SurfaceGroup>
          <ConditionChipGroup items={["Gestational diabetes", "Iron deficiency", "Previous C-section", "Rh negative"]} />
        </SurfaceGroup>
      </section>

      <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
        <SectionHeader title="Complications & Risk Notes" />
        <NoteCard content="High-risk monitoring continues due to prior C-section history and elevated fasting glucose trend. Reinforce diet counselling, hydration, and report review at the next clinic visit." title="Current risk summary" />
      </section>

      <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
        <SectionHeader title="Attachments" />
        <SurfaceGroup>
          <AttachmentListItem date="12 Mar 2026" onClick={() => undefined} title="Lab report - glucose monitoring" trailingIcon={<ChevronRightIcon />} />
          <AttachmentListItem date="26 Feb 2026" onClick={() => undefined} title="Ultrasound summary" trailingIcon={<ChevronRightIcon />} />
          <AttachmentListItem date="14 Feb 2026" onClick={() => undefined} title="Consultant review note" trailingIcon={<ChevronRightIcon />} />
        </SurfaceGroup>
      </section>
    </>
  );

  const actionBar = (
    <ActionBar
      onAddComplication={() => undefined}
      onAddMedicalNote={() => undefined}
      onUploadReport={() => undefined}
    />
  );

  const bottomNavigation = <NavigationBar items={navigationItems} value="records" />;

  return <MedicalHistoryLayout actionBar={actionBar} bottomNavigation={bottomNavigation} sections={sections} summaryCard={summaryCard} topBar={topBar} />;
}

export const medicalHistoryStoryData = {
  languageOptions,
  navigationItems,
  attachments: [
    { title: "Lab report - glucose monitoring", date: "12 Mar 2026", trailingIcon: <ChevronRightIcon /> },
    { title: "Ultrasound summary", date: "26 Feb 2026", trailingIcon: <ChevronRightIcon /> },
    { title: "Consultant review note", date: "14 Feb 2026", trailingIcon: <ChevronRightIcon /> }
  ]
};
