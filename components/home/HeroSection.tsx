import { Section } from '@/components/layout/Section';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { homePageData } from '@/data/home';

export function HeroSection() {
  const { heading, tagline, imageAlt, imageSrc } = homePageData.hero;

  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-heading-md lg:text-heading-xl">{heading}</h1>
          <p className="text-body-lg text-muted-foreground">{tagline}</p>
        </div>

        <PlaceholderImage src={imageSrc} alt={imageAlt} className="aspect-video rounded-lg" />
      </div>
    </Section>
  );
}
