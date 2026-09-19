import { WEB_PROCESS_NOTE, WEB_PROCESS_STEPS } from '@/data/webProcess';
import { cn } from '@/lib/cn';
import { useScrollTrack } from '@/hooks/useScrollTrack';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import TrackArrows from '@/components/common/TrackArrows';

/**
 * Website Development & Maintenance — the profile's six-stage engagement flow.
 *
 * Six cards in the same dress as the Global Presence hubs, on a horizontal
 * track like the Emerging Technologies row: three in view on desktop and the
 * arrows step through the rest. A sequence read left to right suits a track
 * better than a grid — the arrows walk the visitor through the stages in the
 * order they happen.
 */
export default function WebDevelopment() {
  const { trackRef, index, canScroll, scrollByCards } = useScrollTrack();

  return (
    <Section id="web-development" tone="charcoal" ariaLabel="Website development and maintenance">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          tone="dark"
          overline="Website Development & Maintenance"
          title={
            <>
              From requirements to
              <span className="text-gradient-gold"> ongoing maintenance.</span>
            </>
          }
          description="Every engagement starts with understanding what a business is trying to achieve online: its audience, message, page structure, and the functionality visitors will actually need."
        />

        <div data-reveal>
          <TrackArrows
            index={index}
            total={WEB_PROCESS_STEPS.length}
            canScroll={canScroll}
            onStep={scrollByCards}
            noun="stage"
          />
        </div>
      </div>

      {/* `py-4` with matching negative margins gives the featured card room to
          scale without being clipped — a scroll container clips on both axes,
          not just the one it scrolls on. */}
      <ol
        ref={trackRef}
        className="scrollbar-none -my-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-4"
        aria-label="Engagement stages"
      >
        {WEB_PROCESS_STEPS.map((step, position) => {
          // With three cards in view from `lg`, the middle one is featured:
          // 1-2-3 lifts 2, 3-4-5 lifts 4, 4-5-6 lifts 5. `index` is the first
          // card in view, so the middle is always the next one along.
          const isFeatured = position === index + 1;

          return (
            <li
              key={step.id}
              className={cn(
                'relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-sm border p-7 transition-all duration-500 ease-premium sm:w-[calc((100%-1.25rem)/2)] md:p-8 lg:w-[calc((100%-2.5rem)/3)]',
                isFeatured
                  ? 'border-gold-500/50 bg-charcoal-light lg:scale-[1.05] lg:shadow-lift'
                  : 'border-white/10 bg-night',
              )}
              data-reveal
            >
              {/* Top rule: gold on the featured card, faint on the rest. */}
              <span
                className={cn(
                  'absolute inset-x-0 top-0 h-px transition-colors duration-500 ease-premium',
                  isFeatured ? 'bg-gold-500' : 'bg-white/15',
                )}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    'display-accent text-[2.25rem] leading-none transition-colors duration-500 ease-premium md:text-[2.5rem]',
                    isFeatured ? 'text-gold-400' : 'text-gold-500/50',
                  )}
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <span
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ease-premium',
                    isFeatured
                      ? 'border-gold-500 bg-gold-500 text-night'
                      : 'border-white/10 text-gold-500',
                  )}
                >
                  <step.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.375rem] font-normal leading-snug text-white">
                {/* The visible number is decorative, so the order is restated here
                  for anyone listening rather than looking. */}
                <span className="sr-only">{`Stage ${step.step}: `}</span>
                {step.title}
              </h3>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p
                  className={cn(
                    'text-[0.8125rem] leading-[1.8]',
                    isFeatured ? 'text-white/75' : 'text-white/55',
                  )}
                >
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* The closing note sits under a full-width rule rather than inside its own
          outlined box — it is a footnote to the sequence, not a seventh stage. */}
      <div className="mt-16 border-t border-white/10 pt-8" data-reveal>
        <p className="mx-auto max-w-3xl text-center text-[0.875rem] leading-[1.85] text-white/60">
          {WEB_PROCESS_NOTE}
        </p>
      </div>
    </Section>
  );
}
