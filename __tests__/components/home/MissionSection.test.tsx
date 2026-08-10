import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MissionSection } from '@/components/home/MissionSection';
import { homePageData } from '@/data/home';

describe('home/MissionSection', () => {
  it('renders the mission heading and body', () => {
    render(<MissionSection />);
    expect(
      screen.getByRole('heading', { name: homePageData.mission.heading })
    ).toBeInTheDocument();
    expect(screen.getByText(homePageData.mission.body)).toBeInTheDocument();
  });

  it('renders the mission image via its alt text', () => {
    render(<MissionSection />);
    expect(screen.getByRole('img', { name: homePageData.mission.imageAlt })).toBeInTheDocument();
  });
});
