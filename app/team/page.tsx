import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { FadeInSection } from '@/components/animation/FadeInSection';
import { TeamGrid } from '@/components/about/TeamGrid';
import { MembersGrid } from '@/components/about/MembersGrid';

export const metadata: Metadata = {
  title: 'Meet Our Team',
  description:
    'Meet the students behind the University of Waterloo chapter of Engineers Without Borders Canada — our executive team, portfolio leads, design team leads, and members.',
};

export default function TeamPage() {
  return (
    <>
      <FadeInSection>
        <Section spacing="sm">
          <h1 className="text-heading-md lg:text-heading-xl mb-4">Meet Our Team</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            The students who lead our portfolios and design teams and keep the chapter running.
          </p>
        </Section>
      </FadeInSection>

      <TeamGrid />
      <MembersGrid />
    </>
  );
}
