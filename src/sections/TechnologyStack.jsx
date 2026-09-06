import { APPLIED_TECHNOLOGIES, TECHNOLOGY_GROUPS, TECH_MARQUEE } from '@/data/technologies';
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
        description="Application logic, structured enterprise data, and responsive browser interfaces — the layers the company profile names as its working stack."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TECHNOLOGY_GROUPS.map((group, index) => (
          <article
            key={group.id}
            className="card-surface group relative flex flex-col p-8 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift md:p-9"
            data-reveal
          >
            <span
              className="font-display text-[0.8125rem] font-semibold text-gold-500"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-4 font-display text-[1.375rem] font-semibold leading-snug text-night">
              {group.title}
            </h3>
            <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {group.note}
            </p>

            <span className="mt-6 block h-px w-full bg-black/[0.07]" aria-hidden="true" />

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-gold-500/25 bg-gold-50/60 px-3 py-1.5 text-[0.8125rem] font-medium text-gold-800 transition-colors duration-500 ease-premium group-hover:border-gold-500/40"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[0.875rem] leading-[1.8] text-ink-soft">{group.description}</p>
          </article>
        ))}
      </div>

      {/* Technologies named elsewhere in the profile */}
      <div className="mt-14" data-reveal>
        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Also applied across projects and training
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {APPLIED_TECHNOLOGIES.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-black/[0.09] bg-white px-3.5 py-2 text-[0.8125rem] text-ink-soft transition-colors duration-400 ease-premium hover:border-gold-500/50 hover:text-gold-700"
            >
              {tech}
            </li>
          ))}
        </ul>
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
                key={`${tech}-${index}`}
                className="whitespace-nowrap font-display text-[1.25rem] font-medium text-black/25 transition-colors duration-500 hover:text-gold-600 md:text-[1.5rem]"
              >
                {tech}
                <span className="ml-10 text-gold-500/50">·</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
