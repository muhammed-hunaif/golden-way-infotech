import { LOCATIONS } from '@/data/locations';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import LocationCard from '@/components/cards/LocationCard';

/** Global Technology & Talent Network — four hubs, one operating standard. */
export default function GlobalPresence() {
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

      {/* Four columns divided by hairlines rather than four boxes. The rules
          carry the idea the section is about — one network, separated only by
          geography — where bordered cards would have read as four detached
          offices. `divide-x` applies only from `lg`, where all four sit in a
          single row; below that they stack in two columns and the vertical rules
          would fall in the wrong places. */}
      <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:divide-x lg:divide-white/10">
        {LOCATIONS.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>

      <p className="mt-16 max-w-3xl text-[0.875rem] leading-[1.85] text-white/50" data-reveal>
        Rather than functioning as isolated branches, each hub contributes a distinct capability to
        the wider organization, allowing client work and learner development to draw on specialized
        strength from wherever it is needed.
      </p>
    </Section>
  );
}
