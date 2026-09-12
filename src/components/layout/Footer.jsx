import { MapPin, Phone, Printer } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { SITE } from '@/config/site';
import { FOOTER_COLUMNS, NAV_LINKS } from '@/config/navigation';
import Logo from '@/components/common/Logo';

const currentYear = new Date().getFullYear();

/**
 * Site footer.
 *
 * The main body is off-white so the brand lockup — whose strapline is dark ink —
 * sits on the ground it was drawn for. The legal bar beneath it stays black,
 * keeping the premium dark note the design calls for.
 */
export default function Footer() {
  const handleNavClick = (event, href) => {
    if (!href.startsWith('#')) return;
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="relative overflow-hidden bg-cream text-ink">
      <div className="hairline" aria-hidden="true" />

      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          {/* Brand block */}
          <div>
            {/* Matches the navbar's `sm:h-16` so the lockup is one size across
                the site. Note this is past what the 395 x 100 artwork can hold
                sharp on a retina screen — see src/assets/README.md. */}
            <Logo markClassName="h-14 w-auto sm:h-16" />

            <p className="mt-7 font-caps text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
              {SITE.tagline}
            </p>

            <p className="mt-5 max-w-sm text-[0.875rem] leading-[1.85] text-ink-soft">
              A Dubai-headquartered technology and training company founded in {SITE.established},
              with {SITE.indiaPresence.length} technology centres across India supporting
              engagements in over 30 countries.
            </p>

            <address className="mt-7 space-y-3 text-[0.8125rem] not-italic text-ink-soft">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <span>{SITE.headOffice.lines.slice(1).join(', ')}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <a
                  href={SITE.headOffice.tel.href}
                  className="link-underline transition-colors duration-400 hover:text-gold-700"
                >
                  {SITE.headOffice.tel.label}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <span>Fax {SITE.headOffice.fax.label}</span>
              </p>
            </address>
          </div>

          {/* Link columns. There are six: the five in FOOTER_COLUMNS plus
              Contact below. The count has to divide the column count evenly or
              the last one is orphaned on a row of its own — which is what
              `lg:grid-cols-5` was doing to Contact. Three columns gives two full
              rows and leaves the longer link labels room to sit on one line. */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="label-caps text-night">{column.title}</h2>
                <span className="mt-3 block h-px w-8 bg-gold-500" aria-hidden="true" />

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(event) => handleNavClick(event, link.href)}
                        className="text-[0.8125rem] text-ink-soft transition-colors duration-400 ease-premium hover:text-gold-700"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Contact">
              <h2 className="label-caps text-night">Contact</h2>
              <span className="mt-3 block h-px w-8 bg-gold-500" aria-hidden="true" />

              <ul className="mt-5 space-y-3 text-[0.8125rem] text-ink-soft">
                <li>
                  <a
                    href="#contact"
                    onClick={(event) => handleNavClick(event, '#contact')}
                    className="transition-colors duration-400 ease-premium hover:text-gold-700"
                  >
                    Send an Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.headOffice.tel.href}
                    className="transition-colors duration-400 ease-premium hover:text-gold-700"
                  >
                    {SITE.headOffice.tel.label}
                  </a>
                </li>
                <li>
                  <span className="text-ink-muted">{SITE.emailPlaceholder}</span>
                </li>
                <li>
                  <a
                    href={SITE.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-400 ease-premium hover:text-gold-700"
                  >
                    {SITE.website.label}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Legal bar — the dark note the palette calls for. */}
      <div className="bg-night text-white/45">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-[0.75rem]">
            © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="text-[0.75rem] transition-colors duration-400 hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-caps text-[0.6875rem] uppercase tracking-[0.14em]">
            Dubai · Chennai · Bangalore · Kochi
          </p>
        </div>
      </div>
    </footer>
  );
}
