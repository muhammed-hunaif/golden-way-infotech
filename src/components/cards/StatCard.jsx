import { memo } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

/**
 * A single figure from "Golden Way Infotech — By The Numbers": a large dark
 * number with its suffix in gold, and a short label beneath.
 * The value counts up once the card enters the viewport.
 */
function StatCard({ stat, index }) {
  const { value, suffix, label } = stat;
  const { elementRef, display } = useCountUp(value, { duration: 2 + index * 0.12 });

  return (
    <div ref={elementRef} className="px-2 text-center sm:px-4">
      <p className="font-display text-[2.75rem] font-bold leading-none tracking-tight text-night sm:text-5xl lg:text-[3.5rem]">
        <span aria-hidden="true">
          {display}
          <span className="text-gold-500">{suffix}</span>
        </span>
        {/* Screen readers get the final figure, not the animating one. */}
        <span className="sr-only">
          {value.toLocaleString('en-US')}
          {suffix}
        </span>
      </p>

      <p className="mt-3 text-ink-soft">{label}</p>
    </div>
  );
}

export default memo(StatCard);
