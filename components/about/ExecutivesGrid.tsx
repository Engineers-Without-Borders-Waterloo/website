import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { StaggerChildren } from '@/components/animation/StaggerChildren';
import { MemberCard } from '@/components/about/MemberCard';
import { aboutPageData } from '@/data/about';
import { sortByKey } from '@/lib/utils';

export function ExecutivesGrid() {
  const { executives } = aboutPageData.team;

  if (executives.length === 0) {
    return null;
  }

  // Sorted by (first) role so each portfolio's executives sit together.
  const sorted = sortByKey(executives, (member) => member.roles[0]);

  return (
    <Section>
      <h2 className="text-heading-md lg:text-heading-lg mb-8">Executives</h2>
      <Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }}>
        <StaggerChildren>
          {sorted.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </StaggerChildren>
      </Grid>
    </Section>
  );
}
