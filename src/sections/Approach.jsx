import { APPROACH_CONTEXT, APPROACH_STEPS } from '@/data/approach';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';

/**
 * Our Approach to Mobility & Web Solutions.
 *
 * An editorial numbered list rather than a timeline. Five steps is too few to
 * justify a drawn spine and markers, and that machinery carried its own custom
 * ScrollTrigger, a per-segment scrub, and a mobile layout that had to differ from
 * the desktop one. A ruled list says the same thing — ordered stages — with a
 * hairline per row and nothing to animate, so it now uses the shared <Section>
 * reveal like every other section on the site.
 */
export default function Approach() {
  return (
    <Section id="approach" tone="white" ariaLabel="Our approach to mobility and web solutions">
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

      {/* `border-t` on the list plus `border-b` on each row: the rules read as
          one ruled table rather than five detached cards, and the last row still
          closes the set. */}
      <ol className="mt-14 border-t border-black/[0.07]">
        {APPROACH_STEPS.map((step) => (
          <li
            key={step.id}
            className="group grid gap-x-10 gap-y-3 border-b border-black/[0.07] py-8 transition-colors duration-500 ease-premium hover:bg-cream/60 md:grid-cols-[7rem_1fr] md:py-10"
            data-reveal
          >
            {/* Large and faint, the same device the Why Us list and the stack
                cards use — it marks the order without competing with the title
                the way a solid badge did. */}
            <span
              className="display-accent select-none text-[2.5rem] leading-none text-gold-500/30 transition-colors duration-500 ease-premium group-hover:text-gold-600/70 md:text-[3.25rem]"
              aria-hidden="true"
            >
              {step.number}
            </span>

            <div>
              <h3 className="font-display text-[1.375rem] font-normal leading-snug text-night md:text-[1.625rem]">
                {/* The visible number is decorative, so the order is restated
                    here for anyone listening rather than looking. */}
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
    </Section>
  );
}
