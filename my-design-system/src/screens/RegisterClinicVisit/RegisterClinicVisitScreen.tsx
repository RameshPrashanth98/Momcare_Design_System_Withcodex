import { useState } from "react";

import { Button } from "../../components/Button/Button.js";
import { DateField } from "../../components/DateField/DateField.js";
import { FormSection } from "../../components/FormSection/FormSection.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { ArrowLeftIcon, CalendarIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon, VisitIcon } from "../../components/MotherProfile/icons.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SelectField } from "../../components/SelectField/SelectField.js";
import { TextField } from "../../components/TextField/TextField.js";
import { TimeField } from "../../components/TimeField/TimeField.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { RegisterClinicVisitLayout } from "../../components/RegisterClinicVisit/RegisterClinicVisitLayout.js";
import { ContextHeader } from "../../components/RegisterClinicVisit/ContextHeader.js";
import { InfoCard } from "../../components/RegisterClinicVisit/InfoCard.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const phmAreaOptions = [
  { label: "Akuressa North", value: "akuressa-north" },
  { label: "Akuressa South", value: "akuressa-south" },
  { label: "Kamburupitiya East", value: "kamburupitiya-east" }
];

const midwifeOptions = [
  { label: "Nimali Perera", value: "nimali" },
  { label: "Hasini Jayawardena", value: "hasini" },
  { label: "Rashmi Lakshika", value: "rashmi" }
];

const supervisorOptions = [
  { label: "Dr. Senali Fernando", value: "senali" },
  { label: "Dr. Tharushi Silva", value: "tharushi" },
  { label: "AMOH P. Wijesinghe", value: "wijesinghe" }
];

const vaccinationOptions = [
  { label: "Updated", value: "updated" },
  { label: "Pending", value: "pending" },
  { label: "Not Applicable", value: "na" }
];

const visitStatusOptions = [
  { label: "Completed", value: "completed" },
  { label: "Follow-up Needed", value: "follow-up" },
  { label: "Rescheduled", value: "rescheduled" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon />, activeIcon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "Profile", value: "profile", icon: <UserCircleIcon /> }
];

export function RegisterClinicVisitScreen() {
  const [language, setLanguage] = useState("en");
  const [phmArea, setPhmArea] = useState("akuressa-north");
  const [assignedMidwife, setAssignedMidwife] = useState("nimali");
  const [supervisor, setSupervisor] = useState("senali");
  const [clinicDate, setClinicDate] = useState("17 Mar 2026");
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("12:30 PM");
  const [vaccinationStatus, setVaccinationStatus] = useState("updated");
  const [visitStatus, setVisitStatus] = useState("completed");

  return (
    <RegisterClinicVisitLayout
      actions={
        <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Button fullWidth variant="outlined">Cancel</Button>
          <Button fullWidth>Save Visit Record</Button>
        </div>
      }
      bottomNavigation={<NavigationBar activeItem="visits" items={navigationItems} onChange={() => undefined} />}
      contextHeader={<ContextHeader onBack={() => undefined} subtitle="17 Mar 2026" title="Nethmi Perera" />}
      topBar={
        <TopAppBar
          actions={[
            <IconButton aria-label="Search visits" icon={<SearchIcon />} key="search" variant="standard" />,
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Register Clinic Visit"
        />
      }
    >
      <FormSection title="Mother Information">
        <InfoCard alert assignedMidwife="Nimali Perera" date="17 Mar 2026" identifier="199624512345" name="Nethmi Perera" riskLabel="High Risk" status="active">
          <SelectField label="PHM Area" onChange={setPhmArea} options={phmAreaOptions} placeholder="Select PHM area" supportingText="Confirm the PHM coverage area for this visit." value={phmArea} />
        </InfoCard>
      </FormSection>

      <FormSection title="Schedule Details">
        <DateField label="Clinic Date" onChange={(event) => setClinicDate(event.target.value)} placeholder="DD / MM / YYYY" supportingText="Match the clinic schedule date." value={clinicDate} />
        <TimeField label="Clinic Start Time" onChange={setStartTime} onOpenTimePicker={() => undefined} placeholder="Select start time" supportingText="Use the actual session start time." value={startTime} />
        <TimeField label="Clinic End Time" onChange={setEndTime} onOpenTimePicker={() => undefined} placeholder="Select end time" supportingText="Use the actual session end time." value={endTime} />
      </FormSection>

      <FormSection title="Staff Assignment">
        <SelectField label="Assigned Midwife" onChange={setAssignedMidwife} options={midwifeOptions} placeholder="Select midwife" supportingText="Select the midwife who handled the visit." value={assignedMidwife} />
        <SelectField label="Supervising MOH / AMOH" onChange={setSupervisor} options={supervisorOptions} placeholder="Select supervisor" supportingText="Capture the supervising officer for this clinic visit." value={supervisor} />
      </FormSection>

      <FormSection title="Vaccination Update">
        <SelectField label="Vaccination Update Status" onChange={setVaccinationStatus} options={vaccinationOptions} placeholder="Select vaccination status" supportingText="Record the latest vaccination update for the mother." value={vaccinationStatus} />
      </FormSection>

      <FormSection title="Visit Outcome">
        <SelectField label="Visit Status" onChange={setVisitStatus} options={visitStatusOptions} placeholder="Select visit status" supportingText="Capture the visit outcome before saving." value={visitStatus} />
        <TextField label="Visit Notes" onChange={() => undefined} placeholder="Add clinical notes or next steps" supportingText="Optional notes for follow-up and documentation." value="Vitals reviewed and counselling provided." />
      </FormSection>
    </RegisterClinicVisitLayout>
  );
}

export const registerClinicVisitStoryData = {
  languageOptions,
  midwifeOptions,
  navigationItems,
  phmAreaOptions,
  supervisorOptions,
  vaccinationOptions,
  visitStatusOptions
};
