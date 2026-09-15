import type { HomePageData } from '@/types';

import { siteConfig } from '@/data/site-config';

export const homePageData: HomePageData = {
  hero: {
    heading: 'Building Leaders. Rethinking Solutions. Creating Change.',
    tagline:
      'We are the University of Waterloo chapter of Engineers Without Borders Canada, a student-led community exploring how engineering can contribute to a more equitable and sustainable world.',
    imageAlt: 'Chapter members collaborating — hero image placeholder',
    imageSrc: '/images/home/hero.png',
  },

  explorePages: [
    {
      id: 'explore-portfolios',
      title: 'Portfolios',
      description:
        'Get involved beyond the classroom through advocacy, education, events, media, and other chapter initiatives.',
      href: '/portfolios',
      linkLabel: 'View Portfolios',
    },

    {
      id: 'explore-design-teams',
      title: 'Design Teams',
      description:
        'Work on hands-on engineering and systems challenges spanning climate technology, campus sustainability, and community development.',
      href: '/design-teams',
      linkLabel: 'View Design Teams',
    },

    {
      id: 'explore-about',
      title: 'About Us',
      description:
        'Learn more about who we are, what we care about, and how students at Waterloo are putting systems thinking into practice.',
      href: '/about',
      linkLabel: 'Learn More',
    },
  ],

  mission: {
    heading: 'Think Beyond the Solution',
    body:
      'Engineering problems rarely exist in isolation. We create spaces for students to explore the people, communities, and systems behind the problems we are trying to solve. Through our projects, portfolios, and conversations, we learn to question assumptions, understand different perspectives, and think about what responsible engineering can look like.',
    imageAlt: 'Chapter members collaborating - mission section placeholder',
    imageSrc: '/images/home/mission.png',
  },

  cta: {
    heading: 'Find Your Place in EWB',
    body:
      "You don't need to know exactly what you want to do. Get involved, meet people, explore new ideas, and find a way to contribute to the work happening across UW EWB.",
    buttonLabel: 'Join Our Chapter',
    buttonHref: siteConfig.getInvolvedUrl,
  },
};