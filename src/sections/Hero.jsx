import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { SITE } from '@/config/site';
import Button from '@/components/common/Button';
import { ROUTES } from '@/config/navigation';
import heroImage from '@/assets/hero/hero-team.png';

export default function Hero() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll('[data-hero]'), { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero="overline"]', { opacity: 0, y: 14, duration: 0.8 })
        .from('[data-hero="line"]', { opacity: 0, y: 34, duration: 1.1, stagger: 0.14 }, '-=0.45')
        .from('[data-hero="lead"]', { opacity: 0, y: 18, duration: 0.9 }, '-=0.7')
        .from('[data-hero="cta"]', { opacity: 0, y: 14, duration: 0.75 }, '-=0.6');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      data-nav-tone="dark"
      // Height only from `lg`, for the same reason <Section> gates it: an iPad in
      // portrait is 820 x 1180, so `82svh` would reserve far more height than the
      // copy needs and split the leftover above and below it.
      //
      // The `pt` stays ahead of the fixed 80px navbar that overlays this section
      // — that is clearance, not decoration, so it does not scale away.
      className="relative isolate flex items-center overflow-hidden bg-night pb-16 pt-28 md:pt-36 lg:landscape:min-h-[82svh]"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Decorative: the headline beside it already says what this is, so it
            carries an empty alt rather than a description that would repeat the
            copy to anyone listening.

            The crop is taken from the supplied artwork's right-hand side — the
            left half had the headline, tagline, lead paragraph and a button baked
            into the picture, and rendering live text over that would have shown
            everything twice. */}
        <img
          src={heroImage}
          alt=""
          // The supplied frame is landscape (1400 x 764), so a wide hero crops it
          // only slightly top and bottom. 42% keeps the seated faces and the
          // whiteboard in view rather than drifting down to the table.
          className="h-full w-full object-cover object-[50%_42%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Small screens: the copy sits over the middle of the picture, so more
            of it has to give way — but 65% still reads as a photograph rather
            than a dark panel with a faint image behind it. */}
        <div className="absolute inset-0 bg-night/65 lg:hidden" />

        {/* Large screens: dark only where the copy actually sits, then falling
            away fast — clear of the scrim by roughly three quarters across. The
            earlier ramp held 50% opacity out to 70% of the frame, which dimmed
            the whole photograph to hide text occupying a third of it. */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.74) 26%, rgba(17,17,17,0.34) 52%, rgba(17,17,17,0.08) 78%, rgba(17,17,17,0) 100%)',
          }}
        />

        {/* Top edge: a soft dark band under the see-through navbar, so its white
            links stay readable over the bright right-hand side of the photo. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/70 to-transparent" />

        {/* Hands off to the dark band below with no visible edge. */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
      </div>

      <div className="container">
        <div className="max-w-2xl">
          <p data-hero="overline" className="eyebrow text-gold-300">
            {SITE.tagline}
          </p>

          <h1 className="mt-8 text-display-lg font-normal text-white">
            <span data-hero="line" className="block">
              Building Technology.
            </span>
            <span data-hero="line" className="display-accent block text-gold-200">
              Empowering People.
            </span>
          </h1>

          <p
            data-hero="lead"
            className="mt-8 max-w-lg text-[0.9375rem] leading-[1.9] text-white/75 md:text-base"
          >
            A Dubai-headquartered technology and training company delivering software, cloud,
            cybersecurity, AI and design solutions, and the training that puts skilled people
            behind them.
          </p>

          {/* Two actions, stacking below `sm`. The wrapper carries the reveal
              rather than each button, so the pair arrives as one gesture. */}
          <div data-hero="cta" className="mt-11 flex flex-wrap items-center gap-4">
            <Button to={ROUTES.services} variant="primary" size="lg">
              Explore Services
            </Button>
            <Button to={ROUTES.contact} variant="outline" size="lg">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
