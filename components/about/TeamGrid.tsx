import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { StaggerChildren } from '@/components/animation/StaggerChildren';
import { MemberCard } from '@/components/about/MemberCard';
import { aboutPageData } from '@/data/about';
import { sortByKey } from '@/lib/utils';

export function TeamGrid() {
  const { president, portfolioLeads, designTeamLeads } = aboutPageData.team;

  // Portfolio leads and design team leads are each sorted alphabetically by
  // their (first) role, with duplicate roles (e.g. two co-leads) grouped
  // together automatically — no manual ordering needed in the source data.
  // A member holding multiple roles still renders as a single card, sorted
  // by their first-listed role.
  const team = [
    president,
    ...sortByKey(portfolioLeads, (member) => member.roles[0]),
    ...sortByKey(designTeamLeads, (member) => member.roles[0]),
  ];

  return (
    <Section>
      <h2 className="text-heading-md lg:text-heading-lg mb-8">Executive Team</h2>
      <Grid>
        <StaggerChildren>
          {team.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </StaggerChildren>
      </Grid>
    </Section>
  );
}
