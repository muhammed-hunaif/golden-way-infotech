import { memo } from 'react';

/**
 * One numbered reason from "Why Choose Golden Way Infotech".
 * The number turns gold and the rule grows on hover or keyboard focus.
 */
function ReasonItem({ reason }) {
  const { number, title, description } = reason;

  return (
    <li
      className="group relative border-t border-black/[0.08] transition-colors duration-500 ease-premium first:border-t-0 hover:border-gold-500/40"
      data-reveal
    >
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 py-8 md:grid-cols-[7rem_1fr] md:gap-x-10 md:py-10">
        <span
          className="font-display text-[2.25rem] font-semibold leading-none text-black/[0.12] transition-colors duration-500 ease-premium group-hover:text-gold-500 md:text-[3.25rem]"
          aria-hidden="true"
        >
          {number}
        </span>

        <div>
          <h3 className="font-display text-[1.375rem] font-semibold leading-snug text-night md:text-[1.625rem]">
            <span className="sr-only">{`Reason ${number}: `}</span>
            {title}
          </h3>

          <span
            className="mt-4 block h-px w-0 bg-gold-500 transition-[width] duration-700 ease-premium group-hover:w-20"
            aria-hidden="true"
          />

          <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.85] text-ink-soft">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default memo(ReasonItem);
