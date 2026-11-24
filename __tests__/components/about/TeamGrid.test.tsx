import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TeamGrid } from '@/components/about/TeamGrid';
import { aboutPageData } from '@/data/about';

/** True if element `a` appears before element `b` in document order. */
function precedes(a: Element, b: Element): boolean {
  return Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
}

const { leadership, portfolioLeads, designTeamLeads } = aboutPageData.team;

describe('TeamGrid', () => {
  it('renders the Leadership Team heading', () => {
    render(<TeamGrid />);
    expect(screen.getByRole('heading', { name: 'Leadership Team' })).toBeInTheDocument();
  });

  it('renders a card for every leader and lead', () => {
    render(<TeamGrid />);
    for (const member of [...leadership, ...portfolioLeads, ...designTeamLeads]) {
      expect(screen.getByText(member.name)).toBeInTheDocument();
    }
  });

  it('renders leadership first, in the listed order', () => {
    render(<TeamGrid />);
    const names = leadership.map((m) => screen.getByText(m.name));
    for (let i = 1; i < names.length; i++) {
      expect(precedes(names[i - 1], names[i])).toBe(true);
    }
    const firstLead = screen.getByText(portfolioLeads[0].name);
    expect(precedes(names[names.length - 1], firstLead)).toBe(true);
  });

  it('sorts portfolio leads alphabetically by role', () => {
    render(<TeamGrid />);
    expect(precedes(screen.getByText('Advocacy Lead'), screen.getByText('Education Lead'))).toBe(
      true
    );
    expect(precedes(screen.getByText('Podcasts Lead'), screen.getByText('Website Lead'))).toBe(
      true
    );
  });

  it('shows every role for a member with more than one', () => {
    render(<TeamGrid />);
    expect(screen.getByText('Education Lead')).toBeInTheDocument();
    expect(screen.getByText('Campus Stormwater Living Lab Co-Lead')).toBeInTheDocument();
  });
});
