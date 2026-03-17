import { useState } from "react";

import { Button } from "../../components/Button/Button.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { Typography } from "../../components/Typography/Typography.js";
import { HeartPulseIcon, ShieldIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { BrandHeader, FooterInfo, IconField, InfoSection, InlineActionGroup, LoginLayout, PasswordField } from "../../components/Login/index.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

export function LoginScreen() {
  const [language, setLanguage] = useState("en");
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <LoginLayout
      footer={<FooterInfo logo={<ShieldIcon />} organization="Ministry of Health, Sri Lanka" version="Version 1.0.0" />}
      form={<><IconField label="Staff ID" leadingIcon={<UserCircleIcon />} onChange={(event) => setStaffId(event.target.value)} placeholder="Enter your staff ID" value={staffId} /><PasswordField isVisible={isPasswordVisible} label="Password" leadingIcon={<ShieldIcon />} onChange={(event) => setPassword(event.target.value)} onToggleVisibility={() => setIsPasswordVisible((current) => !current)} placeholder="Enter your password" value={password} /><Checkbox checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)}>Remember me</Checkbox><Button fullWidth>Login</Button><InlineActionGroup actions={[<Button key="forgot" variant="text">Forgot Password</Button>, <Button key="contact" variant="text">Contact Administrator</Button>]} align="center" separator={<Typography variant="caption">/</Typography>} /></>}
      header={<BrandHeader logo={<HeartPulseIcon />} subtitle="Clinic Management" title="Maternal Health" />}
      info={<InfoSection><Typography variant="body">Use this secure portal to manage clinic workflows, staff access, and maternal health records across the maternal health program.</Typography></InfoSection>}
      languageSwitcher={<LanguageSwitcher aria-label="Select language" onChange={setLanguage} options={languageOptions} value={language} />}
    />
  );
}
