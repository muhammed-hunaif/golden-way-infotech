import { EMERGING_INTRO, EMERGING_TECHNOLOGIES } from '@/data/emergingTech';
import { useScrollTrack } from '@/hooks/useScrollTrack';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import TrackArrows from '@/components/common/TrackArrows';

/**
 * Emerging Technologies — the four domains as a horizontal track.
 *
 * The track is a native scroll container with snap points, and the arrows
 * simply scroll it by one card. That keeps every input working the way the
 * platform already does it — trackpad swipe, touch drag, keyboard scrolling,
 * the scrollbar itself — with the arrows as the one addition rather than a
 * replacement.
 */
export default function EmergingTechnologies() {
  const { trackRef, canScroll, scrollByCards } = useScrollTrack();

  return (
    <Section id="emerging-technologies" tone="night" ariaLabel="Emerging technologies">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          tone="dark"
          overline="Emerging Technologies"
          title={
            <>
              Turning operational data into
              <span className="text-gradient-gold"> insight and automation.</span>
            </>
          }
          description={EMERGING_INTRO}
        />

        {/* Arrows beside the title. On phones they drop under
            it; on desktop they sit on the title's baseline at the right. */}
        <div data-reveal>
          <TrackArrows
            canScroll={canScroll}
            onStep={scrollByCards}
            noun="technology"
          />
        </div>
      </div>

      {/* The track. `scrollbar-none` hides the bar since the arrows and the
          counter are the visible position; the track still scrolls natively.
          Each card is a fixed fraction of the track so three show on desktop
          and the fourth is a step to the right — with all four visible the
          arrows would have nothing to do. */}
      <ul
        ref={trackRef}
        className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
        aria-label="Emerging technology domains"
      >
        {EMERGING_TECHNOLOGIES.map((tech) => (
          <li
            key={tech.id}
            className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-sm border border-white/10 bg-night transition-colors duration-500 ease-premium hover:bg-charcoal-light sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            data-reveal
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={tech.image}
                alt=""
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              />
            </div>

            <div className="p-6 md:p-7">
              <tech.icon
                className="h-5 w-5 text-gold-500 transition-colors duration-500 ease-premium group-hover:text-gold-400"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-[1.25rem] font-semibold text-white">
                {tech.title}
              </h3>
              <p className="mt-2 font-caps text-[0.75rem] font-medium uppercase tracking-[0.12em] text-gold-500/80">
                {tech.keyPoint}
              </p>
              <p className="mt-4 text-[0.8125rem] leading-[1.8] text-white/55">
                {tech.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
