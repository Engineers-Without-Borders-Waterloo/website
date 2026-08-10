import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PlaceholderImage } from '@/components/ui/placeholder-image';

describe('PlaceholderImage', () => {
  it('renders a placeholder box with alt text when no src is provided', () => {
    render(<PlaceholderImage alt="Team photo placeholder" />);
    expect(screen.getByRole('img', { name: 'Team photo placeholder' })).toBeInTheDocument();
    expect(screen.getByText('Team photo placeholder')).toBeInTheDocument();
  });

  it('renders a real image when src is provided', () => {
    render(<PlaceholderImage src="/images/about/team/president.jpg" alt="President" />);
    const img = screen.getByRole('img', { name: 'President' });
    expect(img).toHaveAttribute('src', '/images/about/team/president.jpg');
  });

  it('applies the provided className in placeholder mode', () => {
    const { container } = render(<PlaceholderImage alt="Placeholder" className="aspect-square" />);
    expect(container.firstElementChild).toHaveClass('aspect-square');
  });

  it('applies the provided className in image mode', () => {
    const { container } = render(
      <PlaceholderImage src="/x.jpg" alt="X" className="aspect-video" />
    );
    expect(container.firstElementChild).toHaveClass('aspect-video');
  });
});
