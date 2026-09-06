import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 * Uses a single IntersectionObserver rather than scroll maths.
 */
export function useActiveSection(sectionIds, rootMargin = '-45% 0px -50% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
