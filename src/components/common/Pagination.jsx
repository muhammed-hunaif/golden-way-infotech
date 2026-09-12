import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const CONTROL_BASE =
  'inline-flex h-10 min-w-10 items-center justify-center rounded-sm border px-3 text-[0.8125rem] font-medium transition-colors duration-400 ease-premium';

/**
 * Page control for a filtered grid.
 *
 * Renders every page number rather than truncating with ellipses: the largest
 * set here is 17 services at 6 a page, so the count never exceeds three and
 * collapsing it would add a mechanism with nothing to do.
 *
 * Returns nothing at a single page — a control offering one destination is
 * chrome, not navigation.
 */
export default function Pagination({ page, pageCount, onChange, label = 'Pagination' }) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const isFirst = page === 1;
  const isLast = page === pageCount;

  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={isFirst}
        aria-label="Previous page"
        className={cn(
          CONTROL_BASE,
          isFirst
            ? 'cursor-not-allowed border-black/[0.06] text-ink-muted/40'
            : 'border-black/10 text-ink-soft hover:border-gold-500/50 hover:text-gold-700',
        )}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      {pages.map((number) => {
        const isCurrent = number === page;

        return (
          <button
            key={number}
            type="button"
            onClick={() => onChange(number)}
            // `aria-current="page"` is what tells a screen reader which page it
            // is on; the gold fill only says it to people who can see it.
            aria-current={isCurrent ? 'page' : undefined}
            className={cn(
              CONTROL_BASE,
              isCurrent
                ? 'border-gold-500 bg-night text-white'
                : 'border-black/10 text-ink-soft hover:border-gold-500/50 hover:text-gold-700',
            )}
          >
            {number}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={isLast}
        aria-label="Next page"
        className={cn(
          CONTROL_BASE,
          isLast
            ? 'cursor-not-allowed border-black/[0.06] text-ink-muted/40'
            : 'border-black/10 text-ink-soft hover:border-gold-500/50 hover:text-gold-700',
        )}
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
