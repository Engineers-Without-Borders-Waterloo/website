import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StaggerChildren } from '@/components/animation/StaggerChildren';
import { useReducedMotion, useInView } from 'framer-motion';

describe('StaggerChildren', () => {
  beforeEach(() => {
    vi.mocked(useReducedMotion).mockReturnValue(false);
    vi.mocked(useInView).mockReturnValue(true);
  });

  it('renders each child wrapped in a motion item', () => {
    const { container } = render(
      <StaggerChildren>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </StaggerChildren>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-testid="motion-div"]')).toHaveLength(3);
  });

  it('renders children directly without motion wrappers when reduced motion is preferred', () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = render(
      <StaggerChildren>
        <div>Static one</div>
        <div>Static two</div>
      </StaggerChildren>
    );
    expect(screen.getByText('Static one')).toBeInTheDocument();
    expect(screen.getByText('Static two')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="motion-div"]')).not.toBeInTheDocument();
  });

  it('still renders items that are not yet in view', () => {
    vi.mocked(useInView).mockReturnValue(false);
    render(
      <StaggerChildren>
        <div>Deferred</div>
      </StaggerChildren>
    );
    expect(screen.getByText('Deferred')).toBeInTheDocument();
  });

  it('handles an empty child set without crashing', () => {
    const { container } = render(<StaggerChildren>{null}</StaggerChildren>);
    expect(container.querySelector('[data-testid="motion-div"]')).not.toBeInTheDocument();
  });
});
