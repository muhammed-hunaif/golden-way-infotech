import PageBanner from '@/components/layout/PageBanner';
import About from '@/sections/About';
import VisionMission from '@/sections/VisionMission';
import GlobalPresence from '@/sections/GlobalPresence';
import WhyChooseUs from '@/sections/WhyChooseUs';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/** Company: who we are, what we are building toward, where we are, why us. */
export default function AboutPage() {
  usePageMeta(
    'About Us',
    'Founded in Dubai in 2012, Golden Way Infotech combines technology delivery with practical training across four offices in the UAE and India.',
  );

  return (
    <>
      <PageBanner
        eyebrow="About Us"
        watermark="Golden Way"
        title={
          <>
            Founded in Dubai in 2012. Grown across
            <span className="text-gradient-gold"> four cities and thirty countries.</span>
          </>
        }
        description="2,500+ professionals across the UAE and India, working on client delivery and on the training that puts skilled people behind it."
      />

      {/* White rather than the section's usual cream: Vision & Mission directly
          beneath it is cream, and two cream sections in sequence read as one. */}
      <About tone="white" />
      <VisionMission />
      <GlobalPresence />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
