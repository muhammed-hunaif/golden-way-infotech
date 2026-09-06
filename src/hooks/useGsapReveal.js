import { useLayoutEffect, useRef } from 'react';
import { REVEAL, SCROLL_START, gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Scroll-triggered reveal for a section.
 *
 * Returns a ref to attach to the section root. Every child matching
 * `[data-reveal]` fades and lifts into place once, in document order.
 * All tweens live in a gsap.context scoped to the ref, so cleanup is automatic
 * and no ScrollTrigger leaks between renders.
 */
export function useGsapReveal({
  selector = '[data-reveal]',
  stagger = 0.09,
  start = SCROLL_START,
} = {}) {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    // Reduced motion: show everything immediately, animate nothing.
    if (prefersReducedMotion()) {
      gsap.set(scope.querySelectorAll(selector), { clearProps: 'all', opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      if (targets.length === 0) return;

      gsap.from(targets, {
        ...REVEAL,
        stagger,
        scrollTrigger: {
          trigger: scope,
          start,
          once: true,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [selector, stagger, start]);

  return scopeRef;
}
