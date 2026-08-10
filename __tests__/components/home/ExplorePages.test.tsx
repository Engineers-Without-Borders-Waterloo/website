import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExplorePages } from '@/components/home/ExplorePages';
import { homePageData } from '@/data/home';

describe('ExplorePages', () => {
  it('renders the section heading', () => {
    render(<ExplorePages />);
    expect(screen.getByRole('heading', { name: 'Explore Our Work' })).toBeInTheDocument();
  });

  it('renders a card with a link for every explore page', () => {
    render(<ExplorePages />);
    for (const page of homePageData.explorePages) {
      expect(screen.getByText(page.title)).toBeInTheDocument();
      expect(screen.getByText(page.description)).toBeInTheDocument();
      const link = screen.getByRole('link', { name: new RegExp(page.title) });
      expect(link).toHaveAttribute('href', page.href);
    }
  });
});
