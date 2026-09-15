import type { DesignTeamsPageData } from '@/types';

export const designTeamsPageData: DesignTeamsPageData = {
  heading: 'Our Design Teams',
  introduction:
    'Our design teams bring students together to work on engineering and systems-change challenges across climate, sustainability, and community development.',
  teams: [
    {
      id: 'team-pyroneers',
      name: 'Pyroneers',
      description:
        'Pyroneers explores the potential of converting invasive buckthorn species into biochar. The team works on processing buckthorn into a useful material for tree planting and urban soils, while creating educational opportunities for local youth around environmental sustainability and climate change.',
      imageAlt: 'Pyroneers Placeholder',
      imageSrc: '/images/design-teams/pyroneers.png',
    },
    {
      id: 'team-campus-swm',
      name: 'Campus SWM',
      description:
        'The Campus Stormwater Living Lab explores nature-based approaches to stormwater management on campus. The team researches and monitors potential stormwater solutions while connecting the project to campus sustainability, classroom learning, and public awareness.',
      imageAlt: 'Campus SWM Placeholder',
      imageSrc: '/images/design-teams/campus-swm.png',
    },
    {
      id: 'team-watair',
      name: 'WatAir',
      description:
        'WatAir explores carbon dioxide removal through Direct Air Capture technology. The team designs and develops an automated, open-source, and open-access carbon capture device while researching areas including reactor design, sensor development, and sorbent and algae systems.',
      imageAlt: 'WatAir Placeholder',
      imageSrc: '/images/design-teams/watair.png',
    },
    {
      id: 'team-thailand',
      name: 'Thailand Project',
      description:
        'The Thailand Project works with a Migrant Learning Centre in Mae Sot, Thailand, to support its educational needs. The team works with the community to understand its priorities and explore sustainable, long-term solutions that respond to local needs.',
      imageAlt: 'Thailand Placeholder',
      imageSrc: '/images/design-teams/thailand.png',
    },
  ],
};
