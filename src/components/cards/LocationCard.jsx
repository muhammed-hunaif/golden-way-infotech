import { memo } from 'react';

/**
 * One hub in the Global Technology & Talent Network.
 *
 * Plain type in a column, not an interactive card. It was a `<button>` that
 * drove a highlight on a decorative map, which meant four controls that did not
 * navigate anywhere and told a screen reader they were pressable. With the map
 * gone there is nothing to select, so this is simply a heading and its copy.
 *
 * The "Head Office" badge went with it: Dubai's own `role` already reads
 * "Head Office & Regional Command Center", so the badge repeated it one line
 * above itself.
 */
function LocationCard({ location }) {
  const { city, region, role, contribution } = location;

  return (
    <li className="lg:px-8 lg:first:pl-0 lg:last:pr-0" data-reveal>
      <p className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-white/40">
        {region}
      </p>

      <h3 className="mt-3 font-display text-[1.75rem] font-normal leading-none text-white">
        {city}
      </h3>

      <p className="mt-4 text-[0.8125rem] font-medium text-gold-300">{role}</p>

      <p className="mt-4 text-[0.875rem] leading-[1.8] text-white/55">{contribution}</p>
    </li>
  );
}

export default memo(LocationCard);
