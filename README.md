# EWB UWaterloo Website

A modern, statically-rendered website for the University of Waterloo chapter of Engineers Without Borders Canada. Built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. Features scroll-triggered animations, responsive layouts, and a visual identity centered on the brand orange (#FA7F39).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.9.0 or later
- npm (included with Node.js)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Engineers-Without-Borders-Waterloo/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script       | Command              | Description                                           |
| ------------ | -------------------- | ----------------------------------------------------- |
| `dev`        | `npm run dev`        | Start the Next.js development server with hot reload  |
| `build`      | `npm run build`      | Create an optimized production build                  |
| `start`      | `npm run start`      | Serve the production build locally                    |
| `lint`       | `npm run lint`       | Run ESLint with Next.js recommended rules             |
| `format`     | `npm run format`     | Format all files with Prettier                        |
| `type-check` | `npm run type-check` | Run TypeScript compiler checks without emitting files |
| `test`       | `npm run test`       | Run the Vitest test suite                             |
| `test:coverage` | `npm run test:coverage` | Run the test suite with a coverage report (100% required) |

## Folder Structure

```
website/
├── app/                    # Next.js App Router — routes and layouts
│   ├── layout.tsx          # Root layout (HTML shell, fonts, Navbar, Footer)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404 page
│   ├── icon.png            # Favicon (chapter logo, auto-detected by Next.js)
│   ├── portfolios/         # Portfolios page route
│   ├── design-teams/       # Design Teams page route
│   ├── about/              # About Us page route
│   └── globals.css         # Tailwind directives and CSS custom properties
├── components/             # Reusable UI components
│   ├── ui/                 # shadcn/ui primitives + SmartLink, PlaceholderImage
│   ├── layout/             # Shared layout components (Section, Grid)
│   ├── animation/          # Animation wrappers (FadeInSection, StaggerChildren)
│   ├── navigation/         # Navbar, MobileMenu, Footer
│   ├── home/               # Home page-specific components
│   ├── portfolios/         # Portfolios page-specific components
│   ├── design-teams/       # Design Teams page-specific components
│   └── about/              # About Us page-specific components
├── data/                   # Content data files (separated from components)
│   ├── navigation.ts       # Nav links configuration
│   ├── site-config.ts      # Site metadata and social links
│   ├── home.ts             # Home page content
│   ├── portfolios.ts       # Portfolio projects data
│   ├── design-teams.ts     # Teams and members data
│   └── about.ts            # About page content
├── types/                  # Shared TypeScript interfaces
│   ├── navigation.ts       # NavLink, SiteConfig, SocialLink
│   ├── content.ts          # Project, Team, TeamMember, GalleryImage, PageLink, page data types
│   └── index.ts            # Barrel export
├── lib/                    # Utilities and helpers
│   ├── utils.ts            # cn() classnames, isExternalUrl(), sortByKey()
│   └── fonts.ts            # Font configuration (next/font)
├── __tests__/               # Vitest + React Testing Library unit tests, mirrors components/
├── public/
│   ├── ewb-logo.svg        # Chapter logo (recolored to brand orange)
│   └── images/             # Real photos, organized by page (see "Adding Images" below)
├── .env.example            # Environment variable template
├── tsconfig.json           # TypeScript config (strict mode, path aliases)
├── next.config.ts          # Next.js configuration
├── eslint.config.mjs       # ESLint configuration
├── .prettierrc             # Prettier configuration
├── vitest.config.ts        # Vitest configuration
└── package.json            # Dependencies and scripts
```

Tailwind CSS v4 uses CSS-native configuration — brand colors, typography scale, and spacing tokens are defined directly in `app/globals.css` via `@theme`, rather than a `tailwind.config.ts` file.

## Editing Content

All page content lives in the `data/` folder as plain, typed objects — **you never edit component code to change text, images, or people.** Each file maps to a part of the site, and TypeScript will flag a mistake (wrong field name, missing value) before it ships. Save the file and the dev server hot-reloads instantly.

| To change...                        | Edit this file          |
| ----------------------------------- | ----------------------- |
| Homepage copy (hero, mission, CTA)  | `data/home.ts`          |
| Portfolios list                     | `data/portfolios.ts`    |
| Design teams list                   | `data/design-teams.ts`  |
| Mission text, gallery, exec team    | `data/about.ts`         |
| Nav bar links                       | `data/navigation.ts`    |
| Site name, socials, "Get Involved" link | `data/site-config.ts` |
| Brand color, fonts, spacing         | `app/globals.css`       |

### Editing text

Find the string in the relevant `data/` file and change it. For example, to reword the homepage headline, open `data/home.ts` and edit `hero.heading`.

### Adding or editing an executive

Open `data/about.ts`. The `team` object has three parts: `president`, `portfolioLeads`, and `designTeamLeads`. Add a new person by dropping an object **anywhere** into the right list — the site sorts leads alphabetically by role automatically, so ordering in the file doesn't matter:

```ts
{
  id: 'exec-lead-sustainability', // must be unique across the team
  name: 'Jordan Lee',
  roles: ['Sustainability Lead'],
  photoAlt: 'Sustainability Lead portrait',
  photoSrc: '/images/about/team/sustainability-lead.png', // optional; omit for a placeholder
  linkedinUrl: 'https://www.linkedin.com/in/jordan-lee', // optional; omit to render an unlinked card
}
```

- **One person, two roles:** give them multiple roles and they render as a single card with a badge for each — `roles: ['Advocacy Lead', 'Fundraising Lead']`.
- **Two people, same role:** just add both entries; they automatically render next to each other.
- **Remove someone:** delete their object from the list.
- `roles` must contain at least one role (the first one is used for sorting).

### Adding or editing a portfolio

Open `data/portfolios.ts` and add an entry to `projects`:

```ts
{
  id: 'proj-new-thing',        // must be unique
  title: 'New Thing',
  description: 'One or two sentences about the portfolio.',
  imageAlt: 'New Thing placeholder',
  imageSrc: '/images/portfolios/new-thing.png', // optional; omit for a placeholder
}
```

### Adding or editing a design team

Open `data/design-teams.ts` and add an entry to `teams` (same shape as a portfolio: `id`, `name`, `description`, `imageAlt`, optional `imageSrc`).

### Navigation links, socials, and the "Get Involved" link

- **Nav links:** edit `navLinks` in `data/navigation.ts`.
- **Social links (footer):** edit `socials` in `data/site-config.ts`.
- **"Get Involved" / "Join Us" buttons:** they all point at `getInvolvedUrl` in `data/site-config.ts` (currently the chapter Discord). Change it in that one place. If you point it at an external URL it opens in a new tab automatically; an internal route (like `/about`) opens in the same tab.

## Adding Images

Every image slot (hero, portfolio cards, team photos, gallery) currently points at a placeholder image file under `public/images/`, named to match what it's for (e.g. `public/images/design-teams/waturbine.png`).

**To swap in a real photo, just replace that file with the same filename.** No code changes needed — the site references images by file path (e.g. `/images/design-teams/waturbine.png`) rather than importing them, so overwriting the file is enough.

If you want to use a different filename or file type instead, update the `imageSrc` (or `photoSrc` for team members) value in the matching entry inside the `data/` folder (e.g. `data/design-teams.ts`) to point at the new path.

If a field's `imageSrc`/`photoSrc` is removed entirely, `PlaceholderImage` (`components/ui/placeholder-image.tsx`) falls back to a gray box with the alt text shown.

## Customizing Branding

Brand colors, fonts, and section spacing are defined once in `app/globals.css`.

- **Brand orange (#FA7F39):** it appears in two forms in `app/globals.css` — the hex value `--color-brand-primary` (used by `bg-brand-*` utilities) and the HSL value `--primary: 22 95% 60%` inside `:root` (used by buttons, links, and the 404 accent). To fully re-brand, update both to your new color. `--primary` is listed twice (light and dark blocks) — change both.
- **Accent / dark shades:** `--color-brand-accent` and `--color-brand-dark`.
- **Section spacing:** `--spacing-section-sm | -md | -lg`. Each `Section` applies the value to its top and bottom, so two stacked sections combine to roughly double these numbers.
- **Font:** configured in `lib/fonts.ts` via `next/font`. Swap the imported font there.
- **Favicon:** replace `app/icon.png` (Next.js auto-detects it).

## Adding a New Page

1. Create a route folder in `app/` with a `page.tsx` (e.g. `app/events/page.tsx`).
2. Export a `metadata` object (`title`, `description`) for SEO.
3. Put the page's content in a new `data/events.ts` file and its type in `types/content.ts`.
4. Add a link to `navLinks` in `data/navigation.ts` so it appears in the nav bar and footer.
5. Compose the page from the shared building blocks:
   - `Section` — full-width band with consistent padding and max-width.
   - `Grid` — responsive grid layout.
   - `FadeInSection` — fades a block in on scroll.
   - `StaggerChildren` — animates grid items in one after another (place inside a `Grid`).
   - `SmartLink` — a link that opens external URLs in a new tab and uses client-side navigation for internal routes.

## Testing

Unit tests live in `__tests__/` (mirroring `components/`) and run on [Vitest](https://vitest.dev/) + React Testing Library.

```bash
npm run test           # run the suite once
npm run test:coverage  # run with a coverage report (enforces 100%)
```

Coverage is enforced at a minimum of **85%** for authored code (statements, branches, functions, lines). The report excludes the vendored shadcn/ui primitives and the root layout shell; see `vitest.config.ts`. Browser APIs that jsdom lacks (IntersectionObserver, matchMedia) and Next.js/Framer Motion modules are stubbed globally in `vitest.setup.ts`, so component tests render without a real browser.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static generation, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-native `@theme` configuration)
- **Components:** shadcn/ui (Button, Card, Sheet, NavigationMenu, Badge, Separator)
- **Animation:** Framer Motion (scroll-triggered, reduced motion support)
- **Font:** Plus Jakarta Sans via `next/font` (self-hosted, swap display)
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint (next/core-web-vitals, next/typescript)
- **Formatting:** Prettier

## Contribution Guidelines

1. **Branch from main** — Create a feature branch for your work (`feat/your-feature-name`).
2. **Follow conventional commits** — Use prefixes like `feat:`, `fix:`, `docs:`, `style:`, `refactor:`.
3. **Run checks before opening a PR:**
   ```bash
   npm run type-check
   npm run lint
   npm run test
   npm run build
   ```
4. **Keep content separate from components** — Add new content data to `data/` files, not inline in components.
5. **Adding a new page** — Create a route directory in `app/` and add an entry to `data/navigation.ts`.
6. **Use path aliases** — Import with `@/components`, `@/lib`, `@/data`, `@/types` instead of relative paths.
