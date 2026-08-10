import type { NavLink } from '@/types';
import { siteConfig } from '@/data/site-config';

export const navLinks: NavLink[] = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'portfolios', path: '/portfolios', label: 'Portfolios' },
  { id: 'design-teams', path: '/design-teams', label: 'Design Teams' },
  { id: 'about', path: '/about', label: 'About Us' },
];

export const ctaLink = {
  label: 'Get Involved',
  path: siteConfig.getInvolvedUrl,
} as const;
