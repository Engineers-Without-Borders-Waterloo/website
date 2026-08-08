import { buttonVariants } from '@/components/ui/button';
import { Section } from '@/components/layout/Section';
import { SmartLink } from '@/components/ui/smart-link';
import { homePageData } from '@/data/home';

export function CTASection() {
  const { heading, body, buttonLabel, buttonHref } = homePageData.cta;

  return (
    <Section variant="accent">
      <div className="text-center space-y-6">
        <h2 className="text-heading-md lg:text-heading-lg text-center">{heading}</h2>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">{body}</p>
        <div>
          <SmartLink
            href={buttonHref}
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </Section>
  );
}
