import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ROUTES } from '@/config/navigation';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import ServiceCard from '@/components/cards/ServiceCard';
import ServiceModal from '@/components/common/ServiceModal';
import Pagination from '@/components/common/Pagination';

/** Two rows of three on a desktop — enough to judge the set without scrolling past it. */
const PAGE_SIZE = 6;

/**
 * Technology & Service Capabilities.
 *
 * Two modes. On the Services page it is the full set: category filter, six to a
 * page, the lot reachable. In `preview` mode — the home page — it is the first
 * six tiles and a way through to the page that holds the rest, because a filter
 * and a pager on a summary ask the visitor to work inside a section that was
 * only ever meant to introduce one.
 */
export default function Services({ preview = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [page, setPage] = useState(1);

  const filteredServices = useMemo(
    () =>
      activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter((service) => service.categoryId === activeCategory),
    [activeCategory],
  );

  const pageCount = Math.max(1, Math.ceil(filteredServices.length / PAGE_SIZE));

  // Derived, not stored: a page number held in state can outlive the list it
  // indexes — filter down to four services while on page 3 and the grid renders
  // empty. Clamping here means the view is always valid whatever the filter does.
  const currentPage = Math.min(page, pageCount);

  const visibleServices = useMemo(
    () =>
      preview
        ? SERVICES.slice(0, PAGE_SIZE)
        : filteredServices.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [preview, filteredServices, currentPage],
  );

  // Stable identity keeps memoised cards from re-rendering on filter changes.
  const handleSelect = useCallback((service) => setSelectedService(service), []);
  const handleClose = useCallback(() => setSelectedService(null), []);

  const title = (
    <SectionTitle
      overline="Technology & Service Capabilities"
      title={
        <>
          Capability areas built on
          <span className="text-gradient-gold"> applied project experience.</span>
        </>
      }
      description="Client engagements typically fall into a few connected capability areas, spanning software engineering, database technologies, cloud and cybersecurity, emerging technologies, and creative and marketing disciplines."
    />
  );

  const grid = (
    <div
      className={cn('grid gap-5 sm:grid-cols-2', !preview && 'mt-10 lg:grid-cols-3')}
      role="list"
      aria-live={preview ? undefined : 'polite'}
    >
      {visibleServices.map((service) => (
        <div key={service.id} role="listitem" className="animate-fade-in" data-reveal>
          <ServiceCard service={service} onSelect={handleSelect} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Section id="services" tone="white" ariaLabel="Technology and service capabilities">
        {preview ? (
          // Home page: the reference theme's split — the heading and the way
          // through to the full list on the left, the cards on the right.
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_2fr] lg:gap-16">
            <div>
              {title}

              <div className="mt-10" data-reveal>
                <Button to={ROUTES.services} variant="dark" size="lg">
                  View All {SERVICES.length} Services
                </Button>
                <p className="mt-4 text-[0.875rem] text-ink-muted">
                  Filter by software, database, cloud, AI, design and marketing.
                </p>
              </div>
            </div>

            {grid}
          </div>
        ) : (
          <>
            {title}

            {/* Category filter, as rounded pills.

                One row that scrolls sideways on a phone, wrapping only from `md`.
                Seven pills wrap to three ragged lines on a 375px screen and push
                the grid a long way down the page; a single scrolling row keeps
                the filter one line tall at every width.

                The negative margin with matching padding lets the row bleed to
                the screen edges inside the padded container, so a pill is never
                clipped mid-word at the edge of the viewport. */}
            <div
              className="no-scrollbar -mx-5 mt-12 flex snap-x gap-2.5 overflow-x-auto px-5 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
              role="group"
              aria-label="Filter services by category"
              data-reveal
            >
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      // A new filter is a new list; staying on page 3 of the old
                      // one would land the visitor somewhere arbitrary in it.
                      setPage(1);
                    }}
                    aria-pressed={isActive}
                    className={cn(
                      'shrink-0 snap-start whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.875rem] font-medium transition-all duration-400 ease-premium',
                      isActive
                        ? 'border-night bg-night text-white'
                        : 'border-black/10 bg-white text-ink-soft hover:border-gold-500/50 hover:text-gold-700',
                    )}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {grid}

            <Pagination
              page={currentPage}
              pageCount={pageCount}
              onChange={setPage}
              label="Service pages"
            />

            <p
              className="mt-10 max-w-prose text-[0.875rem] leading-[1.8] text-ink-muted"
              data-reveal
            >
              Across each area, work is grounded in applied project experience rather than
              theoretical service descriptions alone. Select any service to read its full capability
              description.
            </p>
          </>
        )}
      </Section>

      <ServiceModal service={selectedService} onClose={handleClose} />
    </>
  );
}
