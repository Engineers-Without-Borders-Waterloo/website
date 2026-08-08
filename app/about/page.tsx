import type { Metadata } from 'next';
import { FadeInSection } from '@/components/animation/FadeInSection';
import { AboutMission } from '@/components/about/AboutMission';
import { TeamGrid } from '@/components/about/TeamGrid';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the University of Waterloo chapter of Engineers Without Borders Canada — our mission, history, and the executive team leading our work.',
};

export default function AboutPage() {
  return (
    <>
      <FadeInSection>
        <AboutMission />
      </FadeInSection>
      <FadeInSection>
        <TeamGrid />
      </FadeInSection>
    </>
  );
}
