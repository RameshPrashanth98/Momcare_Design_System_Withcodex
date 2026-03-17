import { Button } from "../../components/Button/Button.js";
import { PageIndicator } from "../../components/PageIndicator/PageIndicator.js";
import { HeartPulseIcon, ShieldIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { BrandMark, Icon, IllustrationPanel, OnboardingContent, OnboardingHeader, OnboardingWelcomeLayout } from "../../components/OnboardingWelcome/index.js";

function WelcomeIllustration() {
  return (
    <div
      style={{
        display: "grid",
        gap: spacingPrimitives.space4.value,
        width: "100%"
      }}
    >
      <div
        style={{
          display: "grid",
          gap: spacingPrimitives.space3.value,
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
        }}
      >
        {[<UserCircleIcon key="user" />, <HeartPulseIcon key="heart" />, <ShieldIcon key="shield" />].map((node, index) => (
          <div
            key={index}
            style={{
              alignItems: "center",
              backgroundColor: semanticTokens.surface.base.value,
              borderColor: semanticTokens.border.default.value,
              borderRadius: radiusPrimitives.radiusLg.value,
              borderStyle: "solid",
              borderWidth: borderWidthPrimitives.border1.value,
              color: semanticTokens.interactive.primaryHover.value,
              display: "inline-flex",
              justifyContent: "center",
              minHeight: spacingPrimitives.space16.value,
              width: "100%"
            }}
          >
            <Icon>{node}</Icon>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OnboardingWelcomeScreen() {
  return (
    <OnboardingWelcomeLayout
      action={<Button fullWidth variant="filled">Get Started</Button>}
      brand={<BrandMark ariaLabel="Mom Care brand mark" icon={<Icon><HeartPulseIcon /></Icon>} />}
      content={
        <OnboardingContent
          align="center"
          description="Manage clinic sessions, support mothers through every visit, and help care teams stay aligned with one clear mobile workflow."
          heading="Welcome to the"
          title="Maternal Health Clinic System"
        />
      }
      header={<OnboardingHeader align="center" subtitle="Clinic Management" title="Maternal Health" />}
      illustration={<IllustrationPanel alt="Maternal health clinic onboarding illustration" aspectRatio="4 / 3" image={<WelcomeIllustration />} />}
      progress={<PageIndicator aria-label="Onboarding progress" current={0} total={4} />}
    />
  );
}
