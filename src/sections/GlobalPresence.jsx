import { useCallback, useState } from 'react';
import { LOCATIONS } from '@/data/locations';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import PresenceMap from '@/components/common/PresenceMap';
import LocationCard from '@/components/cards/LocationCard';

/** Global Technology & Talent Network — four hubs, one operating standard. */
export default function GlobalPresence() {
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const handleSelect = useCallback((id) => setActiveId(id), []);

  return (
    <Section id="global-presence" tone="night" ariaLabel="Global presence">
      <SectionTitle
        tone="dark"
        overline="Our Global Presence"
        title={
          <>
            A connected network, not a collection of
            <span className="text-gradient-gold"> separate offices.</span>
          </>
        }
        description="Anchored by its Dubai headquarters and supported by three technology centres across India, the organization moves projects, professionals, and practical training across borders with the same operational discipline in every location."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className="relative" data-reveal>
          <div className="rounded-sm border border-white/10 bg-white/[0.02] p-4 sm:p-6">
            <PresenceMap activeId={activeId} onSelect={handleSelect} />
          </div>

          <p className="mt-5 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-white/35">
            Four hubs · 30+ countries served
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {LOCATIONS.map((location) => (
            <li key={location.id} data-reveal>
              <LocationCard
                location={location}
                isActive={activeId === location.id}
                onActivate={() => handleSelect(location.id)}
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-14 max-w-3xl text-[0.875rem] leading-[1.85] text-white/50" data-reveal>
        Rather than functioning as isolated branches, each hub contributes a distinct capability to
        the wider organization, allowing client work and learner development to draw on specialized
        strength from wherever it is needed.
      </p>
    </Section>
  );
}
