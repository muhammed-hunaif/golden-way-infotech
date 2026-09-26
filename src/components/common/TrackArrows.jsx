import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const ARROW_BASE =
  'inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-400 ease-premium';

/** One arrow. Disabled at the end of the track rather than wrapping. */
function Arrow({ direction, onClick, disabled, label }) {
  const Icon = direction === 'previous' ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        ARROW_BASE,
        disabled
          ? 'cursor-not-allowed border-white/10 text-white/25'
          : 'border-white/20 text-white hover:border-gold-500 hover:bg-gold-500 hover:text-night',
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

/**
 * Previous/next arrows for a track from `useScrollTrack`, for dark sections.
 * `noun` names one card for the arrows' accessible labels.
 */
export default function TrackArrows({ canScroll, onStep, noun = 'item' }) {
  return (
    <div className="flex shrink-0 items-center">
      <div className="flex gap-2">
        <Arrow
          direction="previous"
          onClick={() => onStep(-1)}
          disabled={!canScroll.previous}
          label={`Previous ${noun}`}
        />
        <Arrow
          direction="next"
          onClick={() => onStep(1)}
          disabled={!canScroll.next}
          label={`Next ${noun}`}
        />
      </div>
    </div>
  );
}
