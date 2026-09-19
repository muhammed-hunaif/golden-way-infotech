import { SITE } from '@/config/site';
import Section from '@/components/common/Section';

/** Closing call to action, immediately above the footer. */
export default function CTA() {
  return (
    <Section id="cta" tone="night" ariaLabel="Get in touch" fullHeight={false}>
      {/* One soft gold glow behind the action column, replacing the 64px grid
          that used to cover the whole section. A ruled background under a closing
          statement adds texture the statement does not need. */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(184,134,45,0.16) 0%, rgba(17,17,17,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* A statement only. No button and no number: the navbar carries
          "Let's Talk" at every scroll position and the Contact section directly
          above holds every way to reach the office, so this closes the page
          rather than asking again. */}
      <div className="relative max-w-3xl">
        <p className="eyebrow text-gold-400" data-reveal>
          {SITE.tagline}
        </p>

        <h2 className="mt-7 text-display-sm text-white md:text-display-md" data-reveal>
          Technology delivery and practical learning,
          <span className="text-gradient-gold"> under one organization.</span>
        </h2>

        <p className="mt-7 max-w-xl text-[0.9375rem] leading-[1.9] text-white/60" data-reveal>
          Whether you are planning a technology initiative or building career-ready skills, the
          Dubai head office and three India hubs are ready to talk.
        </p>
      </div>
    </Section>
  );
}
