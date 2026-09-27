import { TECHNOLOGY_GROUPS, TECH_MARQUEE } from '@/data/technologies';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';

/**
 * Core Technology Stack.
 * Groups and wording follow the company profile exactly; technologies named
 * elsewhere in the profile are listed separately rather than folded into a group.
 */
export default function TechnologyStack() {
  return (
    <Section id="technology" tone="cream" ariaLabel="Core technology stack">
      <SectionTitle
        align="center"
        overline="Core Technology Stack"
        title={
          <>
            The technology ecosystem behind
            <span className="text-gradient-gold"> every engagement.</span>
          </>
        }
        description="Application logic, structured enterprise data, and responsive browser interfaces: the layers the company profile names as its working stack."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TECHNOLOGY_GROUPS.map((group, index) => (
          <article
            key={group.id}
            className="card-surface group relative flex flex-col rounded-2xl p-8 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift md:p-9"
            data-reveal
          >
            <span className="display-accent text-[0.8125rem] text-gold-500" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-4 font-display text-[1.375rem] font-semibold leading-snug text-night">
              {group.title}
            </h3>
            <p className="mt-2 font-caps text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {group.note}
            </p>

            <span className="mt-6 block h-px w-full bg-black/[0.07]" aria-hidden="true" />

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-gold-500/25 bg-gold-50/60 px-3.5 py-1.5 text-[0.8125rem] font-medium text-gold-800 transition-colors duration-500 ease-premium group-hover:border-gold-500/40"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-ink-soft">{group.description}</p>
          </article>
        ))}
      </div>

      {/* Continuous strip — decorative, hidden from assistive technology. */}
      <div
        className="group relative -mx-5 mt-16 overflow-hidden border-y border-black/[0.07] py-6 sm:-mx-6 lg:-mx-10 xl:-mx-12"
        aria-hidden="true"
      >
        <div className="mask-fade-x flex">
          <ul className="group-hover:paused flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, index) => (
              <li
                key={`${tech.name}-${index}`}
                className="group/item flex shrink-0 items-baseline gap-3 whitespace-nowrap"
              >
                <span className="font-display text-[1.25rem] font-semibold text-black/25 transition-colors duration-500 group-hover/item:text-gold-700 md:text-[1.5rem]">
                  {tech.name}
                </span>
                {/* Where it is applied. Set well below the name so the strip
                    still reads as a list of technologies at a glance, with the
                    context available to anyone who slows down and looks. */}
                <span className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-gold-600/45 transition-colors duration-500 group-hover/item:text-gold-600">
                  {tech.use}
                </span>
                <span className="ml-7 text-gold-500/40" aria-hidden="true">
                  ·
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
