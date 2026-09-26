import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { NAV_LINKS } from '@/config/navigation';
import { isSamePage, splitTo } from '@/lib/routes';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import AppLink from '@/components/common/AppLink';

/** Matches the panel's 300ms fade, rounded down so the scroll starts as it lands. */
const CLOSE_DURATION = 280;

/**
 * Navigation panel for tablet and mobile.
 *
 * A full-screen dark sheet that fades in beneath the see-through header, so the
 * header's logo and hamburger (animated into an X while open) sit on top of it
 * and close it again. <Navbar /> forces its dark colours while this is open.
 *
 * Items with children are accordions: tapping the row folds its links open
 * beneath it, one group at a time. The group for the current page starts open.
 *
 * `offsetTop` is the live header height, measured by <Navbar />, used to start
 * the list below the header.
 *
 * Links carry `scrollDelay` because closing the panel is what releases the
 * body scroll lock, and that release lands one render later.
 */
export default function MobileMenu({ isOpen, onClose, location, offsetTop = 0 }) {
  const panelRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  useLockBodyScroll(isOpen);

  // Each time the menu opens, start with the current page's group unfolded.
  useEffect(() => {
    if (!isOpen) return;
    const current = NAV_LINKS.find(
      (link) => link.children && isSamePage(link.to, location.pathname),
    );
    setExpandedId(current?.id ?? null);
  }, [isOpen, location.pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(
      () => panelRef.current?.querySelector('a, button')?.focus(),
      320,
    );

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  return (
    // `inert` (not aria-hidden) while closed: it removes the panel from both the
    // tab order and the accessibility tree, so its links are never reachable.
    <div
      id="mobile-menu"
      ref={panelRef}
      aria-label="Site navigation"
      inert={!isOpen}
      style={{ paddingTop: offsetTop }}
      className={cn(
        'fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-night text-white transition-all duration-300 ease-premium lg:hidden',
        isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
      )}
    >
      {/* One soft gold glow, the same accent the dark sections use. */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(184,134,45,0.22) 0%, rgba(17,17,17,0) 70%)',
        }}
        aria-hidden="true"
      />

      <nav
        className={cn(
          'relative flex-1 px-6 pb-10 pt-6 transition-transform duration-300 ease-premium sm:px-8',
          isOpen ? 'translate-y-0' : '-translate-y-3',
        )}
        aria-label="Mobile"
      >
        <ul className="border-t border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive = isSamePage(link.to, location.pathname);
            const isExpanded = expandedId === link.id;
            const groupId = `mobile-group-${link.id}`;

            return (
              <li key={link.id} className="border-b border-white/10">
                {link.children ? (
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : link.id)}
                    aria-expanded={isExpanded}
                    aria-controls={groupId}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 py-5 text-left text-[1.375rem] font-semibold transition-colors duration-300',
                      isActive || isExpanded ? 'text-gold-300' : 'text-white',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 transition-transform duration-300',
                        isExpanded ? 'rotate-180 text-gold-300' : 'text-white/60',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <AppLink
                    to={link.to}
                    onClick={onClose}
                    scrollDelay={CLOSE_DURATION}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group flex items-center justify-between gap-4 py-5 text-[1.375rem] font-semibold transition-colors duration-300',
                      isActive ? 'text-gold-300' : 'text-white hover:text-gold-300',
                    )}
                  >
                    {link.label}
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-300"
                      aria-hidden="true"
                    />
                  </AppLink>
                )}

                {link.children && (
                  // Grid-rows 0fr -> 1fr animates to the content's natural height
                  // without measuring it.
                  <div
                    id={groupId}
                    inert={!isExpanded}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-premium',
                      isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <ul className="min-h-0 overflow-hidden">
                      {link.children.map((child, index) => {
                        const { hash } = splitTo(child.to);
                        const isCurrent =
                          isSamePage(child.to, location.pathname) && hash === location.hash;

                        return (
                          <li key={child.to} className={cn(index === 0 && 'pt-1', 'last:pb-5')}>
                            <AppLink
                              to={child.to}
                              onClick={onClose}
                              scrollDelay={CLOSE_DURATION}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={cn(
                                'flex items-center gap-3 rounded-md px-4 py-3 text-base transition-colors duration-200',
                                isCurrent
                                  ? 'bg-white/[0.06] text-gold-300'
                                  : 'text-white/75 hover:bg-white/[0.04] hover:text-white',
                              )}
                            >
                              <span
                                className={cn(
                                  'h-1.5 w-1.5 shrink-0 rounded-full',
                                  isCurrent ? 'bg-gold-300' : 'bg-gold-500/60',
                                )}
                                aria-hidden="true"
                              />
                              {child.label}
                            </AppLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
