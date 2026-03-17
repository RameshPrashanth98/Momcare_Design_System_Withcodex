import { useState, type CSSProperties } from "react";

import { AddClinicSessionLayout } from "../../components/AddClinicSessionLayout/AddClinicSessionLayout.js";
import { Button } from "../../components/Button/Button.js";
import { DateField } from "../../components/DateField/DateField.js";
import { FormSection } from "../../components/FormSection/FormSection.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { ArrowLeftIcon, ClockIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon, VisitIcon, avatarShell } from "../../components/MotherProfile/icons.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SelectField } from "../../components/SelectField/SelectField.js";
import { TextField } from "../../components/TextField/TextField.js";
import { TimeField } from "../../components/TimeField/TimeField.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { Typography } from "../../components/Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const clinicOptions = [
  { label: "Akuressa Rural Clinic", value: "akuressa" },
  { label: "Kamburupitiya Family Clinic", value: "kamburupitiya" },
  { label: "Weligama Maternal Care Unit", value: "weligama" }
];

const clinicTypeOptions = [
  { label: "Antenatal Clinic", value: "antenatal" },
  { label: "Postnatal Clinic", value: "postnatal" },
  { label: "Nutrition Review Clinic", value: "nutrition" }
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

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Visits", value: "visits", icon: <VisitIcon />, activeIcon: <VisitIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "More", value: "more", icon: <MoreIcon /> }
];

const actionRowStyle: CSSProperties = {
  display: "grid",
  gap: spacingPrimitives.space3.value,
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
};

const introStyle: CSSProperties = {
  display: "grid",
  gap: spacingPrimitives.space2.value
};

export function AddClinicSessionScreen() {
  const [language, setLanguage] = useState("en");
  const [clinicName, setClinicName] = useState("akuressa");
  const [clinicType, setClinicType] = useState("antenatal");
  const [phmArea, setPhmArea] = useState("akuressa-north");
  const [assignedMidwife, setAssignedMidwife] = useState("nimali");
  const [supervisor, setSupervisor] = useState("senali");
  const [location, setLocation] = useState("Akuressa MOH Office");
  const [clinicDate, setClinicDate] = useState("17 Mar 2026");
  const [expectedAttendance, setExpectedAttendance] = useState("24");
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("12:30 PM");

  return (
    <AddClinicSessionLayout
      actions={
        <div style={actionRowStyle}>
          <Button fullWidth variant="outlined">Cancel</Button>
          <Button fullWidth>Create Clinic Session</Button>
        </div>
      }
      bottomNavigation={<NavigationBar items={navigationItems} value="visits" />}
      topBar={
        <TopAppBar
          actions={[
            <IconButton aria-label="Search clinics" icon={<SearchIcon />} key="search" variant="standard" />,
            <LanguageSwitcher aria-label="Select language" key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open profile" icon={avatarShell(<Typography as="span" variant="label">RP</Typography>)} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Back to scheduling" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Add Clinic Session"
        />
      }
    >
      <div style={introStyle}>
        <Typography as="h1" variant="headline">Plan a new clinic session</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Capture the clinic details, schedule, staff assignment, and expected attendance before publishing the session.</Typography>
      </div>

      <FormSection title="Clinic Information">
        <SelectField label="Clinic Name" onChange={setClinicName} options={clinicOptions} placeholder="Select clinic" supportingText="Choose the clinic venue for this session." value={clinicName} />
        <SelectField label="Clinic Type" onChange={setClinicType} options={clinicTypeOptions} placeholder="Select clinic type" supportingText="Use the clinic category from the weekly plan." value={clinicType} />
        <TextField label="Clinic Location" onChange={(event) => setLocation(event.target.value)} placeholder="Enter clinic location" supportingText="Provide the exact venue or room details." value={location} />
        <SelectField label="PHM Area" onChange={setPhmArea} options={phmAreaOptions} placeholder="Select PHM area" supportingText="Assign the session to the responsible PHM area." value={phmArea} />
      </FormSection>

      <FormSection title="Schedule Details">
        <DateField label="Clinic Date" onChange={(event) => setClinicDate(event.target.value)} placeholder="DD / MM / YYYY" supportingText="Keep the date aligned with the clinic calendar." value={clinicDate} />
        <TimeField label="Clinic Start Time" onChange={setStartTime} onOpenTimePicker={() => undefined} placeholder="Select start time" supportingText="Use the opening time shown in the roster." value={startTime} />
        <TimeField label="Clinic End Time" onChange={setEndTime} onOpenTimePicker={() => undefined} placeholder="Select end time" supportingText="Use the closing time agreed with staff." value={endTime} />
      </FormSection>

      <FormSection title="Staff Assignment">
        <SelectField label="Assigned Midwife" onChange={setAssignedMidwife} options={midwifeOptions} placeholder="Select midwife" supportingText="Assign the midwife leading this session." value={assignedMidwife} />
        <SelectField label="Supervising MOH / AMOH" onChange={setSupervisor} options={supervisorOptions} placeholder="Select supervisor" supportingText="Record the supervising officer responsible for the session." value={supervisor} />
      </FormSection>

      <FormSection title="Expected Attendance">
        <TextField label="Expected Number of Mothers" onChange={(event) => setExpectedAttendance(event.target.value)} placeholder="Enter expected attendance" supportingText="Estimate based on the confirmed appointment list." value={expectedAttendance} />
      </FormSection>
    </AddClinicSessionLayout>
  );
}

export const addClinicSessionStoryData = {
  languageOptions,
  clinicOptions,
  clinicTypeOptions,
  phmAreaOptions,
  midwifeOptions,
  supervisorOptions,
  navigationItems
};
