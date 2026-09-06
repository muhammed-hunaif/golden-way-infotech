import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '@/config/site';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

/** Closing call to action, immediately above the footer. */
export default function CTA() {
  return (
    <Section
      id="cta"
      tone="night"
      ariaLabel="Get in touch"
      containerClassName="py-20 md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(184,134,45,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,45,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p
          className="flex items-center justify-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-400"
          data-reveal
        >
          <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
          {SITE.tagline}
        </p>

        <h2 className="mt-7 text-display-sm text-white md:text-display-md" data-reveal>
          Technology delivery and practical learning,
          <span className="text-gradient-gold"> under one organization.</span>
        </h2>

        <p
          className="mx-auto mt-7 max-w-xl text-[0.9375rem] leading-[1.9] text-white/60"
          data-reveal
        >
          Whether you are planning a technology initiative or building career-ready skills, the
          Dubai head office and three India hubs are ready to talk.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-reveal
        >
          <Button href="#contact" variant="primary" size="lg" icon={ArrowRight}>
            Let&apos;s Talk
          </Button>
          <Button
            href={SITE.headOffice.tel.href}
            variant="outline"
            size="lg"
            icon={Phone}
            iconPosition="left"
          >
            {SITE.headOffice.tel.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
