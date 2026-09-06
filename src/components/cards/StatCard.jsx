import { memo } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

/**
 * A single figure from "Golden Way Infotech — By The Numbers".
 * The value counts up once the card enters the viewport.
 */
function StatCard({ stat, index }) {
  const { value, suffix, label, icon: Icon } = stat;
  const { elementRef, display } = useCountUp(value, { duration: 2 + index * 0.12 });

  return (
    <div ref={elementRef} className="group relative px-2 py-8 text-center sm:px-4">
      <Icon
        className="mx-auto mb-5 h-5 w-5 text-gold-500/70 transition-colors duration-500 ease-premium group-hover:text-gold-400"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <p className="text-gradient-gold font-display text-[2.75rem] font-semibold leading-none tracking-tight sm:text-5xl lg:text-[3.5rem]">
        <span aria-hidden="true">
          {display}
          {suffix}
        </span>
        {/* Screen readers get the final figure, not the animating one. */}
        <span className="sr-only">
          {value.toLocaleString('en-US')}
          {suffix}
        </span>
      </p>

      <p className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/55">
        {label}
      </p>
    </div>
  );
}

export default memo(StatCard);
