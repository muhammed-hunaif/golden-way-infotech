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
 * A top-level navigation item with a wide dark dropdown panel: the label,
 * intro and Explore link on the left, and the child links in gold-ruled
 * columns on the right.
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
          'flex items-center gap-1.5 py-6 font-display text-[0.875rem] font-medium uppercase leading-relaxed tracking-[0.06em] transition-colors duration-300',
          isLight
            ? cn('hover:text-gold-700', isActive || isOpen ? 'text-gold-700' : 'text-night')
            : 'text-white',
        )}
      >
        {link.label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-300', isOpen && 'rotate-180')}
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </button>

      {/* Always mounted, hidden with `invisible` rather than unmounted, so the
          panel is already laid out when it is shown. `inert` while closed keeps
          its links out of the tab order, and `pointer-events-none` stops the
          hidden panel from swallowing clicks meant for the page beneath it.

          It sits flush under the bar, after the reference theme's mega menu:
          one dark panel, an intro column on the left over a faint angled mark,
          and the links in ruled columns on the right. */}
      <div
        inert={!isOpen}
        className={cn(
          // `pt` covers the bar's bottom padding and border with a transparent
          // strip that belongs to the item, so the panel sits flush under the
          // bar and the pointer can cross to it without the menu closing.
          'absolute inset-x-0 top-full z-10 pt-[calc(0.5rem+1px)] transition-opacity duration-200',
          isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
      >
        <div className="relative grid overflow-hidden bg-night shadow-[0_24px_60px_-20px_rgba(17,17,17,0.45)] md:grid-cols-[2fr_3fr]">
          {/* Decorative angled mark behind the intro column. */}
          <span
            className="pointer-events-none absolute -left-10 top-0 h-full w-64 bg-gold-500/[0.07]"
            style={{ clipPath: 'polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)' }}
            aria-hidden="true"
          />

          <div className="relative px-8 py-10 xl:px-12">
            <p className="font-display text-[1.75rem] font-bold leading-tight text-white">
              {link.label}
            </p>
            {link.intro && <p className="mt-4 max-w-sm text-white/70">{link.intro}</p>}
            <AppLink
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/60 px-5 py-2.5 font-display text-[0.8125rem] font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-night"
            >
              Explore
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>

          <ul className="relative grid content-start gap-x-10 gap-y-7 px-8 py-10 sm:grid-cols-2 xl:pr-12">
            {link.children.map((child) => {
              const isCurrent = isChildCurrent(child.to, location);

              return (
                <li key={child.to}>
                  <AppLink
                    to={child.to}
                    onClick={() => setIsOpen(false)}
                    aria-current={isCurrent ? 'page' : undefined}
                    className="group/item block border-t border-gold-500/50 pt-4"
                  >
                    <span
                      className={cn(
                        'flex items-center gap-2 font-display text-[1.0625rem] font-semibold transition-colors duration-200 group-hover/item:text-gold-300',
                        isCurrent ? 'text-gold-300' : 'text-white',
                      )}
                    >
                      {child.label}
                      <ArrowRight
                        className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                    {child.hint && (
                      <span className="mt-1.5 block text-[0.8125rem] leading-snug text-white/55">
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
