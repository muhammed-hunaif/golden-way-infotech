import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * State for a horizontally scrolling track driven by previous/next arrows.
 *
 * Attach `trackRef` to a native scroll container whose children are the
 * cards. Position is read back from the scroll offset rather than held in
 * state, so the index and the arrow states stay honest however the visitor
 * moved — arrow, trackpad, touch, keyboard, or the scrollbar itself.
 */
export function useScrollTrack() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [canScroll, setCanScroll] = useState({ previous: false, next: true });

  const cardWidth = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = cardWidth();
    const maxScroll = track.scrollWidth - track.clientWidth;
    setIndex(step ? Math.round(track.scrollLeft / step) : 0);
    setCanScroll({
      previous: track.scrollLeft > 4,
      next: track.scrollLeft < maxScroll - 4,
    });
  }, [cardWidth]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollByCards = useCallback(
    (count) => {
      trackRef.current?.scrollBy({ left: cardWidth() * count, behavior: 'smooth' });
    },
    [cardWidth],
  );

  return { trackRef, index, canScroll, scrollByCards };
}
