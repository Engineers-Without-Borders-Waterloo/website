import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/navigation/Footer';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

describe('Footer', () => {
  it('renders all navigation links', () => {
    render(<Footer />);
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument();
    }
  });

  it('renders each social link as an external link with its aria-label', () => {
    render(<Footer />);
    for (const social of siteConfig.socials) {
      const link = screen.getByRole('link', { name: social.label });
      expect(link).toHaveAttribute('href', social.url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('renders the current year in the copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders the full site name', () => {
    render(<Footer />);
    expect(screen.getAllByText(new RegExp(siteConfig.name)).length).toBeGreaterThan(0);
  });
});
