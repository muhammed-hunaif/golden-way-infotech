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

      {/* A ruled grid, not six cards. Each stage gets a gold hairline above it —
          a start line — instead of a box around it. Six bordered panels on a dark
          ground read as six separate offers; six ruled entries read as one
          sequence, which is what this actually is. */}
      <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {WEB_PROCESS_STEPS.map((step) => (
          <li key={step.id} className="border-t border-gold-500/30 pt-6" data-reveal>
            <span className="display-accent block text-[0.9375rem] leading-none text-gold-400">
              {step.step}
            </span>

            <h3 className="mt-5 font-display text-[1.25rem] font-normal leading-snug text-white">
              {/* The visible number is decorative, so the order is restated here
                  for anyone listening rather than looking. */}
              <span className="sr-only">{`Stage ${step.step}: `}</span>
              {step.title}
            </h3>

            <p className="mt-3 text-[0.8125rem] leading-[1.8] text-white/55">{step.description}</p>
          </li>
        ))}
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
