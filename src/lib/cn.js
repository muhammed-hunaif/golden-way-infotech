/**
 * Minimal className joiner. Filters falsy values so conditional classes read cleanly:
 *   cn('btn', isActive && 'btn--active')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
