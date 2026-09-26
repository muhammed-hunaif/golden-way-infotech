import PageBanner from '@/components/layout/PageBanner';
import TechnologyStack from '@/sections/TechnologyStack';
import Approach from '@/sections/Approach';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/** The working stack, and the sequence every engagement runs through. */
export default function TechnologyPage() {
  usePageMeta(
    'Technology',
    'The languages, platforms and databases Golden Way Infotech builds on, and the six stages every engagement moves through.',
  );

  return (
    <>
      <PageBanner
        eyebrow="Technology"
        watermark="Technology"
        title={
          <>
            The stack behind the work, and the
            <span className="text-gradient-gold"> way the work runs.</span>
          </>
        }
        description="The languages, platforms and databases client projects are built on, and the six stages every engagement moves through from requirement to maintenance."
      />

      <TechnologyStack />
      <Approach />
      <CTA />
    </>
  );
}
