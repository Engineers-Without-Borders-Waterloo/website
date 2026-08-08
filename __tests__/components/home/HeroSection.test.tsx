import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from '@/components/home/HeroSection';
import { homePageData } from '@/data/home';

describe('HeroSection', () => {
  it('renders the hero heading and tagline', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('heading', { level: 1, name: homePageData.hero.heading })
    ).toBeInTheDocument();
    expect(screen.getByText(homePageData.hero.tagline)).toBeInTheDocument();
  });

  it('renders the hero image via its alt text', () => {
    render(<HeroSection />);
    expect(screen.getByRole('img', { name: homePageData.hero.imageAlt })).toBeInTheDocument();
  });
});
