import { HeroSection } from '@/components/home/HeroSection';
import { ExplorePages } from '@/components/home/ExplorePages';
import { MissionSection } from '@/components/home/MissionSection';
import { CTASection } from '@/components/home/CTASection';
import { FadeInSection } from '@/components/animation/FadeInSection';

export default function Home() {
  // Home intentionally uses the default title (siteConfig.name) and the
  // shared description from the root layout, so it needs no page-level
  // metadata export of its own.
  return (
    <>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <ExplorePages />
      </FadeInSection>
      <FadeInSection>
        <MissionSection />
      </FadeInSection>
      <FadeInSection>
        <CTASection />
      </FadeInSection>
    </>
  );
}
