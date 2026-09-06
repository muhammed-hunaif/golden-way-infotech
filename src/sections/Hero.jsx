import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { SITE } from '@/config/site';
import Button from '@/components/common/Button';
import NetworkGraphic from '@/components/common/NetworkGraphic';

const HERO_FACTS = [
  { label: 'Established', value: '2012' },
  { label: 'Head Office', value: 'Dubai, UAE' },
  { label: 'Countries Served', value: '30+' },
];

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
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-hero="overline"]', { opacity: 0, y: 16, duration: 0.7 })
        .from('[data-hero="line"]', { opacity: 0, y: 42, duration: 1, stagger: 0.12 }, '-=0.35')
        .from('[data-hero="lead"]', { opacity: 0, y: 22, duration: 0.85 }, '-=0.6')
        .from('[data-hero="cta"]', { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from(
          '[data-hero="facts"] > *',
          { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 },
          '-=0.4',
        )
        .from('[data-hero="visual"]', { opacity: 0, scale: 0.94, duration: 1.6 }, 0.25)
        .from('[data-hero="scroll"]', { opacity: 0, duration: 0.6 }, '-=0.3');

      // Slow, continuous drift on the network figure — no parallax on scroll.
      gsap.to('[data-hero="visual"] svg', {
        rotation: 6,
        duration: 34,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%',
      });

      gsap.to('[data-hero="glow"]', {
        opacity: 0.75,
        scale: 1.08,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night-gradient pb-16 pt-32 md:pb-24 md:pt-36"
      aria-label="Introduction"
    >
      {/* Ambient background: fine grid, gold glow, vignette. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(184,134,45,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,45,0.055) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />
      <div
        data-hero="glow"
        className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-[42rem] w-[42rem] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(184,134,45,0.18) 0%, rgba(17,17,17,0) 68%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-night"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          {/* Copy */}
          <div className="max-w-2xl">
            <p
              data-hero="overline"
              className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-400"
            >
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              {SITE.tagline}
            </p>

            <h1 className="mt-7 text-display-lg text-white">
              <span data-hero="line" className="block">
                Building Technology.
              </span>
              <span data-hero="line" className="text-gradient-gold block">
                Empowering People.
              </span>
            </h1>

            <p
              data-hero="lead"
              className="mt-8 max-w-xl text-[0.9375rem] leading-[1.9] text-white/65 md:text-base"
            >
              A Dubai-headquartered technology and training company founded in 2012. More than 2,500
              professionals operate across the UAE and India, supporting engagements in over 30
              countries — spanning software and web development, cloud infrastructure,
              cybersecurity, AI, data, design and digital marketing.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span data-hero="cta" className="inline-flex">
                <Button href="#services" variant="primary" size="lg" icon={ArrowRight}>
                  Explore Services
                </Button>
              </span>
              <span data-hero="cta" className="inline-flex">
                <Button href="#contact" variant="outline" size="lg">
                  Let&apos;s Talk
                </Button>
              </span>
            </div>

            <dl
              data-hero="facts"
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {HERO_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-semibold text-gold-300 sm:text-2xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div
            data-hero="visual"
            className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-none"
          >
            <NetworkGraphic />

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              aria-hidden="true"
            >
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.3em] text-gold-400/70">
                Global
              </p>
              <p className="mt-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.3em] text-gold-400/70">
                Network
              </p>
            </div>
          </div>
        </div>

        <div data-hero="scroll" className="mt-16 flex justify-center lg:mt-20">
          <a
            href="#stats"
            className="group inline-flex flex-col items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-white/35 transition-colors duration-500 hover:text-gold-300"
          >
            Scroll
            <ChevronDown
              className="h-4 w-4 animate-bounce text-gold-500/60 [animation-duration:2.4s] group-hover:text-gold-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
