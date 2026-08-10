import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { SmartLink } from '@/components/ui/smart-link';
import type { TeamMember } from '@/types';

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  const card = (
    <Card className="h-full overflow-hidden pt-0 transition-shadow duration-150 hover:shadow-md">
      <PlaceholderImage src={member.photoSrc} alt={member.photoAlt} className="aspect-square" />
      <CardContent className="text-center pt-4">
        <p className="font-semibold text-body-lg">{member.name}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          {member.roles.map((role) => (
            <Badge key={role} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (!member.linkedinUrl) {
    return card;
  }

  return (
    <SmartLink
      href={member.linkedinUrl}
      aria-label={`${member.name}'s LinkedIn profile`}
      className="block h-full"
    >
      {card}
    </SmartLink>
  );
}
