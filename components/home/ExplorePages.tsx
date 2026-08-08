import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { homePageData } from '@/data/home';
import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ExplorePages() {
  const { explorePages } = homePageData;

  return (
    <Section>
      <h2 className="text-heading-md lg:text-heading-lg mb-8">Explore Our Work</h2>
      <Grid cols={{ mobile: 1, tablet: 3, desktop: 3 }}>
        {explorePages.map((page) => (
          <Link key={page.id} href={page.href} className="group block">
            <Card className="h-full transition-shadow duration-150 group-hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-heading-sm">{page.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                  {page.linkLabel}
                  <ArrowRight className="size-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
