import { ChevronDown } from 'lucide-react';
import { WEB_PROCESS_NOTE, WEB_PROCESS_STEPS } from '@/data/webProcess';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';

/** Website Development & Maintenance — the profile's six-stage engagement flow. */
export default function WebDevelopment() {
  return (
    <Section id="web-development" tone="charcoal" ariaLabel="Website development and maintenance">
      <SectionTitle
        align="center"
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

      <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {WEB_PROCESS_STEPS.map((step, index) => (
          <li key={step.id} className="relative" data-reveal>
            <article className="group h-full rounded-sm border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold-500/45 hover:bg-white/[0.05] md:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/30 bg-white/[0.04] text-gold-400">
                  <step.icon
                    className="h-[1.125rem] w-[1.125rem]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="font-display text-[0.8125rem] font-normal text-white/20 transition-colors duration-500 ease-premium group-hover:text-gold-500"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.25rem] font-normal text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.8] text-white/55">
                {step.description}
              </p>
            </article>

            {/* Flow arrow between stages (small screens read top-to-bottom). */}
            {index < WEB_PROCESS_STEPS.length - 1 && (
              <span
                className="mx-auto flex h-6 items-center justify-center md:hidden"
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4 text-gold-500/50" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div
        className="mx-auto mt-12 max-w-3xl rounded-sm border border-gold-500/25 bg-white/[0.03] p-7 text-center md:p-8"
        data-reveal
      >
        <p className="text-[0.875rem] leading-[1.85] text-white/65">{WEB_PROCESS_NOTE}</p>
      </div>
    </Section>
  );
}
