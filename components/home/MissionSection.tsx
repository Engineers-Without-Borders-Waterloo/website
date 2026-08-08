import { Section } from '@/components/layout/Section';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { homePageData } from '@/data/home';

export function MissionSection() {
  const { heading, body, imageAlt, imageSrc } = homePageData.mission;

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-heading-md lg:text-heading-lg">{heading}</h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{body}</p>
        </div>

        <PlaceholderImage src={imageSrc} alt={imageAlt} className="aspect-video rounded-lg" />
      </div>
    </Section>
  );
}
