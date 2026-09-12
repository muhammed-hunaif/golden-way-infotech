import { SITE } from '@/config/site';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

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

      {/* Asymmetric rather than centred: the statement holds the left and the two
          ways of acting on it sit together on the right, instead of a stack of
          centred lines ending in a row of buttons. `items-end` sets them on a
          common baseline at the foot of the block. */}
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
        <div>
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

        <div data-reveal>
          <Button href="#contact" variant="primary" size="lg">
            Let&apos;s Talk
          </Button>

          {/* The number is set as type, not as a second button. Two buttons of
              equal size ask the visitor to weigh them against each other; a
              button beside a phone number reads as "do this, or just call". */}
          <div className="mt-9 border-t border-white/10 pt-7">
            <p className="label-caps text-white/40">Or call the Dubai head office</p>
            <a
              href={SITE.headOffice.tel.href}
              className="mt-3 inline-block font-display text-[1.75rem] font-normal leading-none text-white transition-colors duration-400 ease-premium hover:text-gold-300 md:text-[2rem]"
            >
              {SITE.headOffice.tel.label}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
