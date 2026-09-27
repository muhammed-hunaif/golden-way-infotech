import { useLayoutEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { SITE } from '@/config/site';
import { scrollToSection } from '@/lib/scroll';
import heroImage from '@/assets/hero/hero-dubai-team.png';

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
        .from('[data-hero="cue"]', { opacity: 0, y: -10, duration: 0.8 }, '-=0.4');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      data-nav-tone="dark"
      // Full-screen photo. The `pt` keeps the copy clear of the fixed navbar
      // that overlays the top of this section.
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night pb-20 pt-32"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Decorative: the headline already says what this is. */}
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-[50%_40%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* An even dark tint over the whole photo so the white headline reads
            anywhere on it, deepening slightly on the left behind the copy. */}
        <div className="absolute inset-0 bg-night/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-night/10 to-transparent" />
      </div>

      <div className="container">
        <div className="max-w-4xl lg:pl-[12%]">
          <p
            data-hero="overline"
            className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-gold-300 md:text-base"
          >
            {SITE.tagline}
          </p>

          <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            <span data-hero="line" className="block">
              Building Technology.
            </span>
            <span data-hero="line" className="block">
              Empowering People.
            </span>
          </h1>

          <p data-hero="lead" className="mt-6 max-w-xl text-white/80">
            A Dubai-headquartered technology and training company delivering software, cloud,
            cybersecurity, AI and design solutions, and the training that puts skilled people behind
            them.
          </p>

          {/* A button, not an `#stats` link, so the scroll leaves the URL clean. */}
          <button
            type="button"
            data-hero="cue"
            onClick={() => scrollToSection('stats')}
            className="group mt-12 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-400/70 text-gold-300 transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-night"
            aria-label="Scroll to company figures"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
