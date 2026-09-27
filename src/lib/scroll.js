const NAV_OFFSET = 80;

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scrolls to a section id, accounting for the fixed navbar height and honouring
 * the visitor's reduced-motion preference.
 *
 * `smooth` is false when the move is the result of a page change: arriving on a
 * new route and then gliding down it shows the visitor a page they never asked
 * to see on the way past. Within a page it stays true.
 *
 * Returns false when the id is not on the page, so a caller that navigated to
 * another route can tell the difference between "done" and "not here yet".
 */
export function scrollToSection(hash, { smooth = true } = {}) {
  if (typeof document === 'undefined') return false;

  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  // 'instant', not 'auto': `html` has `scroll-behavior: smooth`, and 'auto' defers
  // to it — so a page-change jump would still glide.
  window.scrollTo({ top, behavior: smooth && !prefersReduced() ? 'smooth' : 'instant' });

  // Keep focus in sync so keyboard and screen-reader users follow along. The URL
  // is owned by the router now, so it is not touched here.
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  return true;
}

/** Sends the visitor to the top of a freshly mounted route. */
export function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior: 'instant' });
}
