import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scroll';
import { NAV_LINKS, NAV_SECTION_IDS, isNavItemActive } from '@/config/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import NavDropdown from '@/components/layout/NavDropdown';
import MobileMenu from '@/components/layout/MobileMenu';

/**
 * Fixed site header.
 *
 * The bar is a light surface at every scroll position, because the brand lockup
 * carries a dark-ink strapline that needs a light ground.
 *
 * Its height is fixed. Scrolling firms up the surface — whiter ground, a shadow,
 * a quieter border — but never resizes the bar or the logo: a lockup that shrinks
 * as you scroll draws attention to itself at exactly the moment the page content
 * should have it.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(48);

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

  // NAV_SECTION_IDS is a module constant, so its identity is already stable.
  const activeId = useActiveSection(NAV_SECTION_IDS);

  const handleNavClick = useCallback((event, href) => {
    event.preventDefault();
    scrollToSection(href);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-sm focus:bg-night focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold-300"
      >
        Skip to main content
      </a>

      {/* The bar stays light at every scroll position: the logo's strapline is
          dark ink, so it needs a light ground to stay legible.

          `py-2` is as tight as the bar goes while the logo stays at `h-16`: the
          height is the logo plus this padding, so with the lockup fixed, padding
          is the only lever. It sits outside the conditional because the bar's
          height must not change on scroll — only its surface does, cream warming
          to white with a shadow once there is content behind it. */}
      <header
        ref={headerRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b py-2 transition-all duration-500 ease-premium',
          isScrolled
            ? 'border-black/[0.07] bg-white/95 shadow-subtle backdrop-blur-xl'
            : 'border-gold-500/20 bg-cream/95 backdrop-blur-xl',
        )}
      >
        <nav className="container flex items-center justify-between gap-6" aria-label="Primary">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="shrink-0 rounded-sm"
            aria-label="Golden Way Infotech LLC — back to top"
          >
            {/* One size, always — nothing here is scroll-dependent. Mobile stays
                at h-12: at h-16 the lockup is 253px wide, which leaves no room
                for the hamburger on a 360px screen. */}
            <Logo priority markClassName="h-12 w-auto sm:h-16" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = isNavItemActive(link, activeId);

              if (link.children) {
                return (
                  <NavDropdown
                    key={link.id}
                    link={link}
                    isActive={isActive}
                    activeId={activeId}
                    onNavigate={handleNavClick}
                  />
                );
              }

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative block rounded-sm px-3.5 py-2 text-[0.875rem] font-bold transition-colors duration-400 ease-premium hover:text-gold-700 xl:px-4',
                      isActive ? 'text-gold-700' : 'text-ink-soft',
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold-500 transition-transform duration-500 ease-premium xl:inset-x-4',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href="#contact" variant="primary" size="sm" className="hidden sm:inline-flex">
              Let&apos;s Talk
            </Button>

            {/* Two bars — one full width, one half — that toggle into an X.
                Opening squares the short bar up to full width so the X is
                symmetrical. Bars sit at 1px and 9px, so 4px centres them. */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-night transition-colors duration-400 ease-premium hover:text-gold-700 lg:hidden"
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
        activeId={activeId}
        offsetTop={headerHeight}
      />
    </>
  );
}
