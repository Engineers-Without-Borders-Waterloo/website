import { cn } from '@/lib/utils';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import type { Team } from '@/types';

interface TeamSectionProps {
  team: Team;
  index: number;
}

export function TeamSection({ team, index }: TeamSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn('py-section-sm lg:py-section-lg', isEven ? 'bg-white' : 'bg-brand-accent/30')}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
            !isEven && 'lg:grid-flow-dense'
          )}
        >
          {/* Team info */}
          <div className={cn(!isEven && 'lg:col-start-2')}>
            <h2 className="text-heading-md mb-4">{team.name}</h2>
            <p className="text-body-lg text-muted-foreground mb-6">{team.description}</p>
          </div>

          {/* Team photo */}
          <PlaceholderImage
            src={team.imageSrc}
            alt={team.imageAlt}
            className="aspect-[4/3] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
