import type { CSSProperties } from "react";

import { Typography } from "../Typography/Typography.js";
import { borderWidthPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { surfaceCardStyle } from "../MotherProfile/icons.js";

type ChartDatum = Record<string, number | string>;

export type WeightChartCardProps = {
  ariaLabel: string;
  data: ChartDatum[];
  lastRecordedDate: string;
  latestWeight: string;
  title: string;
  xKey: string;
  yKey: string;
};

function toNumber(value: number | string | undefined) {
  return typeof value === "number" ? value : Number(value ?? 0);
}

function buildPolylinePoints(data: ChartDatum[], xKey: string, yKey: string) {
  const safeData = data.length > 0 ? data : [{ [xKey]: "", [yKey]: 0 }];
  const values = safeData.map((item) => toNumber(item[yKey]));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return safeData.map((item, index) => {
    const x = safeData.length === 1 ? 50 : (index / (safeData.length - 1)) * 100;
    const y = 100 - (((toNumber(item[yKey]) - min) / range) * 60 + 20);
    return { label: String(item[xKey] ?? ""), value: String(item[yKey] ?? ""), x, y };
  });
}

export function WeightChartCard({ ariaLabel, data, lastRecordedDate, latestWeight, title, xKey, yKey }: WeightChartCardProps) {
  const points = buildPolylinePoints(data, xKey, yKey);
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");

  const cardStyle: CSSProperties = {
    ...surfaceCardStyle(),
    display: "grid",
    gap: spacingPrimitives.space4.value,
    padding: spacingPrimitives.space4.value
  };

  const chartStyle: CSSProperties = {
    backgroundColor: semanticTokens.surface.muted.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: surfaceCardStyle().borderRadius,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    padding: spacingPrimitives.space4.value
  };

  return (
    <article aria-label={ariaLabel} style={cardStyle}>
      <div style={{ display: "grid", gap: spacingPrimitives.space1.value }}>
        <Typography as="h3" variant="title">{title}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Latest weight {latestWeight}</Typography>
        <Typography color={semanticTokens.text.secondary.value} variant="body">Last recorded {lastRecordedDate}</Typography>
      </div>
      <div style={chartStyle}>
        <svg aria-hidden="true" preserveAspectRatio="none" style={{ display: "block", height: spacingPrimitives.space32.value, width: "100%" }} viewBox="0 0 100 100">
          <line stroke={semanticTokens.border.default.value} strokeWidth={borderWidthPrimitives.border1.value} x1="0" x2="100" y1="80" y2="80" />
          <polyline fill="none" points={polyline} stroke={semanticTokens.interactive.primaryHover.value} strokeLinecap="round" strokeLinejoin="round" strokeWidth={borderWidthPrimitives.border2.value} />
          {points.map((point) => (
            <circle cx={point.x} cy={point.y} fill={semanticTokens.interactive.primary.value} key={`${point.label}-${point.value}`} r="2.5" stroke={semanticTokens.surface.base.value} strokeWidth={borderWidthPrimitives.border2.value} />
          ))}
        </svg>
        <div style={{ display: "grid", gap: spacingPrimitives.space2.value, gridTemplateColumns: `repeat(${points.length || 1}, minmax(0, 1fr))` }}>
          {points.map((point) => (
            <div key={`${point.label}-axis`} style={{ display: "grid", gap: spacingPrimitives.space1.value, textAlign: "center" }}>
              <Typography color={semanticTokens.text.secondary.value} variant="caption">{point.label}</Typography>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
