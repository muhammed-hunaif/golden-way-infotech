import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import ServiceModal from '@/components/common/ServiceModal';
import Pagination from '@/components/common/Pagination';

/** Two rows of three on a desktop — enough to judge the set without scrolling past it. */
const PAGE_SIZE = 6;

/** Technology & Service Capabilities — filterable, paginated grid of the 17 services. */
export default function Services() {
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
    () => filteredServices.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filteredServices, currentPage],
  );

  // Stable identity keeps memoised cards from re-rendering on filter changes.
  const handleSelect = useCallback((service) => setSelectedService(service), []);
  const handleClose = useCallback(() => setSelectedService(null), []);

  return (
    <>
      <Section id="services" tone="white" ariaLabel="Technology and service capabilities">
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

        {/* Category filter.

            One row that scrolls sideways on a phone, wrapping only from `md`.
            Seven chips wrap to three ragged lines on a 375px screen and push the
            service grid a long way down the page; a single scrolling row keeps
            the filter one line tall at every width and reads as a set you move
            through.

            The negative margin with matching padding lets the row bleed to the
            screen edges inside the padded container, so a chip is never clipped
            mid-word at the edge of the viewport. `no-scrollbar` hides the bar
            itself — the partially visible next chip is the affordance. */}
        <div
          className="no-scrollbar -mx-5 mt-12 flex snap-x gap-2.5 overflow-x-auto border-y border-black/[0.07] px-5 py-5 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
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
                  // A new filter is a new list; staying on page 3 of the old one
                  // would land the visitor somewhere arbitrary in it.
                  setPage(1);
                }}
                aria-pressed={isActive}
                className={cn(
                  'shrink-0 snap-start whitespace-nowrap rounded-sm border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-400 ease-premium',
                  isActive
                    ? 'border-gold-500 bg-night text-white shadow-subtle'
                    : 'border-black/10 bg-white text-ink-soft hover:border-gold-500/50 hover:text-gold-700',
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grid. Hairlines live on the tiles (top + left) and the frame is closed
            by the container (bottom + right), so interior lines never double up
            where two cells meet.

            Not the `gap-px` trick used elsewhere on the site: that paints the
            grid background through the gaps, and 17 services never fill the last
            row — the empty cells would show as grey blocks. Borders belong to
            tiles that exist. */}
        <div
          className="mt-10 grid overflow-hidden rounded-sm border-b border-r border-black/[0.08] sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-live="polite"
        >
          {visibleServices.map((service) => (
            <div key={service.id} role="listitem" className="animate-fade-in" data-reveal>
              <ServiceCard service={service} onSelect={handleSelect} />
            </div>
          ))}
        </div>

        <Pagination
          page={currentPage}
          pageCount={pageCount}
          onChange={setPage}
          label="Service pages"
        />

        <p className="mt-10 max-w-prose text-[0.875rem] leading-[1.8] text-ink-muted" data-reveal>
          Across each area, work is grounded in applied project experience rather than theoretical
          service descriptions alone. Select any service to read its full capability description.
        </p>
      </Section>

      <ServiceModal service={selectedService} onClose={handleClose} />
    </>
  );
}
