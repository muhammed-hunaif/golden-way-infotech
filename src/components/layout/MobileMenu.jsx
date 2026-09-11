import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scroll';
import { NAV_LINKS, isNavItemActive } from '@/config/navigation';
import { SITE } from '@/config/site';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import Button from '@/components/common/Button';

/**
 * Navigation panel for tablet and mobile.
 *
 * Opens as a full-width sheet directly beneath the header and slides in from the
 * left. The header stays visible above it, so the hamburger — which is animated
 * into an X while open — is what closes it again; there is no backdrop.
 *
 * `offsetTop` is the live header height, measured by <Navbar />.
 */
export default function MobileMenu({ isOpen, onClose, activeId, offsetTop = 0 }) {
  const panelRef = useRef(null);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => panelRef.current?.querySelector('a')?.focus(), 320);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    onClose();
    // Wait for the panel to unlock scroll before moving the page.
    window.setTimeout(() => scrollToSection(href), 220);
  };

  return (
    // `inert` (not aria-hidden) while closed: it removes the panel from both the
    // tab order and the accessibility tree, so its links are never reachable.
    <div
      id="mobile-menu"
      ref={panelRef}
      aria-label="Site navigation"
      inert={!isOpen}
      style={{ top: offsetTop, height: `calc(100dvh - ${offsetTop}px)` }}
      className={cn(
        'fixed left-0 z-40 flex w-full flex-col overflow-y-auto border-t border-gold-500/20 bg-cream transition-transform duration-300 ease-premium lg:hidden',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <nav className="flex-1 px-6 py-8" aria-label="Mobile">
        {/* No hover on touch, so dropdown children are listed inline beneath
            their parent rather than hidden behind a second tap. */}
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="border-b border-black/[0.06] py-4">
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={isNavItemActive(link, activeId) ? 'true' : undefined}
                className={cn(
                  'group flex items-center justify-between gap-4 font-display text-[1.375rem] font-normal transition-colors duration-400 ease-premium',
                  isNavItemActive(link, activeId)
                    ? 'text-gold-700'
                    : 'text-night hover:text-gold-700',
                )}
              >
                {link.label}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-gold-500/60 transition-transform duration-400 ease-premium group-hover:translate-x-1 group-hover:text-gold-700"
                  aria-hidden="true"
                />
              </a>

              {link.children && (
                <ul className="mt-3 space-y-2 border-l border-gold-500/30 pl-4">
                  {link.children.map((child) => (
                    <li key={child.href + child.label}>
                      <a
                        href={child.href}
                        onClick={(event) => handleNavClick(event, child.href)}
                        aria-current={activeId === child.id ? 'true' : undefined}
                        className={cn(
                          'block text-[0.9375rem] transition-colors duration-300 ease-premium',
                          activeId === child.id
                            ? 'text-gold-700'
                            : 'text-ink-soft hover:text-gold-700',
                        )}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-black/[0.07] px-6 py-6">
        <Button
          href="#contact"
          variant="primary"
          size="md"
          className="w-full"
          onClick={onClose}
          icon={ArrowRight}
        >
          Let&apos;s Talk
        </Button>

        <a
          href={SITE.headOffice.tel.href}
          className="mt-4 flex items-center justify-center gap-2 text-[0.8125rem] text-ink-soft transition-colors duration-400 hover:text-gold-700"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {SITE.headOffice.tel.label}
        </a>
      </div>
    </div>
  );
}
