import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
        .from('[data-hero="cta"]', { opacity: 0, y: 14, duration: 0.75, stagger: 0.1 }, '-=0.6')
        .from('[data-hero="scroll"]', { opacity: 0, duration: 0.8 }, '-=0.4');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      // Not a full viewport: at `100svh` the copy block is far shorter than the
      // box it is centred in, and the leftover height splits evenly above and
      // below it — which is exactly where the dead space at the top and bottom
      // came from. `78svh` sizes the section nearer its content while still
      // filling most of the fold. The `pt` stays ahead of the fixed 80px navbar
      // that overlays this section; it is clearance, not decoration.
      className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-night pb-16 pt-24 md:min-h-[82svh] md:pt-28"
      aria-label="Introduction"
    >
      <HeroVideo />

      <div className="container">
        {/* Deliberately narrow. The measure is what makes a hero read as calm:
            the copy holds one column on the left and the film is simply allowed
            to be visible to the right of it, rather than being boxed, framed or
            partnered with a second column of content. */}
        <div className="max-w-2xl">
          <p
            data-hero="overline"
            className="flex items-center gap-3 font-caps text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gold-300/90"
          >
            <span className="h-px w-10 bg-gold-400/70" aria-hidden="true" />
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

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </div>
      </div>

      {/* Pinned to the section's own bottom edge rather than sitting in the
          content flow, so it reads as a page affordance and never pushes the
          copy off-centre on a short viewport. */}
      <div
        data-hero="scroll"
        className="absolute inset-x-0 bottom-8 flex justify-center md:bottom-10"
      >
        <a
          href="#stats"
          className="group inline-flex flex-col items-center gap-2 font-caps text-[0.625rem] font-medium uppercase tracking-[0.28em] text-white/40 transition-colors duration-500 hover:text-gold-200"
        >
          Scroll
          <ChevronDown
            className="h-4 w-4 animate-bounce text-gold-400/60 [animation-duration:2.6s] group-hover:text-gold-300"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
