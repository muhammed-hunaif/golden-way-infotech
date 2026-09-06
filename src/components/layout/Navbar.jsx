import { useCallback, useMemo, useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scroll';
import { NAV_LINKS } from '@/config/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import MobileMenu from '@/components/layout/MobileMenu';

/**
 * Fixed site header.
 *
 * Sits transparent over the dark hero, then switches to a blurred light bar once
 * the visitor scrolls, keeping contrast correct against both backgrounds.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(48);

  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeId = useActiveSection(sectionIds);

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

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
          isScrolled
            ? 'border-b border-black/[0.06] bg-white/85 py-2.5 shadow-subtle backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-4',
        )}
      >
        <nav className="container flex items-center justify-between gap-6" aria-label="Primary">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="shrink-0 rounded-sm"
            aria-label="Golden Way Infotech LLC — back to top"
          >
            <Logo
              priority
              variant={isScrolled ? 'dark' : 'light'}
              className={cn('transition-all duration-500', !isScrolled && 'shadow-subtle')}
              markClassName={cn(
                'transition-all duration-500',
                isScrolled ? 'h-8 w-auto sm:h-9' : 'h-7 w-auto sm:h-8',
              )}
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-sm px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-400 ease-premium xl:px-4',
                      isScrolled
                        ? cn('text-ink-soft hover:text-gold-700', isActive && 'text-gold-700')
                        : cn('text-white/75 hover:text-white', isActive && 'text-white'),
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
            <Button
              href="#contact"
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Let&apos;s Talk
            </Button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors duration-400 ease-premium lg:hidden',
                isScrolled
                  ? 'border-black/10 text-night hover:border-gold-500/50 hover:text-gold-700'
                  : 'border-white/20 text-white hover:border-gold-400/60 hover:text-gold-300',
              )}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} activeId={activeId} />
    </>
  );
}
