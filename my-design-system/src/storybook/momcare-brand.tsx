import { colorPrimitives, fontFamilyPrimitives } from "../tokens/primitives.js";

const brandGradientStart = colorPrimitives.roseDeep.value;
const brandGradientEnd = colorPrimitives.roseBlush.value;
const brandWordmark = "MomCare";
const brandTitle = "MomCare Design System";

function encodeSvg(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const momCareBrandImage = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="72" viewBox="0 0 240 72" fill="none">
  <defs>
    <linearGradient id="momcareGradient" x1="24" y1="8" x2="192" y2="72" gradientUnits="userSpaceOnUse">
      <stop stop-color="${brandGradientStart}"/>
      <stop offset="1" stop-color="${brandGradientEnd}"/>
    </linearGradient>
  </defs>
  <g fill="url(#momcareGradient)">
    <path d="M40.07 12.4c-8.82 0-15.97 7.1-15.97 15.87 0 18.63 16.53 26.16 24.62 31.78 8.09-5.62 24.62-13.15 24.62-31.78 0-8.77-7.15-15.87-15.97-15.87-5.44 0-8.79 2.25-12.65 6.9-3.86-4.65-7.21-6.9-12.65-6.9Z"/>
    <circle cx="48.7" cy="32" r="8.6" fill="white" fill-opacity="0.92"/>
    <circle cx="61.5" cy="23.5" r="3.1" fill="white" fill-opacity="0.92"/>
    <path d="M41 33.6c2.4-3.5 6.8-5.4 11.3-4.7 3.4.5 6.1 2.3 8.1 5.3" stroke="url(#momcareGradient)" stroke-width="2.4" stroke-linecap="round"/>
  </g>
  <text x="84" y="46" fill="url(#momcareGradient)" font-family="${fontFamilyPrimitives.display.value.replace(/"/g, "'")}" font-size="28" font-style="italic" font-weight="600">${brandWordmark}</text>
  <text x="85" y="61" fill="${colorPrimitives.neutral600.value}" font-family="${fontFamilyPrimitives.body.value.replace(/"/g, "'")}" font-size="9.5" letter-spacing="2">DESIGN SYSTEM</text>
</svg>
`);

export function MomCareBrandMark() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "inline-flex",
        gap: "1rem"
      }}
    >
      <img alt={brandTitle} src={momCareBrandImage} style={{ display: "block", height: "72px", width: "240px" }} />
    </div>
  );
}

export { brandTitle as momCareBrandTitle };
