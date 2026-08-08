import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemberCard } from '@/components/about/MemberCard';
import type { TeamMember } from '@/types';

const baseMember: TeamMember = {
  id: 'exec-1',
  name: 'Jane Doe',
  roles: ['President'],
  photoAlt: 'Jane Doe portrait',
  photoSrc: '/images/about/team/president.png',
};

describe('MemberCard', () => {
  it('renders the member name and photo', () => {
    render(<MemberCard member={baseMember} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Jane Doe portrait' })).toBeInTheDocument();
  });

  it('renders one badge per role', () => {
    render(<MemberCard member={{ ...baseMember, roles: ['Advocacy Lead', 'Fundraising Lead'] }} />);
    expect(screen.getByText('Advocacy Lead')).toBeInTheDocument();
    expect(screen.getByText('Fundraising Lead')).toBeInTheDocument();
  });

  it('wraps the card in an external LinkedIn link when linkedinUrl is set', () => {
    render(
      <MemberCard member={{ ...baseMember, linkedinUrl: 'https://linkedin.com/in/jane' }} />
    );
    const link = screen.getByRole('link', { name: "Jane Doe's LinkedIn profile" });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/jane');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders without a link when linkedinUrl is absent', () => {
    render(<MemberCard member={baseMember} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
