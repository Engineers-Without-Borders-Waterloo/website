import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// --- jsdom polyfills ---------------------------------------------------------
// jsdom doesn't implement these browser APIs that some components rely on.

if (!('IntersectionObserver' in globalThis)) {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  // @ts-expect-error - assigning a minimal mock to the global
  globalThis.IntersectionObserver = MockIntersectionObserver;
}

if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}

// --- Global module mocks -----------------------------------------------------
// Applied to every test file. Next.js's Link/Image/navigation and Framer
// Motion require a browser/router runtime that jsdom doesn't provide, so we
// replace them with lightweight stand-ins. Individual tests can override the
// framer-motion hooks (e.g. useReducedMotion) via vi.mocked(...).

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => React.createElement('a', { href, ...props }, children),
}));

vi.mock('next/image', () => ({
  // Only forward valid <img> attributes; drop Next-specific props (fill,
  // priority, sizes, etc.) that aren't valid DOM attributes.
  default: ({ src, alt, className }: { src: string; alt: string; className?: string }) =>
    React.createElement('img', { src, alt, className }),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children?: React.ReactNode;
      className?: string;
      [key: string]: unknown;
    }) => React.createElement('div', { className, 'data-testid': 'motion-div' }, children),
  },
  useReducedMotion: vi.fn(() => false),
  useInView: vi.fn(() => true),
}));
