import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/config/navigation';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import RouteScroll from '@/components/layout/RouteScroll';

import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TechnologyPage from '@/pages/TechnologyPage';
import TrainingPage from '@/pages/TrainingPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';

/**
 * Six routes and a catch-all, inside one persistent shell.
 *
 * The navbar and footer sit outside <Routes> so a page change swaps only the
 * content between them — the header never remounts, so it never flashes back to
 * its unscrolled state on the way to a new page.
 */
export default function App() {
  return (
    <>
      <RouteScroll />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.services} element={<ServicesPage />} />
          <Route path={ROUTES.technology} element={<TechnologyPage />} />
          <Route path={ROUTES.training} element={<TrainingPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
