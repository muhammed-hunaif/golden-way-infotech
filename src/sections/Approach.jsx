import { APPROACH_CONTEXT, APPROACH_STEPS } from '@/data/approach';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import approachImage from '@/assets/hero/hero-office.png';

/** The picture breaks the sequence after the second stage. */
const STEPS_BEFORE_IMAGE = 2;

/** One stage. Extracted so both lists either side of the image render identically. */
function Step({ step }) {
  return (
    <li
      className="group grid gap-x-10 gap-y-3 border-b border-white/10 py-8 transition-colors duration-500 ease-premium hover:bg-white/[0.04] md:grid-cols-[7rem_1fr] md:py-10"
      data-reveal
    >
      {/* Large and faint, the same device the Why Us list and the stack cards
          use — it marks the order without competing with the title the way a
          solid badge did. */}
      <span
        className="display-accent select-none text-[2.5rem] leading-none text-gold-500/40 transition-colors duration-500 ease-premium group-hover:text-gold-300 md:text-[3.25rem]"
        aria-hidden="true"
      >
        {step.number}
      </span>

      <div>
        <h3 className="font-display text-[1.375rem] font-semibold leading-snug text-white md:text-[1.625rem]">
          {/* The visible number is decorative, so the order is restated here for
              anyone listening rather than looking. */}
          <span className="sr-only">{`Step ${step.number}: `}</span>
          {step.title}
        </h3>
        <p className="mt-3 max-w-prose text-white/70">{step.description}</p>
      </div>
    </li>
  );
}

/**
 * Our Approach to Mobility & Web Solutions.
 *
 * An editorial numbered list rather than a timeline. Five steps is too few to
 * justify a drawn spine and markers, and that machinery carried its own custom
 * ScrollTrigger, a per-segment scrub, and a mobile layout that had to differ from
 * the desktop one. A ruled list says the same thing — ordered stages — with a
 * hairline per row and nothing to animate, so it now uses the shared <Section>
 * reveal like every other section on the site.
 *
 * The section is dark so the photograph it carries has something to sit against.
 * The picture is shown clean rather than used as a backdrop: a background has to
 * be dimmed before type can sit on it, and dimming it far enough to read five
 * stages of copy leaves nothing of the photograph worth showing.
 */
export default function Approach() {
  const leadingSteps = APPROACH_STEPS.slice(0, STEPS_BEFORE_IMAGE);
  const remainingSteps = APPROACH_STEPS.slice(STEPS_BEFORE_IMAGE);

  return (
    <Section id="approach" tone="night" ariaLabel="Our approach to mobility and web solutions">
      <SectionTitle
        tone="dark"
        overline="Our Approach"
        title={
          <>
            Mobility and web engineering that starts with
            <span className="text-gradient-gold"> your operating reality.</span>
          </>
        }
        description={APPROACH_CONTEXT}
      />

      {/* `border-t` on each list plus `border-b` on every row: the rules read as
          one ruled table rather than detached cards, and the last row of each
          run still closes the set. */}
      <ol className="mt-14 border-t border-white/10">
        {leadingSteps.map((step) => (
          <Step key={step.id} step={step} />
        ))}
      </ol>

      {/* The photograph, shown rather than used as a ground. Nothing is laid over
          it — no scrim, no tint, no gradient — so it appears exactly as the file
          does. As a background it could not: any wash dark enough to carry five
          stages of body copy necessarily changes how the picture looks, which is
          the trade that made it invisible. */}
      <div className="my-12 overflow-hidden rounded-[1.25rem]" data-reveal>
        <img
          src={approachImage}
          alt=""
          width={1000}
          height={667}
          loading="lazy"
          decoding="async"
          className="aspect-[16/7] w-full object-cover object-[50%_40%]"
        />
      </div>

      {/* A second <ol>, not a continuation of the first — the image sits between
          them as a sibling rather than inside a list, where it would be counted
          and announced as a stage of its own. `start` keeps the numbering honest
          for anything reading the markup. */}
      <ol start={STEPS_BEFORE_IMAGE + 1} className="border-t border-white/10">
        {remainingSteps.map((step) => (
          <Step key={step.id} step={step} />
        ))}
      </ol>
    </Section>
  );
}
