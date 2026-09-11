import { memo } from 'react';

/**
 * One numbered reason from "Why Choose Golden Way Infotech".
 *
 * Plain type in whitespace — no cell, no rule, no frame, no hover. Ten reasons
 * is a lot of boxes if each one gets a container, and the surrounding sections
 * already carry the site's ruled and celled treatments; this one is left to the
 * typography.
 *
 * The number sits above the title as a small gold label rather than beside it in
 * its own column, so the entries need no shared grid to stay aligned.
 */
function ReasonItem({ reason }) {
  const { number, title, description } = reason;

  return (
    <li data-reveal>
      <span
        className="display-accent block text-[0.9375rem] leading-none text-gold-600"
        aria-hidden
      >
        {number}
      </span>

      <h3 className="mt-4 font-display text-[1.25rem] font-normal leading-snug text-night md:text-[1.4375rem]">
        {/* The visible number is decorative, so the order is restated here for
            anyone listening rather than looking. */}
        <span className="sr-only">{`Reason ${number}: `}</span>
        {title}
      </h3>

      <p className="mt-3 max-w-prose text-[0.875rem] leading-[1.85] text-ink-soft">{description}</p>
    </li>
  );
}

export default memo(ReasonItem);
