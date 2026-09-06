import { Globe, MapPin, Phone, Printer } from 'lucide-react';
import { SITE } from '@/config/site';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import EnquiryForm from '@/components/common/EnquiryForm';

export default function Contact() {
  return (
    <Section id="contact" tone="cream" ariaLabel="Contact">
      <SectionTitle
        overline="Contact Us"
        title={
          <>
            Let&apos;s Build
            <span className="text-gradient-gold"> What&apos;s Next.</span>
          </>
        }
        description="Golden Way Infotech welcomes enquiries from businesses exploring new technology capability, organizations considering digital initiatives, students and professionals interested in structured training, and potential partners looking to collaborate."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        {/* Company details */}
        <div className="space-y-6">
          <article
            className="rounded-sm border border-black/[0.07] bg-white p-7 shadow-subtle md:p-8"
            data-reveal
          >
            <h3 className="font-display text-[1.375rem] font-semibold text-night">
              Dubai Head Office
            </h3>
            <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
              Our international headquarters
            </p>

            <span className="mt-6 block h-px w-full bg-black/[0.07]" aria-hidden="true" />

            <address className="mt-6 space-y-5 not-italic">
              <div className="flex gap-4">
                <MapPin
                  className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-gold-600"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="text-[0.875rem] leading-[1.9] text-ink-soft">
                  {SITE.headOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-gold-600"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="text-[0.875rem] text-ink-soft">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Telephone
                  </span>
                  <a
                    href={SITE.headOffice.tel.href}
                    className="link-underline mt-1 inline-block font-medium text-night transition-colors duration-400 hover:text-gold-700"
                  >
                    {SITE.headOffice.tel.label}
                  </a>
                </p>
              </div>

              <div className="flex gap-4">
                <Printer
                  className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-gold-600"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="text-[0.875rem] text-ink-soft">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Fax
                  </span>
                  <span className="mt-1 inline-block font-medium text-night">
                    {SITE.headOffice.fax.label}
                  </span>
                </p>
              </div>

              <div className="flex gap-4">
                <Globe
                  className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-gold-600"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="text-[0.875rem] text-ink-soft">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Website
                  </span>
                  <a
                    href={SITE.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-1 inline-block font-medium text-night transition-colors duration-400 hover:text-gold-700"
                  >
                    {SITE.website.label}
                  </a>
                </p>
              </div>
            </address>
          </article>

          <article
            className="rounded-sm border border-black/[0.07] bg-white p-7 shadow-subtle md:p-8"
            data-reveal
          >
            <h3 className="font-display text-[1.375rem] font-semibold text-night">
              India Presence
            </h3>
            <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
              Our India technology network
            </p>

            <ul className="mt-6 space-y-3">
              {SITE.indiaPresence.map((location) => (
                <li
                  key={location}
                  className="flex items-center gap-3 text-[0.875rem] text-ink-soft"
                >
                  <span className="h-px w-5 shrink-0 bg-gold-500" aria-hidden="true" />
                  {location}
                </li>
              ))}
            </ul>
          </article>

          <article
            className="rounded-sm border border-gold-500/25 bg-white p-7 shadow-subtle md:p-8"
            data-reveal
          >
            <h3 className="font-display text-[1.375rem] font-semibold text-night">
              Connect With Us
            </h3>
            <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
              For business, technology, and training enquiries
            </p>

            <ul className="mt-6 space-y-4">
              {SITE.enquiryChannels.map((channel) => (
                <li key={channel.label}>
                  <p className="text-[0.8125rem] font-semibold text-night">{channel.label}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-ink-muted">
                    Email: {SITE.emailPlaceholder}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Form */}
        <div data-reveal>
          <EnquiryForm />
        </div>
      </div>
    </Section>
  );
}
