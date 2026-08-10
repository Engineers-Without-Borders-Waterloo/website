import type { HomePageData } from '@/types';
import { siteConfig } from '@/data/site-config';

export const homePageData: HomePageData = {
  hero: {
    heading: 'Engineering an Equitable and Sustainable Future',
    tagline:
      'We are the University of Waterloo chapter of Engineers Without Borders Canada — a community of systems change leaders mobilizing engineering and technology to address urgent global challenges, in Canada and beyond.',
    imageAlt: 'Chapter members collaborating — hero image placeholder',
    imageSrc: '/images/home/hero.png',
  },
  explorePages: [
    {
      id: 'explore-portfolios',
      title: 'Portfolios',
      description:
        'Explore the podcast, advocacy, fundraising, and other portfolios our members lead throughout the year.',
      href: '/portfolios',
      linkLabel: 'View Portfolios',
    },
    {
      id: 'explore-design-teams',
      title: 'Design Teams',
      description:
        'See the hands-on engineering projects our student design teams are building, from wind turbines to carbon capture.',
      href: '/design-teams',
      linkLabel: 'View Design Teams',
    },
    {
      id: 'explore-about',
      title: 'About Us',
      description:
        'Learn about our mission, values, and the people leading our chapter\u2019s work at Waterloo.',
      href: '/about',
      linkLabel: 'Learn More',
    },
  ],
  mission: {
    heading: 'Systems Change, Not Just Solutions',
    body: 'Our mission is to create systemic change through community-driven collaboration. We mobilize the engineering community and leverage technological innovation to address urgent and important global challenges, guided by our four strategic goals: optimization, innovation, localization, and advocacy. As the chapter founded at the same university where EWB Canada began in 2000, we carry that same commitment to asking not "what do we bring?" but "what do communities need?"',
    imageAlt: 'Chapter members collaborating — mission section placeholder',
    imageSrc: '/images/home/mission.png',
  },
  cta: {
    heading: 'Become a Systems Change Leader',
    body: 'Whether you are a first-year student or about to graduate, there is a place for you in our chapter. Join our research, education, advocacy, or fundraising teams and help engineer a more equitable and sustainable future.',
    buttonLabel: 'Join Our Chapter',
    buttonHref: siteConfig.getInvolvedUrl,
  },
};
