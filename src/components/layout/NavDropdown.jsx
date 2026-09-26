import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { splitTo } from '@/lib/routes';
import AppLink from '@/components/common/AppLink';

const CLOSE_DELAY = 120;

/** A child is current when its page — and its section, if it names one — is open. */
function isChildCurrent(to, location) {
  const { pathname, hash } = splitTo(to);
  if (pathname !== location.pathname) return false;
  return hash ? hash === location.hash : !location.hash;
}

/**
 * A top-level navigation item with a wide dropdown panel: a dark title block
 * on the left (label, intro, Explore link) and the child links on the right.
 *
 * Opens on hover for pointer users and on click/Enter for everyone else, so it
 * works without a mouse. Escape closes it and returns focus to the trigger;
 * moving focus or the pointer out of the item closes it too. The short close
 * delay stops the panel vanishing while the pointer crosses the gap to it.
 */
export default function NavDropdown({ link, isActive, location, isLight }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimer = useRef(0);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = 0;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setIsOpen(false), CLOSE_DELAY);
  };

  useEffect(() => cancelClose, []);

  // Close when focus or a click lands outside the item.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleFocusIn = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      event.stopPropagation();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    // Not `relative`: the panel is positioned against the <nav>, so it spans the
    // full content width under the bar whichever item opened it.
    <li
      ref={containerRef}
      onMouseEnter={() => {
        cancelClose();
        setIsOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          'group relative flex items-center gap-1.5 py-4 text-base font-medium transition-colors duration-300',
          isLight
            ? cn('hover:text-gold-700', isActive || isOpen ? 'text-gold-700' : 'text-night')
            : 'text-white',
        )}
      >
        {link.label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-300', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
        <span
          className={cn(
            'absolute inset-x-0 bottom-2 h-0.5 transition-all duration-300',
            isLight ? 'bg-gold-500' : 'bg-white',
            isActive || isOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100',
          )}
          aria-hidden="true"
        />
      </button>

      {/* Always mounted, hidden with `invisible` rather than unmounted, so the
          panel is already laid out when it is shown. `inert` while closed keeps
          its links out of the tab order, and `pointer-events-none` stops the
          hidden panel from swallowing clicks meant for the page beneath it.

          The `pt-2` strip is transparent but belongs to the item, so the pointer
          can cross from the trigger to the panel without closing it. */}
      <div
        inert={!isOpen}
        className={cn(
          'absolute inset-x-0 top-full z-10 pt-2',
          isOpen ? 'visible' : 'pointer-events-none invisible',
        )}
      >
        <div className="grid overflow-hidden border border-[#E8E8E8] bg-white shadow-[0_24px_60px_-20px_rgba(17,17,17,0.28)] md:grid-cols-[2fr_3fr]">
          <div className="bg-night px-8 py-9 xl:px-10">
            <p className="text-[1.875rem] font-bold leading-tight text-white">{link.label}</p>
            {link.intro && (
              <p className="mt-4 text-[0.9375rem] leading-[1.75] text-white/70">{link.intro}</p>
            )}
            <AppLink
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="mt-7 inline-flex items-center gap-3 rounded-[5px] border border-white px-5 py-2.5 text-[0.8125rem] font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-night"
            >
              Explore
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>

          <ul className="grid content-start gap-x-6 gap-y-1 px-6 py-7 sm:grid-cols-2 xl:px-8">
            {link.children.map((child) => {
              const isCurrent = isChildCurrent(child.to, location);

              return (
                <li key={child.to}>
                  <AppLink
                    to={child.to}
                    onClick={() => setIsOpen(false)}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cn(
                      'group/item block rounded-md px-4 py-3.5 transition-colors duration-200 hover:bg-cream',
                      isCurrent && 'bg-gold-50',
                    )}
                  >
                    <span
                      className={cn(
                        'flex items-center gap-2 text-[1rem] font-semibold transition-colors duration-200 group-hover/item:text-gold-700',
                        isCurrent ? 'text-gold-700' : 'text-night',
                      )}
                    >
                      {child.label}
                      <ArrowRight
                        className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                    {child.hint && (
                      <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-muted">
                        {child.hint}
                      </span>
                    )}
                  </AppLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}
