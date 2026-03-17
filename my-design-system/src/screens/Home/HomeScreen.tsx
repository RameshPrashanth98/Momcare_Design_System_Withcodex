import type { ReactNode } from "react";

import { Button } from "../../components/Button/Button.js";
import { ActionRow } from "../../components/HomeDashboard/ActionRow.js";
import { AlertListItem } from "../../components/HomeDashboard/AlertListItem.js";
import { AppointmentListItem } from "../../components/HomeDashboard/AppointmentListItem.js";
import { HomeDashboardLayout } from "../../components/HomeDashboard/HomeDashboardLayout.js";
import { StatsGrid } from "../../components/HomeDashboard/StatsGrid.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { ListItem } from "../../components/ListItem/ListItem.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { StatCard } from "../../components/StatCard/StatCard.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { BellIcon, CalendarIcon, ClinicIcon, HeartPulseIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, ShieldIcon, UserCircleIcon, VisitIcon, surfaceCardStyle } from "../../components/MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon />, activeIcon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

function SurfaceSection({ children }: { children: ReactNode }) {
  return <div style={{ ...surfaceCardStyle(), display: "grid", gap: spacingPrimitives.space2.value, padding: spacingPrimitives.space4.value }}>{children}</div>;
}

export function HomeScreen() {
  const topBar = <TopAppBar actions={[<IconButton aria-label="Notifications" icon={<BellIcon />} key="bell" variant="standard" />, <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />]} title="Mom Care" />;
  const languageRow = <LanguageSwitcher aria-label="Select language" options={languageOptions} value="en" />;
  const statsGrid = <StatsGrid><StatCard icon={<CalendarIcon />} label="Today's Clinics" value="06" variant="default" /><StatCard icon={<HeartPulseIcon />} label="High Risk Mothers" value="14" variant="accent" /><StatCard icon={<VisitIcon />} label="Upcoming Appointments" value="09" variant="warning" /><StatCard icon={<RecordsIcon />} label="Recent Updates" value="18" variant="default" /></StatsGrid>;

  const content = <>
    <ActionRow actions={[<Button fullWidth variant="filled">Register Mother</Button>, <Button fullWidth variant="filled">Clinic Visit</Button>, <Button fullWidth variant="filled">Add Vaccination</Button>]} />
    <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="Today's Clinics" />
      <SurfaceSection>
        <ListItem leadingIcon={<ClinicIcon />} onClick={() => undefined} primaryText="Matara MOH Clinic" secondaryText="Maternal review session" trailingText="8:30 AM" />
        <ListItem leadingIcon={<ClinicIcon />} onClick={() => undefined} primaryText="Akuressa Field Clinic" secondaryText="Vaccination follow-up" trailingText="11:00 AM" />
        <ListItem leadingIcon={<ClinicIcon />} onClick={() => undefined} primaryText="Kamburupitiya Clinic" secondaryText="Postnatal counselling" trailingText="2:00 PM" />
      </SurfaceSection>
    </section>
    <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="High Risk Mothers" />
      <SurfaceSection>
        <AlertListItem alertIcon={<ShieldIcon />} condition="Gestational diabetes" midwife="Midwife N. Perera" name="Sanduni Abeysinghe" onClick={() => undefined} />
        <AlertListItem alertIcon={<ShieldIcon />} condition="Hypertension" midwife="Midwife R. Silva" name="Nimali Perera" onClick={() => undefined} />
        <AlertListItem alertIcon={<ShieldIcon />} condition="Previous C-section" midwife="Midwife K. Fernando" name="Ayesha Nadeesha" onClick={() => undefined} />
      </SurfaceSection>
    </section>
    <section style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="Upcoming Appointments" />
      <SurfaceSection>
        <AppointmentListItem clinic="Matara MOH Clinic" name="Kavindi Jayasekara" onClick={() => undefined} time="9:45 AM" />
        <AppointmentListItem clinic="Akuressa Field Clinic" name="Hasini Madushika" onClick={() => undefined} time="12:15 PM" />
        <AppointmentListItem clinic="Kamburupitiya Clinic" name="Piumi de Silva" onClick={() => undefined} time="3:00 PM" />
      </SurfaceSection>
    </section>
  </>;

  const bottomNavigation = <NavigationBar items={navigationItems} value="home" />;

  return <HomeDashboardLayout bottomNavigation={bottomNavigation} content={content} languageRow={languageRow} statsGrid={statsGrid} topBar={topBar} />;
}

export const homeDashboardStoryData = {
  languageOptions,
  navigationItems
};
