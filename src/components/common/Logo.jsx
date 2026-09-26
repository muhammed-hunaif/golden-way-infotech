import { memo } from 'react';
import { cn } from '@/lib/cn';

/**
 * Official Golden Way Infotech LLC lockup.
 *
 * Two variants, because the supplied artwork only works on one kind of ground:
 *
 * - `tone="light"` (default) — the artwork as supplied, for light surfaces.
 * - `tone="dark"` — a knockout for dark surfaces. The lockup's strapline is dark
 *   ink (rows 75-83 of the source, 93% of it below luminance 110), so on a dark
 *   bar it vanishes entirely. The knockout recolours *only* those nine rows to
 *   cream; the gold marks are the supplied pixels, untouched.
 *
 * Both are resolved from disk rather than hard-imported, so better artwork can be
 * dropped in without touching any code. Within each variant the best file wins:
 *
 *   1. `.svg`      — vector; sharp at every size, forever
 *   2. `@3x.png`   — 1185 x 300 or larger
 *   3. `@2x.png`   — 790 x 200 or larger
 *   4. `.png`      — the current 395 x 100 files
 *
 * What ships today is (4), and at 395 x 100 it is genuinely too small to enlarge
 * — see the note in `src/assets/README.md`. That is a limit of the artwork, not
 * of the rendering, and nothing here can compensate for it.
 */
const FILES = import.meta.glob('../../assets/logo-golden-way*.{svg,png}', {
  eager: true,
  import: 'default',
});

/** Lower sorts first. Anything unrecognised ranks last but still works. */
function rank(path) {
  if (path.endsWith('.svg')) return 0;
  if (path.includes('@3x')) return 1;
  if (path.includes('@2x')) return 2;
  return 3;
}

/**
 * Split by variant before ranking. Without this the knockout would compete with
 * the standard artwork for the same slot, and which one won would come down to
 * filesystem order.
 */
function pick(isKnockout) {
  const paths = Object.keys(FILES)
    .filter((path) => path.includes('-knockout') === isKnockout)
    .sort((a, b) => rank(a) - rank(b));

  return paths.length ? FILES[paths[0]] : undefined;
}

const STANDARD = pick(false);
const KNOCKOUT = pick(true);

/**
 * Intrinsic aspect of the lockup, used only to reserve the box so the header does
 * not reflow while the image decodes. Every candidate is the same artwork at a
 * different resolution, so one ratio covers them all — update these two numbers
 * if replacement artwork is ever cropped differently.
 */
const ASPECT_W = 395;
const ASPECT_H = 100;

function Logo({ className, markClassName, priority = false, tone = 'light' }) {
  // Falls back to the standard artwork rather than rendering a broken image if
  // the knockout file is ever removed from the assets folder.
  const src = (tone === 'dark' ? KNOCKOUT : STANDARD) ?? STANDARD;

  return (
    <span className={cn('inline-flex select-none items-center', className)}>
      <img
        src={src}
        alt="Golden Way Infotech LLC, Mobility Solutions For Your Business"
        width={ASPECT_W}
        height={ASPECT_H}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        // Height is owned entirely by `markClassName` — a default `h-*` here as
        // well would collide, and Tailwind resolves collisions by stylesheet
        // order, not by the order classes appear in the attribute.
        className={cn('w-auto max-w-full object-contain', markClassName ?? 'h-10')}
      />
    </span>
  );
}

export default memo(Logo);
