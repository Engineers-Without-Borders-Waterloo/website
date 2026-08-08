import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

// Mock the Sheet primitive with a lightweight stand-in that wires the
// trigger's click to onOpenChange and always renders its content, so we can
// deterministically test open/close behavior and the links inside.
vi.mock('@/components/ui/sheet', () => ({
  Sheet: ({
    children,
    open,
    onOpenChange,
  }: {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }) =>
    React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
            open,
            onOpenChange,
          })
        : child
    ),
  SheetTrigger: ({
    children,
    open,
    onOpenChange,
    ...props
  }: {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    [key: string]: unknown;
  }) => (
    <button {...props} onClick={() => onOpenChange?.(!open)}>
      {children}
    </button>
  ),
  SheetContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTitle: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
}));

import { MobileMenu } from '@/components/navigation/MobileMenu';
import { navLinks, ctaLink } from '@/data/navigation';

describe('MobileMenu', () => {
  it('renders the trigger with aria-expanded=false initially', () => {
    render(<MobileMenu />);
    const trigger = screen.getByLabelText('Open navigation menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles aria-expanded to true when the trigger is clicked', () => {
    render(<MobileMenu />);
    const trigger = screen.getByLabelText('Open navigation menu');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders all nav links and the CTA', () => {
    render(<MobileMenu />);
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: ctaLink.label })).toBeInTheDocument();
  });

  it('closes the menu when a nav link is clicked', () => {
    render(<MobileMenu />);
    const trigger = screen.getByLabelText('Open navigation menu');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(screen.getByRole('link', { name: navLinks[0].label }));
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu when the CTA link is clicked', () => {
    render(<MobileMenu />);
    const trigger = screen.getByLabelText('Open navigation menu');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(screen.getByRole('link', { name: ctaLink.label }));
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
