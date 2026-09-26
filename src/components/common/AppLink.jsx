import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '@/lib/scroll';
import { splitTo } from '@/lib/routes';

/**
 * The site's one internal link.
 *
 * Targets are written as `/path` or `/path#section`. When the target is a
 * section on the page already open, the click is intercepted and becomes a
 * scroll — a router navigation there would remount the whole page to land on
 * something already in the document. Otherwise it is an ordinary <Link>, and
 * <RouteScroll> handles the section once the new page has rendered.
 *
 * `scrollDelay` exists for links inside an overlay that locks body scroll.
 * Closing the overlay releases that lock in an effect, which React runs after
 * the click handler has returned — so an immediate scroll would be issued
 * against a body that is still `overflow: hidden` and simply not happen.
 */
const AppLink = forwardRef(function AppLink(
  { to, children, onClick, scrollDelay = 0, ...props },
  ref,
) {
  const location = useLocation();
  const { pathname, hash } = splitTo(to);

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (hash && pathname === location.pathname) {
      event.preventDefault();
      if (scrollDelay) window.setTimeout(() => scrollToSection(hash), scrollDelay);
      else scrollToSection(hash);
    }
  };

  return (
    <Link ref={ref} to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
});

export default AppLink;
