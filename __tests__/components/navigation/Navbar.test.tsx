import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '@/components/navigation/Navbar';
import { navLinks, ctaLink } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

describe('Navbar', () => {
  it('renders all navigation links from config', () => {
    render(<Navbar />);
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument();
    }
  });

  it('renders the CTA button link', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: ctaLink.label })).toBeInTheDocument();
  });

  it('renders the logo link to home', () => {
    render(<Navbar />);
    const logo = screen.getByRole('link', {
      name: (accessibleName) => accessibleName.includes(siteConfig.name),
    });
    expect(logo).toHaveAttribute('href', '/');
  });

  it('applies active styling to the current page link', () => {
    // Global next/navigation mock reports pathname '/', so Home is active.
    render(<Navbar />);
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    const activeHomeLink = homeLinks.find((link) => link.className.includes('font-bold'));
    expect(activeHomeLink).toBeDefined();
  });
});
