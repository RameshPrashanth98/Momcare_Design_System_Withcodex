import type { CSSProperties, ReactNode } from "react";

export type IconProps = {
  children: ReactNode;
  className?: string;
};

export function Icon({ children, className }: IconProps) {
  const style: CSSProperties = {
    alignItems: "center",
    color: "currentColor",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1"
  };

  return <span aria-hidden="true" className={className} style={style}>{children}</span>;
}
