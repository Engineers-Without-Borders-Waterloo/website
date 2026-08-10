import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AboutMission } from '@/components/about/AboutMission';
import { aboutPageData } from '@/data/about';
import { useReducedMotion } from 'framer-motion';

describe('AboutMission', () => {
  beforeEach(() => {
    vi.mocked(useReducedMotion).mockReturnValue(false);
  });

  it('renders the mission heading', () => {
    render(<AboutMission />);
    expect(
      screen.getByRole('heading', { level: 1, name: aboutPageData.mission.heading })
    ).toBeInTheDocument();
  });

  it('renders every mission paragraph', () => {
    render(<AboutMission />);
    for (const paragraph of aboutPageData.mission.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
  });

  it('renders the decorative carousel without animation when reduced motion is preferred', () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = render(<AboutMission />);
    // No animated track class when reduced motion is on.
    expect(container.querySelector('.animate-\\[gallery-scroll_30s_linear_infinite\\]')).toBeNull();
  });

  it('animates the carousel when motion is allowed', () => {
    vi.mocked(useReducedMotion).mockReturnValue(false);
    const { container } = render(<AboutMission />);
    expect(
      container.querySelector('.animate-\\[gallery-scroll_30s_linear_infinite\\]')
    ).toBeInTheDocument();
  });
});
