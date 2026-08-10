import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden pt-0 transition-transform duration-150 hover:scale-[1.02]">
      <PlaceholderImage src={project.imageSrc} alt={project.imageAlt} className="aspect-video" />
      <CardHeader>
        <CardTitle className="text-heading-sm">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-muted-foreground">
          {project.description.length > 120
            ? `${project.description.slice(0, 120)}…`
            : project.description}
        </p>
      </CardContent>
    </Card>
  );
}
