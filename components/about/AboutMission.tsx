'use client';

import { useReducedMotion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { aboutPageData } from '@/data/about';

/**
 * The About page intro and chapter story.
 */
export function AboutMission() {
  const { gallery } = aboutPageData;
  const prefersReducedMotion = useReducedMotion();

  // Duplicate the images so the looping track has no visible seam.
  const track = [...gallery, ...gallery];

  return (
    <Section>
      {/* WHO WE ARE */}
      <h1 className="text-heading-md lg:text-heading-xl mb-6">
        About Us
      </h1>

      <div className="space-y-4">
        <h2 className="text-heading-sm lg:text-heading-md">
          Who We Are
        </h2>

        <p className="text-body-lg text-muted-foreground leading-relaxed">
          Engineers Without Borders at the University of Waterloo is a
          student-led community exploring what it means to be a systems-change
          thinker in a complex world.
        </p>

        <p className="text-body-lg text-muted-foreground leading-relaxed">
          We bring together students from different disciplines to learn,
          build, question, and take action on social and environmental
          challenges. Through our portfolios, design teams, and community
          projects, we create opportunities to look beyond the technical
          solution and understand the systems around it.
        </p>
      </div>

      {/* GALLERY */}
      <div className="mt-8 overflow-hidden" aria-hidden="true">
        <div
          className={
            prefersReducedMotion
              ? 'flex gap-4'
              : 'flex gap-4 w-max animate-[gallery-scroll_30s_linear_infinite]'
          }
        >
          {track.map((image, index) => (
            <PlaceholderImage
              key={`${image.id}-${index}`}
              src={image.imageSrc}
              alt={image.imageAlt}
              className="aspect-square w-48 shrink-0 sm:w-56 lg:w-64 rounded-lg"
              sizes="256px"
            />
          ))}
        </div>
      </div>

      {/* WHERE IT STARTED */}
      <section className="mt-16">
        <h2 className="text-heading-sm lg:text-heading-md mb-4">
          Where It Started
        </h2>

        <div className="space-y-4">
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Engineers Without Borders Canada was founded in 2000 by George
            Roter and Parker Mitchell, two University of Waterloo engineering
            graduates. What began as an idea in a coffee shop grew into a
            national organization focused on developing leaders who can create
            meaningful change.
          </p>

          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Our chapter was founded that same year, right here at Waterloo.
            Since then, students have continued to build on that legacy by
            bringing systems thinking, responsible engineering, and community
            engagement into their work.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mt-16">
        <h2 className="text-heading-sm lg:text-heading-md mb-4">
          What We Do
        </h2>

        <div className="space-y-4">
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            There isn't one way to get involved with EWB.
          </p>

          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Our portfolios create opportunities to learn, connect, advocate,
            educate, and build community. Our design teams take on longer-term
            engineering and systems challenges across areas such as climate
            technology, campus sustainability, and community development.
          </p>

          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Across all of our work, we ask bigger questions about the problems
            we're trying to address: who is affected, what systems shape them,
            and what meaningful change could look like.
          </p>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="mt-16">
        <h2 className="text-heading-sm lg:text-heading-md mb-4">
          Join Us!
        </h2>

        <p className="text-body-lg text-muted-foreground leading-relaxed">
          You don't need to have all the answers to get involved with EWB!
          We're a community for students who want to learn, challenge their
          perspectives, and make an impact beyond the classroom.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="rounded-lg border p-6">
            <h3 className="text-heading-xs mb-3">
              General Member Applications
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Interested in joining UW EWB and getting involved with our
              portfolios, design teams, and events?
            </p>

            <a
              href="https://forms.gle/doX1TJNhGJdeSboy5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Apply to Become a General Member →
            </a>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-heading-xs mb-3">
              Lead & Executive Member Applications
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Interested in taking on a leadership role and helping shape the
              future of UW EWB?
            </p>

            <a
              href="https://forms.gle/8ze2hjdemxuMfY6n9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Apply to Join the Executive Team →
            </a>
          </div>
        </div>
      </section>
    </Section>
  );
}