import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger, gsap, prefersReducedMotion } from '@/lib/gsap';
import { EMERGING_INTRO, EMERGING_TECHNOLOGIES } from '@/data/emergingTech';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import NetworkGraphic from '@/components/common/NetworkGraphic';

/** Dark section highlighting the four emerging-technology domains. */
export default function EmergingTechnologies() {
  const visualRef = useRef(null);

  useLayoutEffect(() => {
    const visual = visualRef.current;
    if (!visual || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      // Connections draw themselves in, then nodes settle — once, on entry.
      const edges = gsap.utils.toArray('[data-edge]');
      const nodes = gsap.utils.toArray('[data-node]');

      gsap.set(edges, { opacity: 0 });
      gsap.set(nodes, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: visual, start: 'top 78%', once: true },
      });

      tl.to(edges, { opacity: 1, duration: 1.1, stagger: 0.05, ease: 'power2.out' }).to(
        nodes,
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.05, ease: 'power2.out' },
        '-=0.7',
      );

      gsap.to('[data-ring]', {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
    }, visual);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <Section id="emerging-technologies" tone="night" ariaLabel="Emerging technologies">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <SectionTitle
            tone="dark"
            overline="Emerging Technologies"
            title={
              <>
                Turning operational data into
                <span className="text-gradient-gold"> insight and automation.</span>
              </>
            }
            description={EMERGING_INTRO}
          />

          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {EMERGING_TECHNOLOGIES.map((tech) => (
              <li
                key={tech.id}
                className="group bg-night p-6 transition-colors duration-500 ease-premium hover:bg-charcoal-light md:p-7"
                data-reveal
              >
                <tech.icon
                  className="h-5 w-5 text-gold-500 transition-colors duration-500 ease-premium group-hover:text-gold-400"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-[1.25rem] font-semibold text-white">
                  {tech.title}
                </h3>
                <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-gold-500/80">
                  {tech.keyPoint}
                </p>
                <p className="mt-4 text-[0.8125rem] leading-[1.8] text-white/55">
                  {tech.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div ref={visualRef} className="relative mx-auto aspect-square w-full max-w-[30rem]">
          <NetworkGraphic showRings />
        </div>
      </div>
    </Section>
  );
}
