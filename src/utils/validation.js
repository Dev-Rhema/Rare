const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate values against a field config: [{ name, label, type, required }]. */
export function validateFields(fields, values) {
  return fields.reduce((errors, field) => {
    const value = (values[field.name] ?? '').trim();
    if (field.required && !value) errors[field.name] = `Add your ${field.label.toLowerCase()}.`;
    else if (field.type === 'email' && value && !EMAIL_PATTERN.test(value)) errors[field.name] = 'Enter an email like you@example.com.';
    return errors;
  }, {});
}
