import type { AboutPageData } from '@/types';

export const aboutPageData: AboutPageData = {
mission: {
  heading: 'About Us',
  paragraphs: [
    'Engineers Without Borders at the University of Waterloo is a student-led community exploring what it means to be a systems-change thinker in a complex world.',
    'We bring together students from different disciplines to learn, build, question, and take action on social and environmental challenges. Through our portfolios, design teams, and community projects, we create opportunities to look beyond the technical solution and understand the systems around it.',
  ],
},
  gallery: [
    {
      id: 'gallery-1',
      imageAlt: 'Chapter photo placeholder 1',
      imageSrc: '/images/about/gallery/gallery-1.webp',
    },
    {
      id: 'gallery-2',
      imageAlt: 'Chapter photo placeholder 2',
      imageSrc: '/images/about/gallery/gallery-2.webp',
    },
    {
      id: 'gallery-3',
      imageAlt: 'Chapter photo placeholder 3',
      imageSrc: '/images/about/gallery/gallery-3.webp',
    },
    {
      id: 'gallery-4',
      imageAlt: 'Chapter photo placeholder 4',
      imageSrc: '/images/about/gallery/gallery-4.webp',
    },
    {
      id: 'gallery-5',
      imageAlt: 'Chapter photo placeholder 5',
      imageSrc: '/images/about/gallery/gallery-5.webp',
    },
    {
      id: 'gallery-6',
      imageAlt: 'Chapter photo placeholder 6',
      imageSrc: '/images/about/gallery/gallery-6.webp',
    },
  ],
  // =======================================================================
  // TEAM (shown on the /team page)
  //
  // Each person needs: id (unique), name, roles, photoAlt.
  // Optional: photoSrc (omit to show a gray placeholder) and linkedinUrl
  // (omit and the card won't be a link).
  //
  // Headshots live in /public/images/team/ — square, ~800×800 .webp works
  // best. Run `npm run optimize-images` on any new .jpg/.png first.
  // =======================================================================
  team: {
    // ---------------------------------------------------------------------
    // LEADERSHIP — shown first, in the order listed.
    // ---------------------------------------------------------------------
    leadership: [
      {
        id: 'shathviki-krishnaraj',
        name: 'Shathviki Krishnaraj',
        roles: ['Co-President'],
        photoAlt: 'Portrait of Shathviki Krishnaraj',
        photoSrc: '/images/team/shathviki-krishnaraj.webp',
        linkedinUrl: 'https://www.linkedin.com/in/shathviki/',
      },
      {
        id: 'aidan-ko',
        name: 'Aidan Ko',
        roles: ['Co-President'],
        photoAlt: 'Portrait of Aidan Ko',
        photoSrc: '/images/team/aidan-ko.webp',
        linkedinUrl: 'https://www.linkedin.com/in/aidanko/',
      },
      {
        id: 'sara-waghmare',
        name: 'Sara Waghmare',
        roles: ['VP Finance'],
        photoAlt: 'Portrait of Sara Waghmare',
        photoSrc: '/images/team/sara-waghmare.webp',
        linkedinUrl: 'https://www.linkedin.com/in/sarawaghmare/',
      },
    ],

    // ---------------------------------------------------------------------
    // PORTFOLIO LEADS
    // Add new leads anywhere in this list — they're automatically sorted
    // alphabetically by (first) role. No manual ordering required.
    // ---------------------------------------------------------------------
    portfolioLeads: [
      {
        id: 'amna-hasan',
        name: 'Amna Hasan',
        roles: ['Advocacy Lead'],
        photoAlt: 'Portrait of Amna Hasan',
        photoSrc: '/images/team/amna-hasan.webp',
        linkedinUrl: 'https://www.linkedin.com/in/amna-hasan1/',
      },
      {
        id: 'salma-elgohary',
        name: 'Salma ElGohary',
        roles: ['Education Lead', 'Campus Stormwater Living Lab Co-Lead'],
        photoAlt: 'Portrait of Salma ElGohary',
        photoSrc: '/images/team/salma-elgohary.webp',
        linkedinUrl: 'https://www.linkedin.com/in/salma-elgohary-0102b6228/',
      },
      {
        id: 'gabriel-jabile',
        name: 'Gabriel Jabile',
        roles: ['Events Lead'],
        photoAlt: 'Portrait of Gabriel Jabile',
        photoSrc: '/images/team/gabriel-jabile.webp',
        linkedinUrl: 'https://www.linkedin.com/in/gabriel-jabile/',
      },
      {
        id: 'kenzy-soror',
        name: 'Kenzy Soror',
        roles: ['Podcasts Lead'],
        photoAlt: 'Portrait of Kenzy Soror',
        photoSrc: '/images/team/kenzy-soror.webp',
        linkedinUrl: 'https://www.linkedin.com/in/kenzysoror/',
      },
      {
        id: 'sehaj-kaura',
        name: 'Sehaj Kaura',
        roles: ['Website Lead'],
        photoAlt: 'Portrait of Sehaj Kaura',
        photoSrc: '/images/team/sehaj-kaura.webp',
        linkedinUrl: 'https://www.linkedin.com/in/gursehajkaura/',
      },
    ],

    // ---------------------------------------------------------------------
    // DESIGN TEAM LEADS
    // Same as portfolio leads: any order, sorted automatically by role.
    // ---------------------------------------------------------------------
    designTeamLeads: [],

    // ---------------------------------------------------------------------
    // EXECUTIVES — shown in their own section below the leads, sorted
    // automatically by (first) role so each portfolio's execs group together.
    // ---------------------------------------------------------------------
    executives: [
      {
        id: 'jiya-sivasubramanian',
        name: 'Jiya Sivasubramanian',
        roles: ['Education Executive'],
        photoAlt: 'Portrait of Jiya Sivasubramanian',
        photoSrc: '/images/team/jiya-sivasubramanian.webp',
        linkedinUrl: 'https://www.linkedin.com/in/jiya-sivasubramanian/',
      },
      {
        id: 'sarah-welch',
        name: 'Sarah Welch',
        roles: ['Education Executive', 'Shipping Container Project Executive'],
        photoAlt: 'Portrait of Sarah Welch',
        photoSrc: '/images/team/sarah-welch.webp',
        linkedinUrl: 'https://www.linkedin.com/in/sarah-welch-643bb4316/',
      },
      {
        id: 'seohee-yoon',
        name: 'Seohee Yoon',
        roles: ['Podcasts Executive'],
        photoAlt: 'Portrait of Seohee Yoon',
        photoSrc: '/images/team/seohee-yoon.webp',
        linkedinUrl: 'https://www.linkedin.com/in/-seoheeyoon/',
      },
      {
        id: 'kaleena-kanagarajan',
        name: 'Kaleena Kanagarajan',
        roles: ['Website Executive'],
        photoAlt: 'Portrait of Kaleena Kanagarajan',
        photoSrc: '/images/team/kaleena-kanagarajan.webp',
        linkedinUrl: 'https://www.linkedin.com/in/kaleenak/',
      },
    ],
  },
};
