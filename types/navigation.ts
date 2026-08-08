export interface NavLink {
  id: string;
  path: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  /** Destination for all "Get Involved" / "Join Us" CTAs. External links open in a new tab. */
  getInvolvedUrl: string;
  socials: SocialLink[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
}
