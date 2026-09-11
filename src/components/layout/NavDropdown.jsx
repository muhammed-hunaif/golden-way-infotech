import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

const CLOSE_DELAY = 120;

/**
 * A top-level navigation item with a dropdown panel.
 *
 * Opens on hover for pointer users and on click/Enter for everyone else, so it
 * works without a mouse. Escape closes it and returns focus to the trigger;
 * moving focus or the pointer out of the item closes it too. The short close
 * delay stops the panel vanishing while the pointer crosses the gap to it.
 */
export default function NavDropdown({ link, isActive, activeId, onNavigate }) {
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
    <li
      ref={containerRef}
      className="relative"
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
          'relative flex items-center gap-1.5 rounded-sm px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-400 ease-premium hover:text-gold-700 xl:px-4',
          isActive || isOpen ? 'text-gold-700' : 'text-ink-soft',
        )}
      >
        {link.label}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-300 ease-premium',
            isOpen && 'rotate-180',
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold-500 transition-transform duration-500 ease-premium xl:inset-x-4',
            isActive ? 'scale-x-100' : 'scale-x-0',
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 pt-3">
          <ul className="min-w-[16rem] animate-fade-in overflow-hidden rounded-sm border border-gold-500/25 bg-white p-1.5 shadow-lift">
            {link.children.map((child) => {
              const isChildActive = activeId === child.id;

              return (
                <li key={child.href + child.label}>
                  <a
                    href={child.href}
                    onClick={(event) => {
                      setIsOpen(false);
                      onNavigate(event, child.href);
                    }}
                    aria-current={isChildActive ? 'true' : undefined}
                    className={cn(
                      'block rounded-sm px-3.5 py-2.5 transition-colors duration-300 ease-premium hover:bg-gold-50',
                      isChildActive && 'bg-gold-50',
                    )}
                  >
                    <span
                      className={cn(
                        'block text-[0.8125rem] font-medium',
                        isChildActive ? 'text-gold-700' : 'text-night',
                      )}
                    >
                      {child.label}
                    </span>
                    {child.hint && (
                      <span className="mt-0.5 block text-[0.6875rem] text-ink-muted">
                        {child.hint}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}
