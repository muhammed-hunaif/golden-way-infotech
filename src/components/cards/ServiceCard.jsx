import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Card for a single service. Content stays short here — the full profile
 * description is shown in <ServiceModal />, opened by activating the card.
 *
 * A rounded, hairline-bordered card after the reference theme's service
 * cards: icon, title, a one-line key point, a short summary and an explore
 * affordance. It lifts slightly on hover because it genuinely is a control.
 */
function ServiceCard({ service, onSelect }) {
  const { name, category, keyPoint, summary, icon: Icon } = service;

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      aria-label={`${name}: read the full description`}
      className="group flex h-full w-full flex-col rounded-2xl border border-black/[0.08] bg-white p-7 text-left transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card md:p-8"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600 transition-colors duration-400 ease-premium group-hover:bg-gold-500 group-hover:text-night">
        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
      </span>

      <p className="label-caps mt-6 text-ink-muted">{category}</p>

      <h3 className="mt-2 font-display text-[1.375rem] font-bold leading-snug text-night md:text-[1.5rem]">
        {name}
      </h3>

      <p className="mt-1.5 text-[0.8125rem] font-medium text-gold-700">{keyPoint}</p>

      <p className="mt-4 text-[0.875rem] leading-[1.75] text-ink-soft">{summary}</p>

      {/* `mt-auto` pins this to the foot of the card. Summaries differ in
          length, so without it the affordance sits at a different height in
          every card of the row. */}
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
