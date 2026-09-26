import { useEffect, useState } from 'react';

/**
 * Reports whether the page region behind the fixed navbar is `'dark'` or
 * `'light'`, so the see-through bar can switch between white and dark links.
 *
 * Regions declare their ground with `data-nav-tone="dark" | "light"` (<Section>
 * sets it from its `tone`). The probe line is the vertical middle of the bar;
 * the innermost tagged region crossing it wins, so a dark strip inside a light
 * footer is honoured. Reads are throttled through requestAnimationFrame and
 * state only changes when the answer flips.
 *
 * `headerRef` is the bar; `routeKey` re-runs the check after navigation, when
 * the page underneath is replaced without any scroll event.
 */
export function useNavTone(headerRef, routeKey) {
  const [tone, setTone] = useState('dark');

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const header = headerRef.current;
      const probe = header ? header.offsetHeight / 2 : 40;

      let next = 'dark';
      for (const region of document.querySelectorAll('[data-nav-tone]')) {
        const rect = region.getBoundingClientRect();
        // Document order puts nested regions after their parents, so the last
        // match is the innermost one.
        if (rect.top <= probe && rect.bottom > probe) next = region.dataset.navTone;
      }

      setTone(next);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [headerRef, routeKey]);

  return tone;
}
