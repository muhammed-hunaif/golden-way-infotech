/**
 * Splits a navigation target such as `/about#why-us` into its two halves.
 *
 * Every link target on the site is written as one string so the config reads as
 * a list of destinations rather than a list of objects; this is the one place
 * that has to know the string has two parts.
 */
export function splitTo(to = '') {
  const index = to.indexOf('#');
  if (index === -1) return { pathname: to, hash: '' };

  return {
    pathname: to.slice(0, index) || '/',
    hash: to.slice(index),
  };
}

/** True when `to` points at the page currently open, section or not. */
export function isSamePage(to, pathname) {
  return splitTo(to).pathname === pathname;
}
