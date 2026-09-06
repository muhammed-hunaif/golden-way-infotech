import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { APPROACH_CONTEXT, APPROACH_STEPS } from '@/data/approach';
import SectionTitle from '@/components/common/SectionTitle';

/**
 * Our Approach to Mobility & Web Solutions.
 *
 * A vertical timeline: the gold spine grows as the visitor scrolls and each
 * step reveals in turn. The spine is driven by a scrubbed ScrollTrigger; the
 * steps use individual once-only triggers so they never re-hide.
 */
export default function Approach() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll('[data-step]'), { opacity: 1, y: 0 });
      gsap.set(root.querySelector('[data-spine]'), { scaleY: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-spine]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '[data-timeline]',
            start: 'top 72%',
            end: 'bottom 78%',
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray('[data-step]').forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 26,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 84%', once: true },
        });

        gsap.from(step.querySelector('[data-marker]'), {
          scale: 0.4,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: step, start: 'top 84%', once: true },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={rootRef}
      className="relative scroll-mt-24 overflow-hidden bg-white"
      aria-label="Our approach to mobility and web solutions"
    >
      <div className="section-padding container">
        <SectionTitle
          overline="Our Approach"
          title={
            <>
              Mobility and web engineering that starts with
              <span className="text-gradient-gold"> your operating reality.</span>
            </>
          }
          description={APPROACH_CONTEXT}
        />

        <ol data-timeline className="relative mt-16 max-w-4xl md:mt-20">
          {/* Spine */}
          <span
            className="absolute left-[1.4375rem] top-2 hidden h-[calc(100%-3rem)] w-px bg-black/[0.08] sm:block"
            aria-hidden="true"
          >
            <span
              data-spine
              className="block h-full w-full origin-top bg-gradient-to-b from-gold-400 via-gold-500 to-gold-700"
            />
          </span>

          {APPROACH_STEPS.map((step) => (
            <li key={step.id} data-step className="relative pb-12 last:pb-0 sm:pl-20">
              <span
                data-marker
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-white font-display text-[0.875rem] font-semibold text-gold-700 shadow-subtle sm:absolute sm:left-0 sm:top-0 sm:mb-0"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="sm:pt-2.5">
                <h3 className="font-display text-[1.375rem] font-semibold leading-snug text-night md:text-[1.625rem]">
                  <span className="sr-only">{`Step ${step.number}: `}</span>
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.85] text-ink-soft">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
