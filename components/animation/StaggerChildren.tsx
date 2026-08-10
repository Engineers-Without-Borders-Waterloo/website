'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef, Children } from 'react';

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number; // 0.05-0.1 seconds (50-100ms between items)
  maxDuration?: number; // cap the total stagger window (default 1.0s)
}

interface StaggerItemProps {
  children: React.ReactNode;
  delay: number;
}

// Each item observes its own visibility so rows animate in as they're
// individually scrolled into view, rather than the whole grid firing at
// once as soon as any part of the container is visible.
function StaggerItem({ children, delay }: StaggerItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Applies a staggered scroll-in animation to each child. It renders the
 * children directly (no wrapper element), so it's meant to be placed inside a
 * layout container such as `Grid` that arranges the items — keeping layout and
 * animation as separate, composable concerns.
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.075,
  maxDuration = 1.0,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  const childCount = Children.count(children);
  // Scale the per-item delay down as the list grows so the total stagger window
  // never exceeds maxDuration (e.g. 12 items won't take 12 × staggerDelay).
  const effectiveDelay = Math.min(staggerDelay, maxDuration / Math.max(childCount, 1));

  // Respect prefers-reduced-motion: show content immediately without animation.
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {Children.map(children, (child, index) => (
        <StaggerItem key={index} delay={index * effectiveDelay}>
          {child}
        </StaggerItem>
      ))}
    </>
  );
}
