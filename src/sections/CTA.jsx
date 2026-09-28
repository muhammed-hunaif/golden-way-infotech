import { ArrowRight } from 'lucide-react';
import { SITE } from '@/config/site';
import { ROUTES } from '@/config/navigation';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

/**
 * Closing call to action, immediately above the footer.
 *
 * A full-width band in the brand gold, after the reference theme's closing
 * banner: a small label, one large centred statement, and a single pill
 * button to the contact page. Faint curved lines give the flat colour some
 * texture without competing with the type.
 *
 * `action={false}` drops the button — on the Contact page it would only link
 * back to the page the visitor is already on.
 */
export default function CTA({ action = true }) {
  return (
    <Section id="cta" tone="gold" ariaLabel="Get in touch" fullHeight={false}>
      {/* A soft sheen from the top-left, so the gold reads as a surface
          rather than a flat fill. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, rgba(212,175,55,0.9) 0%, rgba(184,134,45,0) 55%, rgba(138,100,28,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative curves, stretched to the band. */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="white" strokeOpacity="0.22" strokeWidth="1.2">
          <path d="M-40 140C220 60 420 200 560 520" />
          <path d="M360 -20C300 160 420 360 700 540" />
          <path d="M-60 360C240 300 520 420 640 560" />
          <path d="M980 -40C1060 120 1260 170 1500 110" />
          <path d="M1080 540C1120 360 1280 260 1500 300" />
          <path d="M760 -30C860 80 960 120 1180 60" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-4xl py-6 text-center md:py-10">
        <p
          className="font-caps text-xs font-bold uppercase tracking-[0.2em] text-white/85"
          data-reveal
        >
          {SITE.tagline}
        </p>

        <h2
          className="mx-auto mt-6 max-w-3xl text-display-md text-white md:text-display-lg"
          data-reveal
        >
          Technology delivery and practical learning, under one organization.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-white/90" data-reveal>
          Whether you are planning a technology initiative or building career-ready skills, the
          Dubai head office and three India hubs are ready to talk.
        </p>

        {action && (
          <div className="mt-9" data-reveal>
            <Button
              to={ROUTES.contact}
              variant="light"
              size="lg"
              icon={ArrowRight}
              className="focus-visible:ring-white focus-visible:ring-offset-gold-500"
            >
              Let&rsquo;s Connect
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
