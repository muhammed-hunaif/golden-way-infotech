import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import Services from '@/sections/Services';
import EmergingTechnologies from '@/sections/EmergingTechnologies';
import TechnologyStack from '@/sections/TechnologyStack';
import Approach from '@/sections/Approach';
import VisionMission from '@/sections/VisionMission';
import GlobalPresence from '@/sections/GlobalPresence';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Training from '@/sections/Training';
import WebDevelopment from '@/sections/WebDevelopment';
import Contact from '@/sections/Contact';
import CTA from '@/sections/CTA';

/**
 * Single-page corporate site.
 *
 * Section order alternates light and dark surfaces so the gold accent always
 * lands against the right ground, and each section owns its own animation.
 */
export default function App() {
  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <EmergingTechnologies />
        <TechnologyStack />
        <Approach />
        <VisionMission />
        <GlobalPresence />
        <WhyChooseUs />
        <Training />
        <WebDevelopment />
        <Contact />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
