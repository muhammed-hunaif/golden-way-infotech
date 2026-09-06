import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Single registration point for GSAP plugins so no component registers twice.
 * Import { gsap, ScrollTrigger } from '@/lib/gsap' everywhere else.
 */
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: 'power3.out',
  duration: 0.9,
});

/** Shared reveal distance/timing so every section animates with one rhythm. */
export const REVEAL = {
  y: 28,
  opacity: 0,
  duration: 0.9,
  ease: 'power3.out',
};

export const SCROLL_START = 'top 82%';

/** True when the visitor has asked the OS to reduce motion. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
