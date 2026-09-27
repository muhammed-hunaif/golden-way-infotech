import { cn } from '@/lib/cn';

/**
 * Standard section heading block: eyebrow, display heading, lead copy.
 * `tone` switches the palette for dark sections; `align` handles centred layouts.
 */
export default function SectionTitle({
  overline,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  className,
  titleClassName,
}) {
  const isDark = tone === 'dark';
  const isCentered = align === 'center';

  return (
    <div className={cn('max-w-3xl', isCentered && 'mx-auto text-center', className)}>
      {overline && (
        <div className={cn('mb-5', isCentered && 'text-center')} data-reveal>
          <span className={cn('eyebrow', isDark && 'text-gold-400')}>{overline}</span>
        </div>
      )}

      <Heading
        className={cn(
          'text-display-sm md:text-display-md',
          isDark ? 'text-white' : 'text-night',
          titleClassName,
        )}
        data-reveal
      >
        {title}
      </Heading>

      {description && (
        <p
          className={cn(
            'mt-6 max-w-prose',
            isCentered && 'mx-auto',
            isDark ? 'text-white/65' : 'text-ink-soft',
          )}
          data-reveal
        >
          {description}
        </p>
      )}
    </div>
  );
}
