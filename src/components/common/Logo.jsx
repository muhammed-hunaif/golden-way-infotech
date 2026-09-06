import { memo } from 'react';
import { cn } from '@/lib/cn';
import logoUrl from '@/assets/logo-golden-way.jpeg';

/**
 * Official Golden Way Infotech LLC lockup.
 *
 * The supplied artwork is a JPEG, so it carries an opaque white background.
 * Two surface treatments keep it clean either way:
 *
 * - `variant="dark"`  (logo on a light surface) — `mix-blend-multiply` drops the
 *   white ground into the cream or white behind it, leaving only the gold mark.
 * - `variant="light"` (logo on a dark surface)  — the lockup sits on a white
 *   brand plate with a thin gold rule, the standard treatment for a
 *   light-ground logo over black.
 *
 * Replacing the JPEG with a transparent PNG or SVG later means changing the
 * import above and dropping the `onDark` plate — nothing else.
 */
function Logo({ variant = 'dark', className, markClassName, priority = false }) {
  const onDark = variant === 'light';

  const image = (
    <img
      src={logoUrl}
      alt="Golden Way Infotech LLC — Mobility Solutions For Your Business"
      width={395}
      height={100}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      // Height is owned entirely by `markClassName` — keeping a default `h-*`
      // here as well would collide, and Tailwind resolves collisions by
      // stylesheet order, not by the order classes appear in the attribute.
      className={cn(
        'w-auto max-w-full object-contain',
        !onDark && 'mix-blend-multiply',
        markClassName ?? 'h-10',
      )}
    />
  );

  if (onDark) {
    return (
      <span
        className={cn(
          'inline-flex select-none items-center rounded-sm bg-white px-3 py-1.5 ring-1 ring-gold-500/30',
          className,
        )}
      >
        {image}
      </span>
    );
  }

  return <span className={cn('inline-flex select-none items-center', className)}>{image}</span>;
}

export default memo(Logo);
