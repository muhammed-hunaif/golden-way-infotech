const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Client-side validation for the enquiry form. This site has no backend, so the
 * form validates and shows a local success state only — nothing is transmitted.
 */
export function validateEnquiry(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Please enter at least 2 characters.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.service) {
    errors.service = 'Please select an area of interest.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about your enquiry.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please enter at least 10 characters.';
  }

  return errors;
}
