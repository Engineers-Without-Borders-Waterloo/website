import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'UW Engineers Without Borders',
  shortName: 'Engineers Without Borders',
  description:
    'The University of Waterloo chapter of Engineers Without Borders Canada, engineering an equitable and sustainable future through systems change leadership, campus advocacy, and international fellowships.',
  // Every "Get Involved" / "Join Us" CTA points here. External links open in a new tab.
  getInvolvedUrl: 'https://discord.gg/Cdws4qAngN',
  socials: [
    {
      id: 'instagram',
      platform: 'Instagram',
      url: 'https://www.instagram.com/uwewb/',
      label: 'Follow the UWaterloo chapter on Instagram',
    },
    {
      id: 'facebook',
      platform: 'Facebook',
      url: 'https://www.facebook.com/ewbuw/',
      label: 'Follow the UWaterloo chapter on Facebook',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/engineers-without-borders-canada/',
      label: 'Connect with Engineers Without Borders Canada on LinkedIn',
    },
  ],
};
