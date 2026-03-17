import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { DateField } from "../DateField/DateField.js";
import { FormSection } from "../FormSection/FormSection.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { ArrowLeftIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { RegisterClinicVisitLayout } from "./RegisterClinicVisitLayout.js";
import { ContextHeader } from "./ContextHeader.js";

const meta = {
  title: "Register Clinic Visit/RegisterClinicVisitLayout",
  component: RegisterClinicVisitLayout,
  args: {
    actions: undefined,
    bottomNavigation: undefined,
    children: undefined,
    contextHeader: undefined,
    topBar: undefined
  },
  argTypes: {
    actions: { control: false },
    bottomNavigation: { control: false },
    children: { control: false },
    contextHeader: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof RegisterClinicVisitLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RegisterClinicVisitLayout
      actions={<div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}><Button fullWidth variant="outlined">Cancel</Button><Button fullWidth>Save Visit Record</Button></div>}
      bottomNavigation={<NavigationBar activeItem="visits" items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Visits", value: "visits", icon: <VisitIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "Profile", value: "profile", icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      contextHeader={<ContextHeader subtitle="17 Mar 2026" title="Nethmi Perera" />}
      topBar={<TopAppBarShim />}
    >
      <FormSection title="Schedule Details">
        <DateField label="Clinic Date" value="17 Mar 2026" />
      </FormSection>
    </RegisterClinicVisitLayout>
  )
};

function TopAppBarShim() {
  return (
    <div>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "auto 1fr auto auto auto", padding: "1rem" }}>
        <IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />
        <span>Register Clinic Visit</span>
        <IconButton aria-label="Search" icon={<SearchIcon />} variant="standard" />
        <LanguageSwitcher options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />
        <IconButton aria-label="Profile" icon={<UserCircleIcon />} variant="filled" />
      </div>
    </div>
  );
}
