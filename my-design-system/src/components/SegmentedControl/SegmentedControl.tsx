import { SegmentedButton, type SegmentedButtonOption, type SegmentedButtonProps } from "../SegmentedButton/SegmentedButton.js";

export type SegmentedControlOption = SegmentedButtonOption;
export type SegmentedControlProps = Omit<SegmentedButtonProps, "aria-label"> & {
  ariaLabel?: string;
};

export function SegmentedControl({ ariaLabel, ...props }: SegmentedControlProps) {
  return <SegmentedButton aria-label={ariaLabel} {...props} />;
}
