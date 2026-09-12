import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { SITE } from '@/config/site';
import Button from '@/components/common/Button';
import HeroVideo from '@/components/common/HeroVideo';

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
      // One unhurried rise, nothing else. A hero that is already carrying moving
      // film does not need its type to move as well — the entrance settles and
      // then stays put.
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero="overline"]', { opacity: 0, y: 14, duration: 0.8 })
        .from('[data-hero="line"]', { opacity: 0, y: 34, duration: 1.1, stagger: 0.14 }, '-=0.45')
        .from('[data-hero="lead"]', { opacity: 0, y: 18, duration: 0.9 }, '-=0.7')
        .from('[data-hero="cta"]', { opacity: 0, y: 14, duration: 0.75, stagger: 0.1 }, '-=0.6');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      // Height only from `lg`, for the same reason <Section> gates it: an iPad in
      // portrait is 820 x 1180, so `82svh` would reserve ~920px for ~430px of
      // copy and split the leftover evenly above and below. Below `lg` the hero
      // is simply its content plus padding.
      //
      // The `pt` stays ahead of the fixed 80px navbar that overlays this section
      // — that is clearance, not decoration, so it does not scale away.
      className="relative isolate flex items-center overflow-hidden bg-night pb-16 pt-24 md:pt-28 lg:min-h-[82svh]"
      aria-label="Introduction"
    >
      <HeroVideo />

      <div className="container">
        {/* Deliberately narrow. The measure is what makes a hero read as calm:
            the copy holds one column on the left and the film is simply allowed
            to be visible to the right of it, rather than being boxed, framed or
            partnered with a second column of content. */}
        <div className="max-w-2xl">
          {/* The same `.eyebrow` every section uses via <SectionTitle>, with
              the gold the rest of the site switches to on a dark ground. */}
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
            className="mt-8 max-w-lg text-[0.9375rem] leading-[1.9] text-white/65 md:text-base"
          >
            A Dubai-headquartered technology and training company delivering software, cloud,
            cybersecurity, AI and design solutions — and the training that puts skilled people
            behind them.
          </p>

          <div className="mt-11">
            <span data-hero="cta" className="inline-flex">
              <Button href="#services" variant="primary" size="lg">
                Explore Services
              </Button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
