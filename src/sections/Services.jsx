import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import ServiceModal from '@/components/common/ServiceModal';

/** Technology & Service Capabilities — filterable grid of the 17 services. */
export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const visibleServices = useMemo(
    () =>
      activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter((service) => service.categoryId === activeCategory),
    [activeCategory],
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

        {/* Category filter */}
        <div
          className="mt-12 flex flex-wrap gap-2.5 border-y border-black/[0.07] py-5"
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
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  'rounded-sm border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-400 ease-premium',
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

        {/* Grid */}
        <div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-live="polite"
        >
          {visibleServices.map((service) => (
            <div key={service.id} role="listitem" className="animate-fade-in" data-reveal>
              <ServiceCard service={service} onSelect={handleSelect} />
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-prose text-[0.875rem] leading-[1.8] text-ink-muted" data-reveal>
          Across each area, work is grounded in applied project experience rather than theoretical
          service descriptions alone. Select any service to read its full capability description.
        </p>
      </Section>

      <ServiceModal service={selectedService} onClose={handleClose} />
    </>
  );
}
