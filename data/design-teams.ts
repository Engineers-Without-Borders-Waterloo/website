import type { DesignTeamsPageData } from '@/types';

export const designTeamsPageData: DesignTeamsPageData = {
  heading: 'Our Design Teams',
  introduction:
    'Our chapter is home to several student design teams, each tackling a distinct engineering or systems-change challenge. Together, they carry out hands-on projects that put our mission into practice.',
  teams: [
    {
      id: 'team-campus-swm',
      name: 'Campus SWM',
      description:
        'Campus Stormwater Management (SWM) Living Lab is a multi-disciplinary project identifying and monitoring nature-based stormwater solutions on campus for classroom learning and to enhance public awareness. The team is currently in the research and implementation stage, conducting study site background reconnaissance, confirming the installation plan, and researching instruments.',
      imageAlt: 'Campus SWM team photo placeholder',
      imageSrc: '/images/design-teams/campus-swm.png',
    },
    {
      id: 'team-map-the-system',
      name: 'Map the System',
      description:
        'Map the System is a global research competition using systems thinking to explore the root causes of complex social and environmental issues, from housing inadequacy to accessibility in education.',
      imageAlt: 'Map the System team photo placeholder',
      imageSrc: '/images/design-teams/map-the-system.png',
    },
    {
      id: 'team-openair',
      name: 'OpenAir',
      description:
        'OpenAir designs a fully automated, open-source and open-access carbon capture device built for under $2,000. The team earned an honorable mention in the 2026 OpenAir Carbon Removal Challenge and previously won "Best Design" (2023) and "Most Novel Design" (2024). Work is organized across three sub-teams: Reactor Design Optimization, Sensor Development, and Sorbent and Algae.',
      imageAlt: 'OpenAir team photo placeholder',
      imageSrc: '/images/design-teams/openair.png',
    },
    {
      id: 'team-pyroneers',
      name: 'Pyroneers',
      description:
        'Pyroneers turns invasive buckthorn into biochar while educating the community on climate topics. The team diverts invasive species waste and converts it into biochar, uses that biochar for tree planting and improving urban soils in Kitchener-Waterloo, and provides educational opportunities to local youth.',
      imageAlt: 'Pyroneers team photo placeholder',
      imageSrc: '/images/design-teams/pyroneers.png',
    },
    {
      id: 'team-waturbine',
      name: 'WATurbine',
      description:
        'WATurbine designs and builds a small wind turbine for the annual International Small Wind Turbine Competition, with a goal of developing turbines that can power off-grid communities.',
      imageAlt: 'WATurbine team photo placeholder',
      imageSrc: '/images/design-teams/waturbine.png',
    },
  ],
};
