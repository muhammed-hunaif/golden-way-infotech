import { cn } from '@/lib/cn';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const TONES = {
  cream: 'bg-cream text-ink',
  white: 'bg-white text-ink',
  night: 'bg-night-gradient text-white',
  charcoal: 'bg-charcoal text-white',
};

/**
 * Section shell used by every page section.
 *
 * Owns four things so individual sections do not repeat them: the semantic
 * <section> + heading anchor, the vertical rhythm, the GSAP scroll reveal applied
 * to any descendant carrying `data-reveal`, and the full-screen sizing.
 *
 * From `lg` up, every section fills the viewport so the page reads as one screen
 * per topic. The sizing is `min-h`, never a fixed height: a section with more
 * content than fits — Services, Contact — grows past the fold rather than
 * clipping or scrolling internally. Short sections centre in the space instead.
 *
 * Below `lg` the full-height rule is dropped, and that is deliberate. Centring
 * content in a viewport only looks considered when the viewport is roughly as
 * wide as it is tall. An iPad in portrait is 820 x 1180, so a short section
 * centred in it leaves around 330px of dead space above *and* below — the
 * section stops reading as full-bleed and starts reading as an accident. Phones
 * are worse again. Below `lg` a section is simply as tall as its content plus
 * the standard rhythm.
 */
export default function Section({
  id,
  tone = 'cream',
  children,
  className,
  containerClassName,
  stagger = 0.09,
  ariaLabel,
  ariaLabelledby,
  // Opt out of the full-screen rule. A section whose content is short by nature
  // — the closing call to action — gains nothing from filling a viewport; it
  // just gets its own height back as dead space above and below. An explicit
  // prop rather than a class override, because `cn` is a plain joiner with no
  // conflict resolution: passing `lg:min-h-0` would leave both classes on the
  // element and let stylesheet order pick the winner.
  fullHeight = true,
}) {
  const scopeRef = useGsapReveal({ stagger });

  return (
    <section
      id={id}
      ref={scopeRef}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      // `scroll-mt-20` tracks the 80px navbar, same figure as `--nav-height`.
      // Both exist because this one covers anchors that land on a <Section>
      // element itself; keep them in step or headings jump under the bar.
      //
      // `justify-center` on a flex column is what centres short content without
      // pinning it: unlike `items-center` on a row, an over-tall child still
      // grows the box downward instead of overflowing it in both directions.
      // `overflow-hidden` clips the decorative bleeds sections use. Note it also
      // makes the section a scroll container, which silently stops
      // `position: sticky` working anywhere inside — a section that ever needs a
      // sticky child has to opt out of this class, not just add another one:
      // `cn` is a plain joiner with no conflict resolution.
      className={cn(
        'relative flex scroll-mt-20 flex-col justify-center overflow-hidden',
        fullHeight && 'lg:landscape:min-h-[100svh]',
        TONES[tone] ?? TONES.cream,
        className,
      )}
    >
      {/* `w-full` because a flex column would otherwise size this to its content
          and the container's `mx-auto` would have nothing to centre within. */}
      <div className={cn('section-padding container w-full', containerClassName)}>{children}</div>
    </section>
  );
}
