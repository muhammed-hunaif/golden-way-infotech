import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { NAV_LINKS, ROUTES } from '@/config/navigation';
import { isSamePage } from '@/lib/routes';
import { useNavTone } from '@/hooks/useNavTone';
import Logo from '@/components/common/Logo';
import AppLink from '@/components/common/AppLink';
import NavDropdown from '@/components/layout/NavDropdown';
import MobileMenu from '@/components/layout/MobileMenu';

/**
 * Fixed site header.
 *
 * Always see-through: no background at any scroll position, by design. Instead
 * the colours follow the section behind the bar (see useNavTone): over a dark
 * section the links are white and the logo's strapline white; over a light
 * section the links are dark and the logo shows its original dark strapline.
 *
 * Its height is fixed and it never resizes the bar or the logo: a lockup that
 * shrinks as you scroll draws attention to itself at exactly the moment the page
 * content should have it.
 *
 * Active state comes from the route, not from what is on screen. On a six-page
 * site the bar's job is to say which page you are on; a scroll-spy would move the
 * highlight around while the answer to that question never changed.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // The menu panel opens directly beneath the bar, so it needs the bar's height.
  // Measured rather than hardcoded: the bar no longer resizes on scroll, but it
  // still reflows when the viewport crosses `sm` and the logo steps up a size.
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return undefined;

    const update = () => setHeaderHeight(element.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // The mobile menu is a dark sheet under the bar, so while it is open the bar
  // keeps its dark-ground colours whatever section is behind it.
  const navTone = useNavTone(headerRef, location.pathname);
  const isLight = navTone === 'light' && !isMenuOpen;

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-sm focus:bg-night focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold-300"
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        className="site-header fixed inset-x-0 top-0 z-50 bg-transparent py-2"
      >
        <nav
          className="container relative flex items-center justify-between gap-6"
          aria-label="Primary"
        >
          <AppLink
            to={ROUTES.home}
            className="shrink-0 rounded-sm"
            aria-label="Golden Way Infotech LLC, home"
          >
            {/* Mobile stays at h-14: at h-20 the lockup is 316px wide, which
                leaves no room for the hamburger on a 360px screen. Over dark
                sections it uses the knockout artwork (strapline in white), over
                light ones the original. */}
            <Logo
              priority
              tone={isLight ? 'light' : 'dark'}
              markClassName="h-14 w-auto sm:h-20"
            />
          </AppLink>

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = isSamePage(link.to, location.pathname);

              if (link.children) {
                return (
                  <NavDropdown
                    key={link.id}
                    link={link}
                    isActive={isActive}
                    location={location}
                    isLight={isLight}
                  />
                );
              }

              return (
                <li key={link.id}>
                  <AppLink
                    to={link.to}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group relative block py-4 text-base font-medium transition-colors duration-300',
                      isLight
                        ? cn('hover:text-gold-700', isActive ? 'text-gold-700' : 'text-night')
                        : 'text-white',
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute inset-x-0 bottom-2 h-0.5 transition-all duration-300',
                        isLight ? 'bg-gold-500' : 'bg-white',
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100',
                      )}
                      aria-hidden="true"
                    />
                  </AppLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 lg:hidden">
            {/* Two bars — one full width, one half — that toggle into an X.
                Opening squares the short bar up to full width so the X is
                symmetrical. Bars sit at 1px and 9px, so 4px centres them. */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={cn(
                '-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-300 lg:hidden',
                isLight ? 'text-night hover:text-gold-700' : 'text-white',
              )}
            >
              <span className="flex w-6 flex-col gap-y-1.5" aria-hidden="true">
                <span
                  className={cn(
                    'h-[2px] w-full rounded-md bg-current transition-all duration-300',
                    isMenuOpen && 'translate-y-[4px] rotate-45',
                  )}
                />
                <span
                  className={cn(
                    'h-[2px] rounded-md bg-current transition-all duration-300',
                    isMenuOpen ? 'w-full -translate-y-[4px] -rotate-45' : 'w-1/2',
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        location={location}
        offsetTop={headerHeight}
      />
    </>
  );
}
