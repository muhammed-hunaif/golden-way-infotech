import { memo } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/cn';

/** One hub in the Global Technology & Talent Network. */
function LocationCard({ location, isActive, onActivate }) {
  const { city, region, role, contribution, isHeadOffice } = location;

  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className={cn(
        'group w-full rounded-sm border p-6 text-left transition-all duration-500 ease-premium md:p-7',
        isActive
          ? 'border-gold-500/60 bg-white/[0.06] shadow-lift'
          : 'border-white/10 bg-white/[0.02] hover:border-gold-500/35 hover:bg-white/[0.05]',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <MapPin
              className={cn(
                'h-4 w-4 transition-colors duration-500 ease-premium',
                isActive ? 'text-gold-400' : 'text-gold-500/60',
              )}
              strokeWidth={1.7}
              aria-hidden="true"
            />
            <h3 className="font-display text-[1.5rem] font-semibold leading-none text-white">
              {city}
            </h3>
          </div>
          <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/45">
            {region}
          </p>
        </div>

        {isHeadOffice && (
          <span className="shrink-0 rounded-sm border border-gold-500/40 px-2.5 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-gold-300">
            Head Office
          </span>
        )}
      </div>

      <p className="mt-5 text-[0.8125rem] font-medium text-gold-300">{role}</p>

      <div
        className={cn(
          'mt-4 h-px w-full origin-left bg-gold-500/40 transition-transform duration-700 ease-premium',
          isActive ? 'scale-x-100' : 'scale-x-0',
        )}
        aria-hidden="true"
      />

      <p className="mt-4 text-[0.875rem] leading-[1.8] text-white/60">{contribution}</p>
    </button>
  );
}

export default memo(LocationCard);
