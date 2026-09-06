import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useScrollPosition } from '@/hooks/useScrollPosition';

/** Appears after the first viewport and returns the visitor to the hero. */
export default function ScrollToTop() {
  const isVisible = useScrollPosition(720);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        })
      }
      aria-label="Back to top"
      inert={!isVisible}
      className={cn(
        'fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/40 bg-night/90 text-gold-400 shadow-lift backdrop-blur transition-all duration-500 ease-premium hover:border-gold-400 hover:text-gold-300 md:bottom-8 md:right-8',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
