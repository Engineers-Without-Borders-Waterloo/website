import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { StaggerChildren } from '@/components/animation/StaggerChildren';
import { MemberCard } from '@/components/about/MemberCard';
import { aboutPageData } from '@/data/about';

export function MembersGrid() {
  const { members } = aboutPageData.team;

  if (members.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="text-heading-md lg:text-heading-lg mb-8">Members</h2>
      <Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }}>
        <StaggerChildren>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </StaggerChildren>
      </Grid>
    </Section>
  );
}
