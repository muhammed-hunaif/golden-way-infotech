import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Card for a single service. Content stays short here — the full profile
 * description is shown in <ServiceModal />, opened by activating the card.
 */
function ServiceCard({ service, onSelect }) {
  const { name, category, keyPoint, summary, icon: Icon } = service;

  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onSelect(service)}
        aria-label={`${name} — read the full description`}
        className="card-surface group flex h-full w-full flex-col p-7 text-left hover:-translate-y-1 hover:border-gold-400/70 hover:shadow-lift md:p-8"
      >
        <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600 transition-colors duration-500 ease-premium group-hover:border-gold-500/50 group-hover:bg-gold-100">
          <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
        </span>

        <p className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {category}
        </p>

        <h3 className="mt-2 font-display text-[1.375rem] font-normal leading-snug text-night">
          {name}
        </h3>

        <p className="mt-3 inline-flex w-fit items-center gap-2 text-[0.8125rem] font-medium text-gold-700">
          <span className="h-px w-4 bg-gold-500" aria-hidden="true" />
          {keyPoint}
        </p>

        <p className="mt-4 text-[0.875rem] leading-[1.75] text-ink-soft">{summary}</p>

        <span className="mt-auto flex items-center gap-2 pt-7 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-night transition-colors duration-400 ease-premium group-hover:text-gold-700">
          Explore
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-400 ease-premium group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </button>
    </article>
  );
}

export default memo(ServiceCard);
