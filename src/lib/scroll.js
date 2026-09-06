const NAV_OFFSET = 80;

/**
 * Smoothly scrolls to a section id, accounting for the fixed navbar height and
 * honouring the visitor's reduced-motion preference.
 */
export function scrollToSection(hash) {
  if (typeof document === 'undefined') return;

  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });

  // Keep the URL and focus in sync so keyboard and screen-reader users follow along.
  if (window.history?.replaceState) {
    window.history.replaceState(null, '', `#${id}`);
  }
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}
