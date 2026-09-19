import { memo } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * One hub in the Global Technology & Talent Network, as a card.
 *
 * The city is the largest thing on the card because it is what a visitor
 * scanning four of them is matching against — "is there one near me?" — and
 * everything else answers the follow-up. The head office carries a gold tag
 * and a gold hairline on top; the India hubs a plain region tag and a white
 * one. That is the whole difference, so the four still read as one network.
 */
function LocationCard({ location }) {
  const { city, market, region, role, address, contribution, isHeadOffice } = location;

  return (
    <li
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-sm border bg-night p-7 transition-colors duration-500 ease-premium hover:bg-charcoal-light md:p-8',
        isHeadOffice ? 'border-gold-500/40' : 'border-white/10',
      )}
      data-reveal
    >
      {/* Top rule: gold for the head office, faint for the rest. */}
      <span
        className={cn(
          'absolute inset-x-0 top-0 h-px',
          isHeadOffice ? 'bg-gold-500' : 'bg-white/15',
        )}
        aria-hidden="true"
      />

      <p
        className={cn(
          'font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em]',
          isHeadOffice ? 'text-gold-400' : 'text-white/40',
        )}
      >
        {isHeadOffice ? 'Head Office' : region}
      </p>

      <h3 className="mt-6 font-display text-[2.25rem] font-normal leading-none text-white md:text-[2.5rem]">
        {city}
      </h3>
      <p className="mt-2 text-[0.875rem] text-white/45">{market}</p>

      <p className="mt-4 flex items-center gap-2 text-[0.8125rem] text-white/70">
        <MapPin
          className="h-3.5 w-3.5 shrink-0 text-gold-500"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <span>{address}</span>
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-[0.875rem] font-medium leading-snug text-gold-300">{role}</p>
        <p className="mt-3 text-[0.8125rem] leading-[1.8] text-white/55">{contribution}</p>
      </div>
    </li>
  );
}

export default memo(LocationCard);
