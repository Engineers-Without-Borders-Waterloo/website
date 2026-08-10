'use client';

import { useReducedMotion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { aboutPageData } from '@/data/about';

/**
 * The About page intro: the chapter mission heading and paragraphs, followed
 * by a decorative auto-scrolling photo carousel. Named distinctly from the
 * home page's `MissionSection` since the two render different layouts.
 */
export function AboutMission() {
  const { heading, paragraphs } = aboutPageData.mission;
  const { gallery } = aboutPageData;
  const prefersReducedMotion = useReducedMotion();

  // Duplicate the images so the looping track has no visible seam.
  const track = [...gallery, ...gallery];

  return (
    <Section>
      <h1 className="text-heading-md lg:text-heading-xl mb-6">{heading}</h1>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body-lg text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/*
        Decorative photo carousel. Marked aria-hidden: it's a visual flourish
        (and the track duplicates each image, which would otherwise be
        announced twice by screen readers). The mission text above carries the
        meaningful content.
      */}
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
    </Section>
  );
}
