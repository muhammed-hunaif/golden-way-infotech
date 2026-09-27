import { memo } from 'react';

/**
 * One numbered reason from "Why Choose Golden Way Infotech", after the
 * reference theme's numbered points: a large light numeral, a short bold
 * title, and the description beneath. Always open — the grid shows every
 * reason at once, so there is nothing to expand.
 */
function ReasonItem({ reason }) {
  const { number, title, description } = reason;

  return (
    <li data-reveal>
      <span
        className="block font-display text-[3rem] font-light leading-none text-night md:text-[3.5rem]"
        aria-hidden="true"
      >
        {number}
      </span>

      <h3 className="mt-5 font-display text-[1.0625rem] font-bold leading-snug text-night">
        {/* The visible number is decorative, so the order is restated here
            for anyone listening rather than looking. */}
        <span className="sr-only">{`Reason ${number}: `}</span>
        {title}
      </h3>

      <p className="mt-3 text-ink-soft">{description}</p>
    </li>
  );
}

export default memo(ReasonItem);
