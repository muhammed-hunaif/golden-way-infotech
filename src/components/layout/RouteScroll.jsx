import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '@/lib/scroll';
import { ScrollTrigger } from '@/lib/gsap';

/**
 * Restores scroll position on every route change.
 *
 * A new page starts at the top; a `/path#section` target lands on that section
 * instead, and falls back to the top if the id is not on this page — a stale
 * hash should not strand the visitor mid-document.
 *
 * The move is a layout effect, not an effect: the incoming page is already in
 * the DOM but has not been painted, so the visitor never sees it at the outgoing
 * page's scroll position first. The jump is always instant. Gliding down a page
 * someone has only just arrived at shows them everything they did not ask for on
 * the way past.
 */
export default function RouteScroll() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash || !scrollToSection(hash, { smooth: false })) scrollToTop();
  }, [pathname, hash]);

  // Sections build their ScrollTriggers in their own layout effects, which run
  // before the scroll above — so their start positions are measured against the
  // outgoing page's offset. One frame later the page has painted where it will
  // actually sit, and a refresh re-measures every trigger against it. Without
  // this, anything below the fold on a freshly mounted route keeps coordinates
  // from a document that no longer exists and never reveals.
  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
