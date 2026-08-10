import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TeamSection } from '@/components/design-teams/TeamSection';
import type { Team } from '@/types';

const team: Team = {
  id: 'team-1',
  name: 'Test Team',
  description: 'What this team does.',
  imageAlt: 'Test team photo',
  imageSrc: '/images/design-teams/test.png',
};

describe('TeamSection', () => {
  it('renders the team name as a heading and its description', () => {
    render(<TeamSection team={team} index={0} />);
    expect(screen.getByRole('heading', { name: 'Test Team' })).toBeInTheDocument();
    expect(screen.getByText('What this team does.')).toBeInTheDocument();
  });

  it('renders the team image via its alt text', () => {
    render(<TeamSection team={team} index={0} />);
    expect(screen.getByRole('img', { name: 'Test team photo' })).toBeInTheDocument();
  });

  it('uses the white background for even rows', () => {
    const { container } = render(<TeamSection team={team} index={0} />);
    expect(container.firstElementChild).toHaveClass('bg-white');
  });

  it('uses the accent background and reversed layout for odd rows', () => {
    const { container } = render(<TeamSection team={team} index={1} />);
    expect(container.firstElementChild).toHaveClass('bg-brand-accent/30');
    // The reversed layout applies grid-flow-dense on the inner grid.
    expect(container.querySelector('.lg\\:grid-flow-dense')).toBeInTheDocument();
  });
});
