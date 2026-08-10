import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FadeInSection } from '@/components/animation/FadeInSection';
import { useReducedMotion, useInView } from 'framer-motion';

describe('FadeInSection', () => {
  beforeEach(() => {
    vi.mocked(useReducedMotion).mockReturnValue(false);
    vi.mocked(useInView).mockReturnValue(true);
  });

  it('renders children correctly', () => {
    render(
      <FadeInSection>
        <p>Animated content</p>
      </FadeInSection>
    );
    expect(screen.getByText('Animated content')).toBeInTheDocument();
  });

  it('renders a motion.div when reduced motion is not preferred', () => {
    const { container } = render(
      <FadeInSection>
        <p>Content</p>
      </FadeInSection>
    );
    expect(container.querySelector('[data-testid="motion-div"]')).toBeInTheDocument();
  });

  it('still renders children when not yet in view', () => {
    vi.mocked(useInView).mockReturnValue(false);
    render(
      <FadeInSection>
        <p>Scroll target</p>
      </FadeInSection>
    );
    expect(screen.getByText('Scroll target')).toBeInTheDocument();
  });

  it('renders a plain div (no motion) when reduced motion is preferred', () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = render(
      <FadeInSection>
        <p>Static content</p>
      </FadeInSection>
    );
    expect(container.querySelector('[data-testid="motion-div"]')).not.toBeInTheDocument();
    expect(screen.getByText('Static content')).toBeInTheDocument();
  });

  it('applies className to the wrapper (reduced-motion branch)', () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = render(
      <FadeInSection className="custom-animation">
        <p>Content</p>
      </FadeInSection>
    );
    expect(container.firstElementChild).toHaveClass('custom-animation');
  });

  it('accepts a custom direction without error', () => {
    render(
      <FadeInSection direction="left">
        <p>Directional</p>
      </FadeInSection>
    );
    expect(screen.getByText('Directional')).toBeInTheDocument();
  });
});
