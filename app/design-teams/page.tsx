import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { TeamSection } from '@/components/design-teams/TeamSection';
import { FadeInSection } from '@/components/animation/FadeInSection';
import { designTeamsPageData } from '@/data/design-teams';

export const metadata: Metadata = {
  title: 'Design Teams',
  description:
    'Meet our student design teams building hands-on engineering projects, from wind turbines and carbon capture to stormwater management.',
};

export default function DesignTeamsPage() {
  return (
    <>
      <FadeInSection>
        <Section>
          <h1 className="text-heading-md lg:text-heading-xl mb-4">{designTeamsPageData.heading}</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            {designTeamsPageData.introduction}
          </p>
        </Section>
      </FadeInSection>

      {designTeamsPageData.teams.map((team, index) => (
        <FadeInSection key={team.id} delay={index * 0.1}>
          <TeamSection team={team} index={index} />
        </FadeInSection>
      ))}
    </>
  );
}
