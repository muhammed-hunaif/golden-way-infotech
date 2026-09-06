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
 * Owns three things so individual sections do not repeat them: the semantic
 * <section> + heading anchor, the vertical rhythm, and the GSAP scroll reveal
 * applied to any descendant carrying `data-reveal`.
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
}) {
  const scopeRef = useGsapReveal({ stagger });

  return (
    <section
      id={id}
      ref={scopeRef}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn('relative scroll-mt-24 overflow-hidden', TONES[tone] ?? TONES.cream, className)}
    >
      <div className={cn('section-padding container', containerClassName)}>{children}</div>
    </section>
  );
}
