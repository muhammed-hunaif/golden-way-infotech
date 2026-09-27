import { MapPin } from 'lucide-react';
import { SITE } from '@/config/site';
import { LOCATIONS } from '@/data/locations';
import { FOOTER_COLUMNS, ROUTES } from '@/config/navigation';
import Logo from '@/components/common/Logo';
import AppLink from '@/components/common/AppLink';
import footerImage from '@/assets/training/training-banner.jpg';

const currentYear = new Date().getFullYear();

/**
 * Chevron cut for the brand-column photo: a slanted top edge, a notch biting
 * in from the left, and a point on the right.
 */
const CHEVRON_CLIP = 'polygon(0 0, 62% 22%, 100% 58%, 62% 100%, 0 100%, 34% 58%)';

const LINK_CLASS =
  'text-[0.875rem] text-ink-soft transition-colors duration-300 ease-premium hover:text-gold-700';

/**
 * Site footer, laid out after the reference theme's: a white ground, a brand
 * column on the left (logo, statement, a chevron-cut photograph) and a grid
 * of link groups on the right under bold display headings. A quiet copyright
 * row closes the page.
 */
export default function Footer() {
  return (
    <footer data-nav-tone="light" className="relative overflow-hidden bg-white text-ink">
      <div className="h-px w-full bg-black/[0.06]" aria-hidden="true" />

      <div className="container py-12 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_2.4fr] lg:gap-16">
          {/* Brand column */}
          <div>
            {/* Matches the navbar's `sm:h-20` so the lockup is one size across
                the site. Note this is past what the 395 x 100 artwork can hold
                sharp on a retina screen — see src/assets/README.md. */}
            <AppLink
              to={ROUTES.home}
              className="inline-flex rounded-sm"
              aria-label="Golden Way Infotech LLC, home"
            >
              <Logo markClassName="h-16 w-auto sm:h-20" />
            </AppLink>

            <p className="mt-6 max-w-sm text-night">
              Technology delivery and practical training from one organization, built in Dubai since{' '}
              {SITE.established} and working across 30+ countries.
            </p>

            {/* Decorative: the statement above already says what it shows.
                Kept short so the brand column ends level with the links. */}
            <div
              className="mt-8 hidden aspect-[5/4] w-full max-w-[16rem] overflow-hidden lg:block"
              style={{ clipPath: CHEVRON_CLIP }}
              aria-hidden="true"
            >
              <img
                src={footerImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[30%_50%]"
              />
            </div>
          </div>

          <div>
            {/* The four link groups side by side, so no grid cell is left
                empty. Two per row on small screens. */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {FOOTER_COLUMNS.map((column) => (
                <nav key={column.title} aria-label={column.title}>
                  <h2 className="font-display text-[1.25rem] font-bold text-night md:text-[1.375rem]">
                    {column.title}
                  </h2>

                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <AppLink to={link.to} className={LINK_CLASS}>
                          {link.label}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            {/* Locations as a full-width strip beneath the links: each hub
                with the landmark it sits near, four across on desktop. */}
            <nav aria-label="Locations" className="mt-10 border-t border-black/[0.06] pt-8">
              <h2 className="font-display text-[1.25rem] font-bold text-night md:text-[1.375rem]">
                Locations
              </h2>

              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-4">
                {LOCATIONS.map((location) => (
                  <li key={location.id}>
                    <AppLink to={ROUTES.contact} className={LINK_CLASS}>
                      {location.isHeadOffice
                        ? `${location.city} · Head Office`
                        : `${location.city}, ${location.region.replace(', India', '')}`}
                    </AppLink>
                    <p className="mt-1 flex items-start gap-1.5 text-ink-muted">
                      <MapPin
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
                        aria-hidden="true"
                      />
                      {location.address}
                    </p>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright row. Padded clear of the fixed scroll-to-top button
          (48px, 20-32px from the corner) so it never covers the text. */}
      <div className="border-t border-black/[0.06]">
        <div className="container flex flex-col items-center justify-between gap-3 pb-24 pt-7 text-center md:flex-row md:py-7 md:pr-24 md:text-left">
          <p className="text-ink-muted">
            Copyright © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <p className="font-caps text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Dubai · Chennai · Bangalore · Kochi
          </p>
        </div>
      </div>
    </footer>
  );
}
