import { useEffect, useRef } from 'react';
import { ArrowRight, Phone, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scroll';
import { NAV_LINKS } from '@/config/navigation';
import { SITE } from '@/config/site';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';

/**
 * Full-screen navigation panel for tablet and mobile.
 * Slides in from the right, locks background scroll, closes on Escape, and
 * returns focus to the trigger when dismissed.
 */
export default function MobileMenu({ isOpen, onClose, activeId }) {
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
      className={cn('fixed inset-0 z-[60] lg:hidden', !isOpen && 'pointer-events-none')}
      inert={!isOpen}
    >
      <div
        className={cn(
          'absolute inset-0 bg-night/60 backdrop-blur-sm transition-opacity duration-500 ease-premium',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal={isOpen ? 'true' : undefined}
        aria-label="Site navigation"
        className={cn(
          'absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-gold-500/20 bg-night-gradient transition-transform duration-500 ease-premium',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Logo variant="light" markClassName="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white transition-colors duration-400 ease-premium hover:border-gold-400/60 hover:text-gold-300"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={cn(
                    'group flex items-center justify-between gap-4 border-b border-white/[0.07] py-4 font-display text-[1.375rem] font-medium transition-colors duration-400 ease-premium',
                    activeId === link.id ? 'text-gold-400' : 'text-white/85 hover:text-gold-300',
                  )}
                  style={{ transitionDelay: isOpen ? `${index * 30}ms` : '0ms' }}
                >
                  {link.label}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-gold-500/50 transition-transform duration-400 ease-premium group-hover:translate-x-1 group-hover:text-gold-400"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
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
            className="mt-4 flex items-center justify-center gap-2 text-[0.8125rem] text-white/60 transition-colors duration-400 hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.headOffice.tel.label}
          </a>
        </div>
      </div>
    </div>
  );
}
