import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TeamGrid } from '@/components/about/TeamGrid';

/** True if element `a` appears before element `b` in document order. */
function precedes(a: Element, b: Element): boolean {
  return Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
}

describe('TeamGrid', () => {
  it('renders the Executive Team heading', () => {
    render(<TeamGrid />);
    expect(screen.getByRole('heading', { name: 'Executive Team' })).toBeInTheDocument();
  });

  it('renders the president first', () => {
    render(<TeamGrid />);
    expect(precedes(screen.getByText('President'), screen.getByText('Advocacy Lead'))).toBe(true);
  });

  it('orders portfolio leads before design team leads', () => {
    render(<TeamGrid />);
    // Web Development is the last portfolio lead; Campus SWM is the first design team lead.
    expect(
      precedes(screen.getByText('Web Development Lead'), screen.getByText('Campus SWM Lead'))
    ).toBe(true);
  });

  it('sorts alphabetically within the portfolio group', () => {
    render(<TeamGrid />);
    expect(precedes(screen.getByText('Advocacy Lead'), screen.getByText('Education Lead'))).toBe(
      true
    );
  });

  it('sorts alphabetically within the design team group', () => {
    render(<TeamGrid />);
    expect(precedes(screen.getByText('Campus SWM Lead'), screen.getByText('WATurbine Lead'))).toBe(
      true
    );
  });
});
