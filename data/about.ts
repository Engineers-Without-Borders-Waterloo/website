import type { AboutPageData } from '@/types';

// Placeholder until each exec member's real LinkedIn profile is added.
const EWB_LINKEDIN_URL = 'https://www.linkedin.com/company/engineers-without-borders-canada/';

export const aboutPageData: AboutPageData = {
  mission: {
    heading: 'About Our Chapter',
    paragraphs: [
      'Our mission is to address the root causes of poverty and inequality through systemic change and engineering innovation. Our vision is engineering an equitable and sustainable future for marginalized people and the planet.',
      'Engineers Without Borders Canada was founded in 2000 by George Roter and Parker Mitchell, two engineering graduates of the University of Waterloo, from little more than a scribble on a napkin in a coffee shop. Our chapter was founded that same year, carrying that founding legacy forward on the campus where it all began.',
      'We collaborate with local NGOs and government departments in countries including Burkina Faso, Ghana, Malawi, and Zambia, applying EWB Canada\u2019s Systems Change Leadership model to identify and work towards the root causes of poverty and inequality, both in Canada and around the world.',
      'Today, our chapter is made up of portfolios spanning podcasting, education, advocacy, events and outreach, fundraising, a shipping container project, web development, and social media, along with design teams including WATurbine, OpenAir, Pyroneers, Map the System, and Campus SWM, all led by our executive team.',
    ],
  },
  gallery: [
    {
      id: 'gallery-1',
      imageAlt: 'Chapter photo placeholder 1',
      imageSrc: '/images/about/gallery/gallery-1.png',
    },
    {
      id: 'gallery-2',
      imageAlt: 'Chapter photo placeholder 2',
      imageSrc: '/images/about/gallery/gallery-2.png',
    },
    {
      id: 'gallery-3',
      imageAlt: 'Chapter photo placeholder 3',
      imageSrc: '/images/about/gallery/gallery-3.png',
    },
    {
      id: 'gallery-4',
      imageAlt: 'Chapter photo placeholder 4',
      imageSrc: '/images/about/gallery/gallery-4.png',
    },
    {
      id: 'gallery-5',
      imageAlt: 'Chapter photo placeholder 5',
      imageSrc: '/images/about/gallery/gallery-5.png',
    },
    {
      id: 'gallery-6',
      imageAlt: 'Chapter photo placeholder 6',
      imageSrc: '/images/about/gallery/gallery-6.png',
    },
  ],
  team: {
    president: {
      id: 'exec-president',
      name: 'Member Name',
      roles: ['President'],
      photoAlt: 'President portrait placeholder',
      photoSrc: '/images/about/team/president.png',
      linkedinUrl: EWB_LINKEDIN_URL,
    },

    // ---------------------------------------------------------------------
    // PORTFOLIO LEADS
    // Add new leads anywhere in this list — they're automatically sorted
    // alphabetically by role, and duplicate roles (e.g. two Advocacy Leads)
    // are automatically grouped together. No manual ordering required.
    // ---------------------------------------------------------------------
    portfolioLeads: [
      {
        id: 'exec-lead-advocacy',
        name: 'Member Name',
        roles: ['Advocacy Lead'],
        photoAlt: 'Advocacy Lead portrait placeholder',
        photoSrc: '/images/about/team/advocacy-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-education',
        name: 'Member Name',
        roles: ['Education Lead'],
        photoAlt: 'Education Lead portrait placeholder',
        photoSrc: '/images/about/team/education-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-events-outreach',
        name: 'Member Name',
        roles: ['Events and Outreach Lead'],
        photoAlt: 'Events and Outreach Lead portrait placeholder',
        photoSrc: '/images/about/team/events-outreach-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-fundraising',
        name: 'Member Name',
        roles: ['Fundraising Lead'],
        photoAlt: 'Fundraising Lead portrait placeholder',
        photoSrc: '/images/about/team/fundraising-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-podcast',
        name: 'Member Name',
        roles: ['Podcast Lead'],
        photoAlt: 'Podcast Lead portrait placeholder',
        photoSrc: '/images/about/team/podcast-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-shipping-container',
        name: 'Member Name',
        roles: ['Shipping Container Project Lead'],
        photoAlt: 'Shipping Container Project Lead portrait placeholder',
        photoSrc: '/images/about/team/shipping-container-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-social-media',
        name: 'Member Name',
        roles: ['Social Media Lead'],
        photoAlt: 'Social Media Lead portrait placeholder',
        photoSrc: '/images/about/team/social-media-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-web-development',
        name: 'Member Name',
        roles: ['Web Development Lead'],
        photoAlt: 'Web Development Lead portrait placeholder',
        photoSrc: '/images/about/team/web-development-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
    ],

    // ---------------------------------------------------------------------
    // DESIGN TEAM LEADS
    // Add new leads anywhere in this list — they're automatically sorted
    // alphabetically by role, and duplicate roles are automatically grouped
    // together. No manual ordering required.
    // ---------------------------------------------------------------------
    designTeamLeads: [
      {
        id: 'exec-lead-campus-swm',
        name: 'Member Name',
        roles: ['Campus SWM Lead'],
        photoAlt: 'Campus SWM Lead portrait placeholder',
        photoSrc: '/images/about/team/campus-swm-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-map-the-system',
        name: 'Member Name',
        roles: ['Map the System Lead'],
        photoAlt: 'Map the System Lead portrait placeholder',
        photoSrc: '/images/about/team/map-the-system-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-openair',
        name: 'Member Name',
        roles: ['OpenAir Lead'],
        photoAlt: 'OpenAir Lead portrait placeholder',
        photoSrc: '/images/about/team/openair-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-pyroneers',
        name: 'Member Name',
        roles: ['Pyroneers Lead'],
        photoAlt: 'Pyroneers Lead portrait placeholder',
        photoSrc: '/images/about/team/pyroneers-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
      {
        id: 'exec-lead-waturbine',
        name: 'Member Name',
        roles: ['WATurbine Lead'],
        photoAlt: 'WATurbine Lead portrait placeholder',
        photoSrc: '/images/about/team/waturbine-lead.png',
        linkedinUrl: EWB_LINKEDIN_URL,
      },
    ],
  },
};
