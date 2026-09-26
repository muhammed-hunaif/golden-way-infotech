import PageBanner from '@/components/layout/PageBanner';
import trainingBanner from '@/assets/training/training-banner.jpg';
import Training from '@/sections/Training';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/** Training & talent development — the second half of the organization. */
export default function TrainingPage() {
  usePageMeta(
    'Training',
    'Structured training that runs parallel to client project delivery, taught by practitioners working on live engagements.',
  );

  return (
    <>
      <PageBanner
        eyebrow="Training"
        watermark="Training"
        image={trainingBanner}
        overlay="strong"
        title={
          <>
            Taught by the people
            <span className="text-gradient-gold"> running the projects.</span>
          </>
        }
        description="Trainers and developers here carry active industry backgrounds, which is what keeps instruction tied to how technology work is actually planned and delivered."
      />

      <Training />
      <CTA />
    </>
  );
}
