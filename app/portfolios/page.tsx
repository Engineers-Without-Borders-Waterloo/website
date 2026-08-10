import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { ProjectCard } from '@/components/portfolios/ProjectCard';
import { StaggerChildren } from '@/components/animation/StaggerChildren';
import { FadeInSection } from '@/components/animation/FadeInSection';
import { portfoliosPageData } from '@/data/portfolios';

export const metadata: Metadata = {
  title: 'Portfolios',
  description:
    'Explore the podcast, education, advocacy, fundraising, and other portfolios our chapter members lead throughout the year.',
};

export default function PortfoliosPage() {
  return (
    <Section>
      <FadeInSection>
        <h1 className="text-heading-md lg:text-heading-xl mb-4">{portfoliosPageData.heading}</h1>
        <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl">
          {portfoliosPageData.description}
        </p>
      </FadeInSection>

      <Grid>
        <StaggerChildren>
          {portfoliosPageData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerChildren>
      </Grid>
    </Section>
  );
}
