import { Compass, Eye } from 'lucide-react';
import { VISION_MISSION } from '@/config/site';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';

export default function VisionMission() {
  return (
    <Section id="vision-mission" tone="cream" ariaLabel="Vision and mission">
      <SectionTitle
        align="center"
        overline="Vision & Mission"
        title={
          <>
            Where technology and human capability
            <span className="text-gradient-gold"> advance in step.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Vision — light card */}
        <article
          className="card-surface group relative flex flex-col p-9 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift md:p-12"
          data-reveal
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600">
            <Eye className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </span>

          <h3 className="mt-8 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
            Vision
          </h3>

          <blockquote className="mb-10 mt-5">
            <p className="font-display text-[1.5rem] font-medium leading-[1.5] text-night md:text-[1.75rem]">
              &ldquo;{VISION_MISSION.vision}&rdquo;
            </p>
          </blockquote>

          <span
            className="mt-auto block h-px w-16 bg-gold-500 transition-[width] duration-700 ease-premium group-hover:w-28"
            aria-hidden="true"
          />
        </article>

        {/* Mission — dark card */}
        <article
          className="group relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-night-gradient p-9 shadow-card transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lift md:p-12"
          data-reveal
        >
          <span
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-60 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(184,134,45,0.22) 0%, rgba(17,17,17,0) 70%)',
            }}
            aria-hidden="true"
          />

          <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/35 bg-white/[0.04] text-gold-400">
            <Compass className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </span>

          <h3 className="mt-8 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-400">
            Mission
          </h3>

          <blockquote className="mb-10 mt-5">
            <p className="font-display text-[1.5rem] font-medium leading-[1.5] text-white md:text-[1.75rem]">
              &ldquo;{VISION_MISSION.mission}&rdquo;
            </p>
          </blockquote>

          <span
            className="mt-auto block h-px w-16 bg-gold-500 transition-[width] duration-700 ease-premium group-hover:w-28"
            aria-hidden="true"
          />
        </article>
      </div>
    </Section>
  );
}
