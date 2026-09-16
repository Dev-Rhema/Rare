import { useState } from "react";
import { CONTACT_FIELDS } from "../../data/site";
import { validateFields } from "../../utils/validation";
import Button from "../ui/Button";
import Card from "../ui/Card";
import FormField from "../ui/FormField";
import { CheckIcon } from "../ui/Icons";

const EMPTY_VALUES = Object.fromEntries(
  CONTACT_FIELDS.map((field) => [field.name, ""]),
);

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name])
      setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateFields(CONTACT_FIELDS, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  const reset = () => {
    setValues(EMPTY_VALUES);
    setSent(false);
  };

  if (sent) {
    return (
      <Card className="flex flex-col items-start p-8 md:p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-on-yellow">
          <CheckIcon />
        </span>
        <h2 className="mt-5 text-2xl font-extrabold">Message sent</h2>
        <p className="mt-2 max-w-md text-muted">
          Thanks, {values.name.split(" ")[0]}. We will reply to {values.email}{" "}
          within one working day.
        </p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card as="form" noValidate onSubmit={handleSubmit} className="p-6 md:p-10">
      <h2 className="text-2xl font-extrabold">Send us a message</h2>
      <p className="mt-1 text-sm text-muted">Fields marked * are required.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {CONTACT_FIELDS.map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={handleChange}
          />
        ))}
      </div>
      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
        Send message
      </Button>
    </Card>
  );
}
