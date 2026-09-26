import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Services from '@/sections/Services';
import About from '@/sections/About';
import WhyChooseUs from '@/sections/WhyChooseUs';
import CTA from '@/sections/CTA';
import { usePageMeta } from '@/hooks/usePageMeta';

/**
 * The overview page.
 *
 * Every section here is a summary that hands off to the page holding the full
 * version — six of seventeen services, six of ten reasons — so the home page
 * introduces the organization in one scroll rather than being the whole site
 * with a navbar bolted on. Grounds alternate dark, light, cream and back so the
 * gold accent always lands against the right surface.
 */
export default function Home() {
  usePageMeta(
    'Technology • Training • Talent Transformation',
    'Golden Way Infotech LLC is a Dubai-headquartered technology and training company founded in 2012, with 2,500+ professionals across the UAE and India supporting engagements in over 30 countries.',
  );

  return (
    <>
      <Hero />
      <Stats />
      <Services preview />
      <About cta />
      <WhyChooseUs limit={6} />
      <CTA />
    </>
  );
}
