import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { avatarShell, UserCircleIcon } from "../MotherProfile/icons.js";

export type AvatarProps = {
  children?: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

export function Avatar({ children, onClick }: AvatarProps) {
  const content = avatarShell(children ?? <UserCircleIcon />);

  if (!onClick) {
    return <>{content}</>;
  }

  const style: CSSProperties = {
    appearance: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0
  };

  return <button aria-label="Open avatar actions" onClick={onClick} style={style} type="button">{content}</button>;
}
