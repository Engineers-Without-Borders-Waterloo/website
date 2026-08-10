import type { PortfoliosPageData } from '@/types';

export const portfoliosPageData: PortfoliosPageData = {
  heading: 'Our Portfolios',
  description:
    'Each portfolio reflects a different way our chapter mobilizes engineering and technology toward systemic change.',
  projects: [
    {
      id: 'proj-advocacy',
      title: 'Advocacy',
      description:
        'Menstrual equity drives, the Map the System research challenge, and campus sustainability initiatives.',
      imageAlt: 'Advocacy placeholder',
      imageSrc: '/images/portfolios/advocacy.png',
    },
    {
      id: 'proj-education',
      title: 'Education',
      description:
        'In-class visits and case studies that bring global development and systems thinking into UW courses.',
      imageAlt: 'Education placeholder',
      imageSrc: '/images/portfolios/education.png',
    },
    {
      id: 'proj-events-outreach',
      title: 'Events and Outreach',
      description:
        'Conferences, alumni panels, and hackathons connecting our members with the wider EWB community.',
      imageAlt: 'Events and Outreach placeholder',
      imageSrc: '/images/portfolios/events-outreach.png',
    },
    {
      id: 'proj-fundraising',
      title: 'Fundraising',
      description:
        'Sponsorship drives and fundraising events supporting Junior Fellowship placements and chapter programs.',
      imageAlt: 'Fundraising placeholder',
      imageSrc: '/images/portfolios/fundraising.png',
    },
    {
      id: 'proj-podcast',
      title: 'Podcast',
      description:
        'A member-run podcast featuring roundtable discussions and interviews on global development topics.',
      imageAlt: 'Podcast placeholder',
      imageSrc: '/images/portfolios/podcast.png',
    },
    {
      id: 'proj-shipping-container',
      title: 'Shipping Container Project',
      description:
        'Shipping donated textbooks and surplus lab equipment from UW to partner institutions in Eswatini.',
      imageAlt: 'Shipping Container Project placeholder',
      imageSrc: '/images/portfolios/shipping-container.png',
    },
    {
      id: 'proj-social-media',
      title: 'Social Media',
      description:
        'Instagram and LinkedIn content keeping our community in the loop on chapter initiatives.',
      imageAlt: 'Social Media placeholder',
      imageSrc: '/images/portfolios/social-media.png',
    },
    {
      id: 'proj-web-development',
      title: 'Web Development',
      description: 'The team behind uwewb.ca, building and maintaining the chapter website.',
      imageAlt: 'Web Development placeholder',
      imageSrc: '/images/portfolios/web-development.png',
    },
  ],
};
