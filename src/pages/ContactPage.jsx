import PageBanner from '@/components/layout/PageBanner';
import contactBanner from '@/assets/contact/contact-banner.jpg';
import Contact from '@/sections/Contact';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/** Head office, India hubs, and the enquiry form. */
export default function ContactPage() {
  usePageMeta(
    'Contact',
    'Reach the Dubai head office or the technology centres in Chennai, Bangalore and Kochi.',
  );

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        watermark="Contact"
        image={contactBanner}
        overlay="strong"
        imagePosition="50% 20%"
        title={
          <>
            The Dubai head office and three India hubs
            <span className="text-gradient-gold"> are ready to talk.</span>
          </>
        }
        description="Whether you are planning a technology initiative or building career-ready skills, start here."
      />

      <Contact />
      <CTA action={false} />
    </>
  );
}
