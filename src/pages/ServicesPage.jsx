import PageBanner from '@/components/layout/PageBanner';
import servicesBanner from '@/assets/services/services-banner.jpg';
import Services from '@/sections/Services';
import EmergingTechnologies from '@/sections/EmergingTechnologies';
import WebDevelopment from '@/sections/WebDevelopment';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/** The full capability set, then the two areas the profile treats separately. */
export default function ServicesPage() {
  usePageMeta(
    'Services',
    'Seventeen capability areas spanning software engineering, database technologies, cloud and cybersecurity, AI and data, design and digital marketing.',
  );

  return (
    <>
      <PageBanner
        eyebrow="Services"
        watermark="Services"
        image={servicesBanner}
        overlay="strong"
        title={
          <>
            Software, cloud, data, design,
            <span className="text-gradient-gold"> and everything between.</span>
          </>
        }
        description="Seventeen areas of capability across six categories, each one drawn from the work the delivery teams are already doing. Filter by the category you need."
      />

      <Services />
      <EmergingTechnologies />
      <WebDevelopment />
      <CTA />
    </>
  );
}
