import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '@/config/site';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import EnquiryForm from '@/components/common/EnquiryForm';

/**
 * One way to reach the office: an icon, a small caps label, and the value.
 *
 * The tile is a plain white card with a hairline; the gold appears only on the
 * icon so four tiles in a row do not turn into four gold blocks.
 */
function ContactTile({ icon: Icon, label, children }) {
  return (
    <li
      className="card-surface group p-6 hover:-translate-y-0.5 hover:shadow-card md:p-7"
      data-reveal
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/25 bg-gold-50 text-gold-600 transition-colors duration-500 ease-premium group-hover:bg-gold-500 group-hover:text-night">
        <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <p className="mt-5 font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </p>
      <div className="mt-2 text-[0.9375rem] leading-[1.7] text-night">{children}</div>
    </li>
  );
}

/**
 * Contact.
 *
 * Four tiles across the top — Call, Visit, Email, Website — then the enquiry
 * form full width beneath them. The tiles carry the facts a visitor scanning
 * the page is after, so those are answered before the form asks anything; the
 * form is then given the whole measure, which lets its two-column field grid
 * breathe instead of squeezing beside a column of details.
 */
export default function Contact() {
  return (
    <Section id="contact" tone="cream" ariaLabel="Contact">
      <SectionTitle
        align="center"
        overline="Contact Us"
        title={
          <>
            Let&apos;s Build
            <span className="text-gradient-gold"> What&apos;s Next.</span>
          </>
        }
        description="Golden Way Infotech welcomes enquiries from businesses exploring new technology capability, organizations considering digital initiatives, students and professionals interested in structured training, and potential partners looking to collaborate."
      />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ContactTile icon={Phone} label="Call">
          <a
            href={SITE.headOffice.tel.href}
            className="font-medium transition-colors duration-400 ease-premium hover:text-gold-700"
          >
            {SITE.headOffice.tel.label}
          </a>
          <span className="mt-1 block text-[0.8125rem] text-ink-muted">
            Fax {SITE.headOffice.fax.label}
          </span>
        </ContactTile>

        <ContactTile icon={MapPin} label="Visit">
          <address className="not-italic">
            {/* Building and district only; the full postal address, with the
                PO Box, is in the footer. */}
            <span className="block">{SITE.headOffice.lines[3]}</span>
            <span className="block">
              {SITE.headOffice.lines[4]}, {SITE.headOffice.city}
            </span>
          </address>
        </ContactTile>

        <ContactTile icon={Mail} label="Email">
          <span className="text-ink-soft">{SITE.emailPlaceholder}</span>
        </ContactTile>

        <ContactTile icon={Globe} label="Website">
          <a
            href={SITE.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-400 ease-premium hover:text-gold-700"
          >
            {SITE.website.label}
          </a>
        </ContactTile>
      </ul>

      {/* The form is the only element on the section given a shadow, so it
          reads as the primary surface and the tiles as its supporting row. */}
      <div
        className="mt-6 rounded-[1.25rem] border border-black/[0.07] bg-white p-6 shadow-card sm:p-10 lg:p-12"
        data-reveal
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <div>
            <p className="font-caps text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
              Send an Enquiry
            </p>
            <h3 className="mt-4 font-display text-[1.5rem] font-normal leading-snug text-night md:text-[1.75rem]">
              Tell us what you are working on.
            </h3>
            <p className="mt-4 text-[0.875rem] leading-[1.8] text-ink-soft">
              Business, training, or partnership. Choose the service that fits and the right team
              will pick it up.
            </p>

            <div className="mt-8 border-t border-black/[0.08] pt-6">
              <p className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Offices
              </p>
              <ul className="mt-3 space-y-1.5 text-[0.875rem] text-ink-soft">
                <li className="font-medium text-night">
                  {SITE.headOffice.city}, {SITE.headOffice.country}
                </li>
                {SITE.indiaPresence.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </Section>
  );
}
