import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from '@/components/portfolios/ProjectCard';
import type { Project } from '@/types';

const baseProject: Project = {
  id: 'proj-1',
  title: 'Test Project',
  description: 'A short description.',
  imageAlt: 'Test project image',
  imageSrc: '/images/portfolios/test.png',
};

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders a short description in full', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('A short description.')).toBeInTheDocument();
  });

  it('truncates a long description to 120 chars with an ellipsis', () => {
    const longText = 'x'.repeat(200);
    render(<ProjectCard project={{ ...baseProject, description: longText }} />);
    const expected = `${'x'.repeat(120)}\u2026`;
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('renders the project image via its alt text', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByRole('img', { name: 'Test project image' })).toBeInTheDocument();
  });
});
