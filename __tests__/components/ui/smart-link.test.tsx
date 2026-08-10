import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SmartLink } from '@/components/ui/smart-link';

describe('SmartLink', () => {
  it('opens external URLs in a new tab with a safe rel', () => {
    render(<SmartLink href="https://discord.gg/abc">Join</SmartLink>);
    const link = screen.getByRole('link', { name: 'Join' });
    expect(link).toHaveAttribute('href', 'https://discord.gg/abc');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders internal routes without a new-tab target', () => {
    render(<SmartLink href="/about">About</SmartLink>);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveAttribute('href', '/about');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('forwards additional props such as className and aria-label', () => {
    render(
      <SmartLink href="/about" className="custom" aria-label="About page">
        About
      </SmartLink>
    );
    const link = screen.getByRole('link', { name: 'About page' });
    expect(link).toHaveClass('custom');
  });
});
