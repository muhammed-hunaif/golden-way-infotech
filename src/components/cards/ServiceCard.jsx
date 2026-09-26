import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Card for a single service. Content stays short here — the full profile
 * description is shown in <ServiceModal />, opened by activating the card.
 *
 * A tile in a hairline grid rather than a raised panel: seventeen shadowed cards
 * floating a row apart made the section read as a pile of objects. Each tile
 * draws its own top and left rule and the container closes the frame, so the
 * tiles share edges and read as one table of capabilities.
 *
 * It keeps a hover state, unlike the static sections elsewhere on the site —
 * this one genuinely is a control, and the pointer should say so.
 */
function ServiceCard({ service, onSelect }) {
  const { name, category, keyPoint, summary, icon: Icon } = service;

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      aria-label={`${name}: read the full description`}
      className="group flex h-full w-full flex-col border-l border-t border-black/[0.08] bg-white p-7 text-left transition-colors duration-400 ease-premium hover:bg-cream md:p-8"
    >
      {/* The icon carries its own weight in gold; the bordered badge around it
          was a box inside a box. */}
      <Icon
        className="h-6 w-6 shrink-0 text-gold-600 transition-colors duration-400 ease-premium group-hover:text-gold-700"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <p className="label-caps mt-6 text-ink-muted">{category}</p>

      <h3 className="mt-2.5 font-display text-[1.25rem] font-normal leading-snug text-night md:text-[1.375rem]">
        {name}
      </h3>

      <p className="mt-2 text-[0.8125rem] font-medium text-gold-700">{keyPoint}</p>

      <p className="mt-4 text-[0.875rem] leading-[1.75] text-ink-soft">{summary}</p>

      {/* `mt-auto` pins this to the foot of the tile. Summaries differ in length,
          so without it the affordance sits at a different height in every cell of
          the row. */}
      <span className="label-caps mt-auto flex items-center gap-2 pt-7 text-night transition-colors duration-400 ease-premium group-hover:text-gold-700">
        Explore
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-400 ease-premium group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

export default memo(ServiceCard);
