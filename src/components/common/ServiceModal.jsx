import { useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import Button from '@/components/common/Button';
import { ROUTES } from '@/config/navigation';

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Frontend-only detail dialog carrying a service's full profile description.
 *
 * Accessibility: rendered as a modal dialog, focus moves in on open, is trapped
 * while open, Escape closes, and focus returns to the trigger on close.
 */
export default function ServiceModal({ service, onClose }) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);
  const isOpen = Boolean(service);

  useLockBodyScroll(isOpen);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector('button')?.focus();
    }, 40);

    return () => {
      window.clearTimeout(timer);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const { name, category, keyPoint, description, icon: Icon } = service;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
      role="presentation"
      onKeyDown={handleKeyDown}
    >
      <div
        className="fixed inset-0 animate-fade-in bg-night/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative z-10 max-h-[90vh] w-full max-w-2xl animate-fade-in overflow-y-auto rounded-t-lg border border-gold-500/25 bg-white shadow-lift sm:rounded-sm"
      >
        <div className="sticky top-0 flex items-start justify-between gap-6 border-b border-black/[0.07] bg-white/95 px-6 py-5 backdrop-blur md:px-9 md:py-7">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600">
              <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <p className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {category}
              </p>
              <h2
                id="service-modal-title"
                className="mt-1.5 font-display text-2xl font-bold text-night md:text-[1.75rem]"
              >
                {name}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="-mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-ink-muted transition-colors duration-300 hover:bg-black/5 hover:text-night"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 py-7 md:px-9 md:py-9">
          <p className="font-semibold text-gold-700">{keyPoint}</p>

          <p className="mt-6 text-ink-soft">{description}</p>

          <div className="mt-9 flex flex-col gap-3 border-t border-black/[0.07] pt-7 sm:flex-row">
            <Button
              to={ROUTES.contact}
              variant="primary"
              size="md"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Enquire About This Service
            </Button>
            <Button variant="outlineDark" size="md" onClick={onClose} className="w-full sm:w-auto">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
