import { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { cn } from '@/lib/cn';
import { validateEnquiry } from '@/lib/validation';
import { SERVICE_CATEGORIES } from '@/data/services';
import Button from '@/components/common/Button';

const INITIAL_VALUES = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

const FIELD_BASE =
  'w-full min-w-0 rounded-sm border bg-white px-3.5 py-3 text-base text-night transition-colors duration-400 ease-premium placeholder:text-ink-muted/60 focus:border-gold-500 focus:outline-none sm:px-4 sm:text-[0.9375rem]';

/**
 * Enquiry form — frontend only.
 *
 * This site has no backend, so nothing is transmitted anywhere. The form
 * validates locally and shows a confirmation state; wiring it to a real
 * endpoint is a later, separate piece of work.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));

    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((previous) => (previous[name] ? { ...previous, [name]: undefined } : previous));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.getElementById(`enquiry-${Object.keys(nextErrors)[0]}`);
      firstInvalid?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-sm border border-gold-500/30 bg-white p-10 text-center shadow-card md:p-14"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-gold-50 text-gold-600">
          <CircleCheckBig className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
        </span>

        <h3 className="mt-7 font-display text-2xl font-normal text-night">
          Thank you, {values.name.trim().split(' ')[0]}.
        </h3>
        <p className="mt-4 max-w-md text-[0.9375rem] leading-[1.85] text-ink-soft">
          Your enquiry details have been captured in this form. This website is a frontend
          demonstration, so nothing has been transmitted — please use the head office telephone
          number listed alongside to reach the team directly.
        </p>

        <Button variant="outlineDark" size="md" className="mt-8" onClick={resetForm}>
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-black/[0.07] bg-white p-5 shadow-card sm:p-7 md:p-9"
      aria-label="Enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="enquiry-name"
          name="name"
          label="Name"
          required
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          placeholder="Your full name"
          autoComplete="name"
        />

        <Field
          id="enquiry-email"
          name="email"
          type="email"
          label="Email"
          required
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="you@company.com"
          autoComplete="email"
        />

        <Field
          id="enquiry-company"
          name="company"
          label="Company"
          value={values.company}
          error={errors.company}
          onChange={handleChange}
          placeholder="Company"
          autoComplete="organization"
        />

        <div className="min-w-0">
          <label
            htmlFor="enquiry-service"
            className="mb-2 block text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Service <span className="text-gold-600">*</span>
          </label>
          <select
            id="enquiry-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'enquiry-service-error' : undefined}
            className={cn(
              FIELD_BASE,
              // A <select> sizes itself to its widest option, and a grid child
              // defaults to `min-width: auto` — so "Partnership & Collaboration"
              // was setting the column's minimum width and pushing the form past
              // the viewport on a 320px screen. `min-w-0` (in FIELD_BASE) lets it
              // shrink; `truncate` ellipses the chosen label instead of letting
              // it demand the space back.
              'truncate',
              errors.service ? 'border-red-600/60' : 'border-black/[0.12]',
              !values.service && 'text-ink-muted/70',
            )}
          >
            {/* `disabled hidden` keeps this as a prompt rather than a choice:
                it still shows in the closed select while nothing is picked, but
                it is not listed among the real options and cannot be re-selected
                once the visitor has chosen. `hidden` removes it from the list in
                Chrome, Safari and Firefox; `disabled` is the fallback for
                browsers that ignore `hidden` on an option, greying it out. */}
            <option value="" disabled hidden>
              Select a service
            </option>
            {SERVICE_CATEGORIES.filter((category) => category.id !== 'all').map((category) => (
              <option key={category.id} value={category.label}>
                {category.label}
              </option>
            ))}
            <option value="Training & Learning">Training & Learning</option>
            <option value="Partnership & Collaboration">Partnership & Collaboration</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {errors.service && (
            <p id="enquiry-service-error" className="mt-2 text-[0.8125rem] text-red-700">
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="enquiry-message"
            className="mb-2 block text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Message <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project, training requirement, or partnership idea."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
            className={cn(
              FIELD_BASE,
              'resize-y',
              errors.message ? 'border-red-600/60' : 'border-black/[0.12]',
            )}
          />
          {errors.message && (
            <p id="enquiry-message-error" className="mt-2 text-[0.8125rem] text-red-700">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.75rem] leading-relaxed text-ink-muted">
          Fields marked <span className="text-gold-600">*</span> are required.
        </p>

        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

/** Single labelled text input with inline validation messaging. */
function Field({ id, name, label, type = 'text', required, value, error, onChange, ...props }) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft"
      >
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(FIELD_BASE, error ? 'border-red-600/60' : 'border-black/[0.12]')}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
