import { EMERGING_INTRO, EMERGING_TECHNOLOGIES } from '@/data/emergingTech';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';

/** Dark section highlighting the four emerging-technology domains. */
export default function EmergingTechnologies() {
  return (
    <Section id="emerging-technologies" tone="night" ariaLabel="Emerging technologies">
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

      {/* Four domains, one row from `lg`. With the visual gone the section runs
          full width, and a four-column row keeps the set reading as one group —
          two wide columns would stretch each card's two lines of copy past a
          comfortable measure. The `gap-px` over a light ground is what draws the
          hairline rules between cells; there are no borders on the cells. */}
      <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {EMERGING_TECHNOLOGIES.map((tech) => (
          <li
            key={tech.id}
            className="group bg-night p-6 transition-colors duration-500 ease-premium hover:bg-charcoal-light md:p-7"
            data-reveal
          >
            <tech.icon
              className="h-5 w-5 text-gold-500 transition-colors duration-500 ease-premium group-hover:text-gold-400"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-5 font-display text-[1.25rem] font-normal text-white">
              {tech.title}
            </h3>
            <p className="mt-2 font-caps text-[0.75rem] font-medium uppercase tracking-[0.12em] text-gold-500/80">
              {tech.keyPoint}
            </p>
            <p className="mt-4 text-[0.8125rem] leading-[1.8] text-white/55">{tech.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
