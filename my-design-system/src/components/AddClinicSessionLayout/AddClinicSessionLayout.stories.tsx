import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { DateField } from "../DateField/DateField.js";
import { FormSection } from "../FormSection/FormSection.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { ClockIcon, SearchIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SelectField } from "../SelectField/SelectField.js";
import { TimeField } from "../TimeField/TimeField.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { AddClinicSessionLayout } from "./AddClinicSessionLayout.js";

const navigationItems = [
  { label: "Home", value: "home", icon: <SearchIcon /> },
  { label: "Mothers", value: "mothers", icon: <UserCircleIcon /> },
  { label: "Visits", value: "visits", icon: <ClockIcon /> },
  { label: "Records", value: "records", icon: <ClockIcon /> },
  { label: "More", value: "more", icon: <SearchIcon /> }
];

const meta = {
  title: "Clinic Session/AddClinicSessionLayout",
  component: AddClinicSessionLayout,
  args: {
    actions: undefined,
    bottomNavigation: undefined,
    children: undefined,
    topBar: undefined
  },
  argTypes: {
    actions: { control: false },
    bottomNavigation: { control: false },
    children: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AddClinicSessionLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: undefined,
    bottomNavigation: undefined,
    children: undefined,
    topBar: undefined
  },
  render: () => (
    <AddClinicSessionLayout
      actions={
        <>
          <Button fullWidth variant="outlined">Cancel</Button>
          <Button fullWidth>Create Clinic Session</Button>
        </>
      }
      bottomNavigation={<NavigationBar items={navigationItems} value="visits" />}
      topBar={
        <TopAppBar
          actions={[
            <IconButton aria-label="Search" icon={<SearchIcon />} key="search" />,
            <LanguageSwitcher aria-label="Choose language" key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
            <IconButton aria-label="Open profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<SearchIcon />} />}
          title="Add Clinic Session"
        />
      }
    >
      <FormSection title="Clinic Information">
        <SelectField label="Clinic Name" onChange={() => undefined} options={[{ label: "Akuressa Rural Clinic", value: "akuressa" }]} value="akuressa" />
        <DateField label="Clinic Date" placeholder="DD / MM / YYYY" value="17 Mar 2026" />
        <TimeField label="Clinic Start Time" placeholder="Select time" value="9:00 AM" />
      </FormSection>
    </AddClinicSessionLayout>
  )
};
