import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from '@/components/layout/Section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(<Section>Hello World</Section>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies default variant classes (bg-white)', () => {
    const { container } = render(<Section>Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white');
    expect(section).toHaveClass('text-foreground');
  });

  it('applies dark variant classes', () => {
    const { container } = render(<Section variant="dark">Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-brand-dark');
    expect(section).toHaveClass('text-white');
  });

  it('applies accent variant classes', () => {
    const { container } = render(<Section variant="accent">Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-brand-accent');
    expect(section).toHaveClass('text-foreground');
  });

  it('applies spacing classes for sm', () => {
    const { container } = render(<Section spacing="sm">Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-section-sm');
  });

  it('applies spacing classes for lg', () => {
    const { container } = render(<Section spacing="lg">Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-section-md');
    expect(section).toHaveClass('lg:py-section-lg');
  });

  it('renders with custom id', () => {
    const { container } = render(<Section id="test-section">Content</Section>);
    const section = container.querySelector('#test-section');
    expect(section).toBeInTheDocument();
  });

  it('applies additional className', () => {
    const { container } = render(<Section className="custom-class">Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
