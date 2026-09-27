import { GraduationCap } from 'lucide-react';
import { TRAINING_AUDIENCE, TRAINING_INTRO, TRAINING_PILLARS } from '@/data/training';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { ROUTES } from '@/config/navigation';

/**
 * Training positioning. Everything stated here comes from the company profile —
 * no course durations, fees, certifications, or placement claims are made,
 * because the source does not state any.
 */
export default function Training() {
  return (
    <Section id="training" tone="cream" ariaLabel="Training">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionTitle
            overline="Training & Talent Development"
            title={
              <>
                Learn Through
                <span className="text-gradient-gold"> Real Projects.</span>
              </>
            }
            description={TRAINING_INTRO}
          />

          <div
            className="mt-10 rounded-sm border border-gold-500/25 bg-white p-7 shadow-subtle md:p-8"
            data-reveal
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600">
              <GraduationCap className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>

            <p className="mt-6 text-ink-soft">
              This dual structure allows the organization to serve businesses seeking practical
              technology implementation while equipping individuals with career-ready skills.
              Trainers and developers bring active, current industry backgrounds, keeping technical
              instruction tied closely to applied, real-world practice.
            </p>

            <h3 className="mt-8 font-caps text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Who it is for
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TRAINING_AUDIENCE.map((audience) => (
                <li
                  key={audience}
                  className="rounded-sm border border-black/[0.09] px-3.5 py-2 text-[0.8125rem] text-ink-soft"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8" data-reveal>
            <Button to={ROUTES.contact} variant="outlineDark" size="md">
              Training Enquiries
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:content-start">
          {TRAINING_PILLARS.map((pillar, index) => (
            <li
              key={pillar.id}
              className="card-surface group flex flex-col p-7 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift md:p-8"
              data-reveal
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600">
                  <pillar.icon
                    className="h-[1.125rem] w-[1.125rem]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="font-display text-[0.8125rem] font-semibold text-black/15 transition-colors duration-500 ease-premium group-hover:text-gold-500"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.25rem] font-semibold leading-snug text-night">
                {pillar.title}
              </h3>
              <p className="mt-3 text-ink-soft">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
