export interface Project {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  /** Path under /public, e.g. "/images/portfolios/advocacy.jpg". Omit to show a placeholder. */
  imageSrc?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  /** One or more roles held by this person. Rendered as separate badges on their single card. */
  roles: string[];
  photoAlt: string;
  /** Path under /public, e.g. "/images/about/team/president.jpg". Omit to show a placeholder. */
  photoSrc?: string;
  /** Full LinkedIn profile URL, e.g. "https://www.linkedin.com/in/username". Omit to render the card without a link. */
  linkedinUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  imageAlt: string;
  /** Path under /public, e.g. "/images/design-teams/waturbine.jpg". Omit to show a placeholder. */
  imageSrc?: string;
}

export interface GalleryImage {
  id: string;
  imageAlt: string;
  /** Path under /public, e.g. "/images/about/gallery/gallery-1.jpg". Omit to show a placeholder. */
  imageSrc?: string;
}

export interface PageLink {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface HomePageData {
  hero: {
    heading: string;
    tagline: string;
    imageAlt: string;
    /** Path under /public, e.g. "/images/home/hero.jpg". Omit to show a placeholder. */
    imageSrc?: string;
  };
  explorePages: PageLink[];
  mission: {
    heading: string;
    body: string;
    imageAlt: string;
    /** Path under /public, e.g. "/images/home/mission.jpg". Omit to show a placeholder. */
    imageSrc?: string;
  };
  cta: {
    heading: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export interface PortfoliosPageData {
  heading: string;
  description: string;
  projects: Project[];
}

export interface DesignTeamsPageData {
  heading: string;
  introduction: string;
  teams: Team[];
}

export interface AboutPageData {
  mission: {
    heading: string;
    paragraphs: string[];
  };
  gallery: GalleryImage[];
  team: {
    president: TeamMember;
    /** Any order — automatically alphabetized by role, with duplicate roles grouped together. */
    portfolioLeads: TeamMember[];
    /** Any order — automatically alphabetized by role, with duplicate roles grouped together. */
    designTeamLeads: TeamMember[];
  };
}
