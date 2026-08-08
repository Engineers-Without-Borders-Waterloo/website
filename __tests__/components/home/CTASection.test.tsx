import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CTASection } from '@/components/home/CTASection';
import { homePageData } from '@/data/home';

describe('CTASection', () => {
  it('renders the CTA heading and body', () => {
    render(<CTASection />);
    expect(screen.getByRole('heading', { name: homePageData.cta.heading })).toBeInTheDocument();
    expect(screen.getByText(homePageData.cta.body)).toBeInTheDocument();
  });

  it('renders the CTA button linking to the configured destination', () => {
    render(<CTASection />);
    const link = screen.getByRole('link', { name: homePageData.cta.buttonLabel });
    expect(link).toHaveAttribute('href', homePageData.cta.buttonHref);
  });
});
