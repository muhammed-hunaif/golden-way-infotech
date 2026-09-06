import { useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger, gsap, prefersReducedMotion } from '@/lib/gsap';

const formatter = new Intl.NumberFormat('en-US');

/**
 * Counts a number up from 0 when its element scrolls into view.
 * Writes to state (not the DOM directly) so React stays the source of truth,
 * and runs exactly once per element.
 */
export function useCountUp(target, { duration = 2, start = 'top 85%' } = {}) {
  const elementRef = useRef(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? formatter.format(target) : '0');

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion()) return undefined;

    const counter = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start,
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => setDisplay(formatter.format(Math.round(counter.value))),
          onComplete: () => setDisplay(formatter.format(target)),
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(counter);
    };
  }, [target, duration, start]);

  return { elementRef, display };
}
