import { useLayoutEffect, useRef } from 'react';
import { REVEAL, SCROLL_START, ScrollTrigger, gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Scroll-triggered reveal for a section.
 *
 * Returns a ref to attach to the section root. Every child matching
 * `[data-reveal]` fades and lifts into place once, in document order.
 *
 * Each element carries its own trigger rather than the section carrying one for
 * all of them. With `min-h-[100svh]` sections the section's top crosses the
 * start line long before its lower content is near the viewport, so a single
 * section-level trigger fires while most of its children are still far below the
 * fold — and if its measured start is stale, it never fires at all and the
 * children stay at `opacity: 0` for good. Per-element triggers cannot strand
 * anything: an element reveals when that element arrives, whatever the section
 * height turns out to be.
 *
 * Elements entering together still animate together, so the staggered rhythm is
 * unchanged. All tweens live in a gsap.context scoped to the ref, so cleanup is
 * automatic and no ScrollTrigger leaks between renders.
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

      // Set the hidden state explicitly instead of relying on a `from` tween's
      // immediateRender. A `from` hides the element at creation and only restores
      // it when its trigger fires; if that trigger never fires the element is
      // hidden forever. Here the reveal is a plain `to`, so the worst case is an
      // element that never animates — not one that never appears.
      gsap.set(targets, { opacity: 0, y: REVEAL.y });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: REVEAL.duration,
            ease: REVEAL.ease,
            stagger,
            overwrite: true,
          }),
      });
    }, scope);

    // Web fonts change every heading's height as they swap in, which moves every
    // trigger below them. Without this the start positions are measured against
    // the fallback font and drift once Pliant and DM Sans land.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, [selector, stagger, start]);

  return scopeRef;
}
