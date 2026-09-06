import { MapPin, Phone, Printer } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { SITE } from '@/config/site';
import { FOOTER_COLUMNS, NAV_LINKS } from '@/config/navigation';
import Logo from '@/components/common/Logo';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleNavClick = (event, href) => {
    if (!href.startsWith('#')) return;
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <div className="hairline" aria-hidden="true" />

      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          {/* Brand block */}
          <div>
            <Logo variant="light" markClassName="h-10 w-auto" />

            <p className="mt-7 text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-gold-400/90">
              {SITE.tagline}
            </p>

            <p className="mt-5 max-w-sm text-[0.875rem] leading-[1.85] text-white/55">
              A Dubai-headquartered technology and training company founded in {SITE.established},
              with {SITE.indiaPresence.length} technology centres across India supporting
              engagements in over 30 countries.
            </p>

            <address className="mt-7 space-y-3 text-[0.8125rem] not-italic text-white/55">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <span>{SITE.headOffice.lines.slice(1).join(', ')}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <a
                  href={SITE.headOffice.tel.href}
                  className="link-underline transition-colors duration-400 hover:text-gold-300"
                >
                  {SITE.headOffice.tel.label}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <span>Fax {SITE.headOffice.fax.label}</span>
              </p>
            </address>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
                  {column.title}
                </h2>
                <span className="mt-3 block h-px w-8 bg-gold-500/60" aria-hidden="true" />

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(event) => handleNavClick(event, link.href)}
                        className="text-[0.8125rem] text-white/55 transition-colors duration-400 ease-premium hover:text-gold-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Contact">
              <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
                Contact
              </h2>
              <span className="mt-3 block h-px w-8 bg-gold-500/60" aria-hidden="true" />

              <ul className="mt-5 space-y-3 text-[0.8125rem] text-white/55">
                <li>
                  <a
                    href="#contact"
                    onClick={(event) => handleNavClick(event, '#contact')}
                    className="transition-colors duration-400 ease-premium hover:text-gold-300"
                  >
                    Send an Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.headOffice.tel.href}
                    className="transition-colors duration-400 ease-premium hover:text-gold-300"
                  >
                    {SITE.headOffice.tel.label}
                  </a>
                </li>
                <li>
                  <span className="text-white/40">{SITE.emailPlaceholder}</span>
                </li>
                <li>
                  <a
                    href={SITE.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-400 ease-premium hover:text-gold-300"
                  >
                    {SITE.website.label}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />

        <div className="mt-8 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-[0.75rem] text-white/40">
            © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="text-[0.75rem] text-white/40 transition-colors duration-400 hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[0.75rem] text-white/40">Dubai · Chennai · Bangalore · Kochi</p>
        </div>
      </div>
    </footer>
  );
}
