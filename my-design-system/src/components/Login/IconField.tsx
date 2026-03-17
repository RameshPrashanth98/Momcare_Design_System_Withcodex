import type { ComponentProps } from "react";

import { TextField } from "../TextField/TextField.js";

export type IconFieldProps = ComponentProps<typeof TextField>;

export function IconField(props: IconFieldProps) {
  return <TextField {...props} />;
}
