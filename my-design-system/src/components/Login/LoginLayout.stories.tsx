import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../Checkbox/Checkbox.js";
import { Button } from "../Button/Button.js";
import { Divider } from "../Divider/Divider.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { Typography } from "../Typography/Typography.js";
import { HeartPulseIcon, ShieldIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { BrandHeader } from "./BrandHeader.js";
import { FooterInfo } from "./FooterInfo.js";
import { IconField } from "./IconField.js";
import { InfoSection } from "./InfoSection.js";
import { InlineActionGroup } from "./InlineActionGroup.js";
import { LoginLayout } from "./LoginLayout.js";
import { PasswordField } from "./PasswordField.js";

const meta = {
  title: "Login/LoginLayout",
  component: LoginLayout,
  args: {
    footer: undefined,
    form: undefined,
    header: undefined,
    info: undefined,
    languageSwitcher: undefined
  },
  argTypes: {
    footer: { control: false },
    form: { control: false },
    header: { control: false },
    info: { control: false },
    languageSwitcher: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LoginLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LoginLayout
      footer={<FooterInfo logo={<ShieldIcon />} organization="Ministry of Health, Sri Lanka" version="Version 1.0.0" />}
      form={<><IconField label="Staff ID" leadingIcon={<UserCircleIcon />} placeholder="Enter your staff ID" value="" /><PasswordField isVisible={false} label="Password" leadingIcon={<ShieldIcon />} placeholder="Enter your password" value="" /><Checkbox checked={false} onChange={() => undefined}>Remember me</Checkbox><Button fullWidth>Login</Button><InlineActionGroup actions={[<Button key="forgot" variant="text">Forgot Password</Button>, <Button key="contact" variant="text">Contact Administrator</Button>]} separator={<Divider />} /></>}
      header={<BrandHeader logo={<HeartPulseIcon />} subtitle="Clinic Management" title="Maternal Health" />}
      info={<InfoSection><Typography variant="body">Use this secure portal to manage clinic workflows, staff access, and maternal health records.</Typography></InfoSection>}
      languageSwitcher={<LanguageSwitcher aria-label="Select language" onChange={() => undefined} options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />}
    />
  )
};
