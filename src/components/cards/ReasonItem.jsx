import { memo } from 'react';
import { Plus } from 'lucide-react';

/**
 * One numbered reason from "Why Choose Golden Way Infotech", as an accordion row.
 *
 * The title is the control: a full-width button carrying the number, the title,
 * and a plus that rotates into a cross when the row is open. The description
 * sits in a grid track that animates between `0fr` and `1fr`, which is the one
 * way to animate to an unknown height in CSS without measuring — no JS layout
 * reads, and it respects `prefers-reduced-motion` through the transition
 * utilities like every other motion on the site.
 *
 * The panel stays in the DOM when closed (hidden via `aria-hidden` and
 * `visibility`), so `aria-controls` always points at something real.
 */
function ReasonItem({ reason, isOpen, onToggle }) {
  const { id, number, title, description } = reason;
  const panelId = `reason-panel-${id}`;
  const buttonId = `reason-button-${id}`;

  return (
    <li className="border-b border-black/[0.08]" data-reveal>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center gap-5 py-6 text-left transition-colors duration-400 ease-premium hover:text-gold-700 md:gap-8 md:py-7"
        >
          <span
            className={`display-accent w-8 shrink-0 text-[1rem] leading-none transition-colors duration-400 ease-premium md:w-10 md:text-[1.125rem] ${
              isOpen ? 'text-gold-600' : 'text-gold-600/60 group-hover:text-gold-600'
            }`}
            aria-hidden="true"
          >
            {number}
          </span>

          <span className="flex-1 font-display text-[1.125rem] font-normal leading-snug text-night md:text-[1.375rem]">
            {/* The visible number is decorative, so the order is restated here
                for anyone listening rather than looking. */}
            <span className="sr-only">{`Reason ${number}: `}</span>
            {title}
          </span>

          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ease-premium ${
              isOpen
                ? 'rotate-45 border-gold-500 bg-gold-500 text-night'
                : 'border-black/[0.12] text-ink-soft group-hover:border-gold-500 group-hover:text-gold-600'
            }`}
            aria-hidden="true"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-500 ease-premium ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className={`overflow-hidden ${isOpen ? '' : 'invisible'}`}>
          {/* Indented past the number column so the copy lines up under the
              title, and capped at a prose measure so it does not run the full
              row width on wide screens. */}
          <p className="max-w-prose pb-7 pl-[3.25rem] text-[0.9375rem] leading-[1.85] text-ink-soft md:pb-8 md:pl-[4.5rem]">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default memo(ReasonItem);
