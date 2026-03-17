import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { Avatar } from "../Avatar/Avatar.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

export type ProfileSummaryCardProps = {
  area: string;
  avatar?: ReactNode;
  clinic: string;
  name: string;
  onAvatarClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  role: string;
};

export function ProfileSummaryCard({ area, avatar, clinic, name, onAvatarClick, role }: ProfileSummaryCardProps) {
  const style: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article style={style}>
      <div style={{ alignItems: "center", display: "flex", gap: spacingPrimitives.space3.value }}>
        <Avatar onClick={onAvatarClick}>{avatar}</Avatar>
        <div style={{ display: "grid", gap: spacingPrimitives.space1.value, minWidth: 0 }}>
          <Typography as="h2" variant="headline">{name}</Typography>
          <Typography color={semanticTokens.text.secondary.value} variant="body">{role}</Typography>
        </div>
      </div>
      <div style={{ display: "grid", gap: spacingPrimitives.space2.value }}>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Clinic: {clinic}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">PHM Area: {area}</Typography>
      </div>
    </article>
  );
}
