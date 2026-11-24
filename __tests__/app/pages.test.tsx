import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from '@/app/page';
import PortfoliosPage from '@/app/portfolios/page';
import DesignTeamsPage from '@/app/design-teams/page';
import AboutPage from '@/app/about/page';
import TeamPage from '@/app/team/page';
import NotFound from '@/app/not-found';

import { homePageData } from '@/data/home';
import { portfoliosPageData } from '@/data/portfolios';
import { designTeamsPageData } from '@/data/design-teams';
import { aboutPageData } from '@/data/about';

describe('Home page', () => {
  it('renders the hero, explore, mission, and CTA content', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: homePageData.hero.heading })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Explore Our Work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: homePageData.cta.heading })).toBeInTheDocument();
  });
});

describe('Portfolios page', () => {
  it('renders the heading and a card per project', () => {
    render(<PortfoliosPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: portfoliosPageData.heading })
    ).toBeInTheDocument();
    for (const project of portfoliosPageData.projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});

describe('Design Teams page', () => {
  it('renders the heading and each team name', () => {
    render(<DesignTeamsPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: designTeamsPageData.heading })
    ).toBeInTheDocument();
    for (const team of designTeamsPageData.teams) {
      expect(screen.getByRole('heading', { name: team.name })).toBeInTheDocument();
    }
  });
});

describe('About page', () => {
  it('renders the mission heading', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: aboutPageData.mission.heading })
    ).toBeInTheDocument();
  });
});

describe('Team page', () => {
  it('renders the heading, the executive team, and a card per person', () => {
    render(<TeamPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Meet Our Team' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Leadership Team' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Executives' })).toBeInTheDocument();

    const { leadership, portfolioLeads, designTeamLeads, executives } = aboutPageData.team;
    const everyone = [...leadership, ...portfolioLeads, ...designTeamLeads, ...executives];

    // Exactly one card per person.
    for (const member of everyone) {
      expect(screen.getAllByText(member.name)).toHaveLength(1);
    }
    // Every person with a LinkedIn gets a card that links to it.
    for (const member of everyone.filter((m) => m.linkedinUrl)) {
      expect(screen.getByRole('link', { name: `${member.name}'s LinkedIn profile` })).toHaveAttribute(
        'href',
        member.linkedinUrl
      );
    }
  });
});

describe('Not Found page', () => {
  it('renders the 404 message and a link back home', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Back to Home' });
    expect(link).toHaveAttribute('href', '/');
  });
});
